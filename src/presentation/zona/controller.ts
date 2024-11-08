import { Request, Response } from "express";
import { ZonaRepository } from "../../domain/repositories/zona.repository";
import { GetByCampana } from '../../domain/uses-cases/zona/get-by-campana';


export class ZonaController {

    constructor(
        private repository: ZonaRepository
    ){}

    getZonasByCampana = async (req: Request, res: Response) => {

        let { campana_id } = req.params;

        new GetByCampana(this.repository).execute(Number(campana_id))
            .then( zonas => res.status(200).json(zonas))
            .catch( error => res.status(400).json( { error } ))

    }

}