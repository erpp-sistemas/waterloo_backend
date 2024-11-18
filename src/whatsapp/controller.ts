import { Request, Response } from "express";
import service from './service'

export class WhatsappController {

    sendTemplateWhatsapp = (req: Request, res: Response) => {
        const { phone_number, template_id, params } = req.body;
        service.sendMessage(phone_number, template_id, params)
            .then( ( message ) => res.status(200).json({message}))
            .catch( error => res.status(400).json( { error } ))
    }

}