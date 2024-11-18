import { TemplateWhatsappDatasource } from "../../domain/datasources/template-whatsapp.datasource";
import { TemplateWhatsappEntity } from "../../domain/entities/template-whatsapp";
import { TemplateWhatsappRepository } from "../../domain/repositories/template-whatsapp.repository";



export class TemplateWhatsappRepositoryImpl extends TemplateWhatsappRepository {
    
    constructor(
        private datasource: TemplateWhatsappDatasource
    ){ super(); }

    getAll(): Promise<TemplateWhatsappEntity[]> {
        throw new Error("Method not implemented.");
    }
    
    getByCampana(campana_id: number): Promise<TemplateWhatsappEntity[]> {
        return this.datasource.getByCampana(campana_id)
    }

}