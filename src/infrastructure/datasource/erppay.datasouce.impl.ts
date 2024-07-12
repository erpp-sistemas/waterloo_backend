import { ErppayDatasource } from "../../domain/datasources/erppay.datasource";
import { GeneratePdfDto } from "../../domain/dtos/erppay/generate-pdf";
import { PdfCreate } from '../../config/pdf-create.adapter'
import { CustomError } from "../../domain";
import { ErppayEntity } from "../../domain/entities/erppay-entity";
import { prisma } from "../../data/sqlserver";



export class ErppayDatasourceImpl implements ErppayDatasource {
    
    async getInfoAccount(account: string): Promise<ErppayEntity> {
        try {
            const data:any = await prisma.$queryRaw`EXEC sp_get_info_account_t @cuenta=${account}`;
            console.log(data);
            return ErppayEntity.fromObject({account: data[0].cuenta, owner: data[0].propietario, debt: data[0].total})
        } catch (error) {
            console.error(error)
            throw CustomError.internalServer('Internal server error')
        }

    }


    async generatePdf(generatePdfDto: GeneratePdfDto): Promise<Buffer> {

        const { account, owner, debt } = generatePdfDto;

        let content = `
            <div style="backgroundColor: 'blue',">
                <h1>Hola, este es un PDF generado en Node.js con Puppeteer!</h1>
                <h1> la cuenta es ${account} del propietario ${owner} y debe ${debt} </h1>
            </div>
        `
        try {
            const pdf = await PdfCreate.createPdf('https://www.ser0.mx');
            return pdf!;
        } catch (error) {
            console.log(error)
            throw CustomError.internalServer('Internal server error')
        }

    }


}