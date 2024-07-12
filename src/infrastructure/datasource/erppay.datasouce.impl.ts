import { ErppayDatasource } from "../../domain/datasources/erppay.datasource";
import { GeneratePdfDto } from "../../domain/dtos/erppay/generate-pdf";
import { ErppayEntity } from "../../domain/entities/erppay-entity";
import { PdfCreate } from '../../config/pdf-create.adapter'
import { CustomError } from "../../domain";



export class ErppayDatasourceImpl implements ErppayDatasource {


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