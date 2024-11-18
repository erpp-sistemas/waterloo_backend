import { TemplateWhatsappEntity } from "../../entities/template-whatsapp";
import { TemplateWhatsappRepository } from "../../repositories/template-whatsapp.repository";


interface GetByCampanaUseCase {
    execute(campana_id: number): Promise<TemplateWhatsappEntity[]>
}


export class GetByCampana implements GetByCampanaUseCase {
    
    constructor(
        private repository: TemplateWhatsappRepository
    ){}

    execute(campana_id: number): Promise<TemplateWhatsappEntity[]> {
        return this.repository.getByCampana(campana_id)
    }

}