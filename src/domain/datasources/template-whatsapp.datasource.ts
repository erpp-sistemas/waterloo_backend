import { TemplateWhatsappEntity } from "../entities/template-whatsapp";



export abstract class TemplateWhatsappDatasource {
    abstract getAll(): Promise<TemplateWhatsappEntity[]>;
    abstract getByCampana( campana_id: number ): Promise<TemplateWhatsappEntity[]>;
}