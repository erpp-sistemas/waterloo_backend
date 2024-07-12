import { GeneratePdfDto } from "../dtos/erppay/generate-pdf";
import { ErppayEntity } from "../entities/erppay-entity";


export abstract class ErppayRepository {

    abstract generatePdf(generatePdfDto: GeneratePdfDto): Promise<Buffer>;

}