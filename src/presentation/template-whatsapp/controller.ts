import { Request, Response } from "express";
import { TemplateWhatsappRepository } from "../../domain/repositories/template-whatsapp.repository";
import { GetByCampana } from '../../domain/uses-cases/template-whatsapp/get-by-campana';


export class TemplateWhatsappController {

    constructor(
        private repository: TemplateWhatsappRepository
    ){}

    getByCampana = (req: Request, res: Response) => {

        const { campana_id } = req.params;
        new GetByCampana(this.repository).execute(Number(campana_id))
            .then( data => res.json(data))
            .catch(error => res.status(400).json({error}))

    }

}