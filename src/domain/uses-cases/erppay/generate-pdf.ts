import { GeneratePdfDto } from "../../dtos/erppay/generate-pdf";
import { ErppayRepository } from "../../repositories/erppay.repository";



interface GeneratePdfUseCase {
    execute(generatePdfDto: GeneratePdfDto): Promise<Buffer>
}


export class GeneratePdf implements GeneratePdfUseCase {
    
    constructor(
        private readonly erppayRepository: ErppayRepository
    ){}

    execute(generatePdfDto: GeneratePdfDto): Promise<Buffer> {
        return this.erppayRepository.generatePdf(generatePdfDto);
    }
    
}