import { Router } from "express";
import { TemplateWhatsappDatasourceImpl } from "../../infrastructure/datasource/template-whatsapp.datasource.impl";
import { TemplateWhatsappRepositoryImpl } from "../../infrastructure/repositories/template-whatsapp.impl.repository";
import { TemplateWhatsappController } from "./controller";



export class TemplateWhatsappRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new TemplateWhatsappDatasourceImpl();
        const repository = new TemplateWhatsappRepositoryImpl(datasource);
        const controller = new TemplateWhatsappController(repository);

        router.get('/get-by-campana/:campana_id', controller.getByCampana)

        return router;

    }

}