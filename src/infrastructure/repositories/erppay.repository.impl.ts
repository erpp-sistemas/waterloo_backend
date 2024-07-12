import { ErppayDatasource } from "../../domain/datasources/erppay.datasource";
import { GeneratePdfDto } from "../../domain/dtos/erppay/generate-pdf";
import { ErppayEntity } from "../../domain/entities/erppay-entity";
import { ErppayRepository } from "../../domain/repositories/erppay.repository";


export class ErppayRepositoryImpl implements ErppayRepository {

    constructor(
        private erppayDatasource: ErppayDatasource
    ){}

    getInfoAccount(account: string): Promise<ErppayEntity> {
        return this.erppayDatasource.getInfoAccount(account);
    }

    generatePdf(generatePdfDto: GeneratePdfDto): Promise<Buffer> {
        return this.erppayDatasource.generatePdf(generatePdfDto);
    }


}