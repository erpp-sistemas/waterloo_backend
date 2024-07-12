import { GeneratePdfDto } from "../dtos/erppay/generate-pdf";
import { ErppayEntity } from "../entities/erppay-entity";


export abstract class ErppayDatasource {

    abstract generatePdf(generatePdfDto: GeneratePdfDto): Promise<Buffer>;

}