import { TemplateWhatsappEntity } from "../entities/template-whatsapp";



export abstract class TemplateWhatsappRepository {
    abstract getAll(): Promise<TemplateWhatsappEntity[]>;
    abstract getByCampana( campana_id: number ): Promise<TemplateWhatsappEntity[]>;
}