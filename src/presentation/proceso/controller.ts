import { Request, Response } from "express";
import { ProcesoRepository } from "../../domain/repositories/proceso.repository";
import { GetByCampana } from '../../domain/uses-cases/proceso/get-by-campana';



export class ProcesoController {

    constructor(
        private procesoRepository: ProcesoRepository
    ) {}

    getByCampana = async (req: Request, res: Response) => {

        let { campana_id } = req.params;

        new GetByCampana(this.procesoRepository).execute(Number(campana_id))
            .then( procesos => res.json(procesos))
            .catch( error => res.status(400).json({ error }))

    }

}