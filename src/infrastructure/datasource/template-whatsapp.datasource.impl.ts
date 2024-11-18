import { prisma } from "../../data/sqlserver";
import { CustomError } from "../../domain";
import { TemplateWhatsappDatasource } from "../../domain/datasources/template-whatsapp.datasource";
import { TemplateWhatsappEntity } from "../../domain/entities/template-whatsapp";


export class TemplateWhatsappDatasourceImpl extends TemplateWhatsappDatasource {

    getAll(): Promise<TemplateWhatsappEntity[]> {
        throw new Error("Method not implemented.");
    }


    async getByCampana(campana_id: number): Promise<TemplateWhatsappEntity[]> {
        try {

            const templates = await prisma.template_whatsapp.findMany({
                where: {
                    campana_template_whatsapp: {
                        some: { id_campana: campana_id }
                    }
                }
              });
            return templates.map( template => TemplateWhatsappEntity.fromObject(template))

        } catch (error) {
            console.error(error)
            throw CustomError.internalServer('Internal server error')
        }
    }



}