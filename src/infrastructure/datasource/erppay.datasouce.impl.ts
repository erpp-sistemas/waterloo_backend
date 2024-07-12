import { ErppayDatasource } from "../../domain/datasources/erppay.datasource";
import { GeneratePdfDto } from "../../domain/dtos/erppay/generate-pdf";
import { PdfCreate } from '../../config/pdf-create.adapter'
import { CustomError } from "../../domain";
import { ErppayEntity } from "../../domain/entities/erppay-entity";
import { prisma } from "../../data/sqlserver";
import { edoCta } from '../../templates/erppay'



export class ErppayDatasourceImpl implements ErppayDatasource {

    async getInfoAccount(account: string): Promise<ErppayEntity> {
        try {
            const data: any = await prisma.$queryRaw`EXEC sp_get_info_account_t @cuenta=${account}`;
            return ErppayEntity.fromObject({ account: data[0].cuenta, owner: data[0].propietario, debt: data[0].total })
        } catch (error) {
            console.error(error)
            throw CustomError.internalServer('Internal server error')
        }

    }


    async generatePdf(generatePdfDto: GeneratePdfDto): Promise<Buffer> {

        const { account, owner, debt } = generatePdfDto;

        let content = edoCta(account, owner, debt);

        try {
            //const pdf = await PdfCreate.createPdf('https://www.ser0.mx');
            const pdf = await PdfCreate.createPdf(content);
            return pdf!;
        } catch (error) {
            console.log(error)
            throw CustomError.internalServer('Internal server error')
        }

    }


}