
import { S3Client } from "@aws-sdk/client-s3"
import { Upload } from '@aws-sdk/lib-storage';
import { envs } from "./envs"
import { Readable } from 'stream';


interface Options {
    bucket_name: string;
}

export class StorageAdapter {


    private static _instance: StorageAdapter;
    public s3Client: S3Client;

    public region: string = envs.REGION;
    public access_key_id: string = envs.ACCESS_KEY_ID;
    public secret_access_key: string = envs.SECRET_ACCESS_KEY;

    public bucket_name: string;

    private constructor(options: Options) {
        this.s3Client = new S3Client({
            region: this.region,
            credentials: {
                accessKeyId: this.access_key_id,
                secretAccessKey: this.secret_access_key
            }
        })
        this.bucket_name = options.bucket_name;
    }

    static get instance(): StorageAdapter {
        if (!StorageAdapter._instance) {
            throw 'StorageAdapter is not initialized';
        }

        return StorageAdapter._instance;
    }

    static initStorage(options: Options) {
        StorageAdapter._instance = new StorageAdapter(options);
    }


    public async uploadFile(pdf_file: Buffer, folder_name: string, file_name: string): Promise<string> {
        const pdfStream = new Readable();
        pdfStream._read = () => { };
        pdfStream.push(pdf_file);
        pdfStream.push(null);

        const uploadParams = {
            Bucket: this.bucket_name,
            Key: `${folder_name}/${file_name}`,
            Body: pdfStream,
            ContentType: 'application/pdf',
        };

        try {

            const parallelUploads3 = new Upload({
                client: this.s3Client,
                params: uploadParams,
                leavePartsOnError: false, // Optional
            });

            parallelUploads3.on('httpUploadProgress', (progress) => {});
            const data = await parallelUploads3.done();
            //console.log('Archivo subido exitosamente:', data);

            const fileUrl = `https://${this.bucket_name}.s3.${this.region}.amazonaws.com/${folder_name}/${file_name}`;

            return fileUrl;
        } catch (err) {
            console.error('Error al subir el archivo:', err);
            throw err;
        }

    }





}