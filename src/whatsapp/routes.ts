import { Router } from "express";
import { WhatsappController } from "./controller";


export class WhatsappRoutes {

    static get routes(): Router {

        const router = Router();

        const controller = new WhatsappController();

        router.post('/send-template', controller.sendTemplateWhatsapp)


        return router;


    }

}