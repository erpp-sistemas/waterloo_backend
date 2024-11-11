import { Request, Response } from "express";
import { GetByCampana } from '../../domain/uses-cases/service-map/get-by-campana'
import { GetByuser } from '../../domain/uses-cases/service-map/get-by-user'
import { ServiceMapRepository } from "../../domain/repositories/service-map.repository";


export class ServiceMapController {

    constructor(
        private repository: ServiceMapRepository
    ){}

    getByCampana = (req: Request, res: Response) => {

        let { campana_id } = req.params;
        new GetByCampana(this.repository).execute(Number(campana_id))
            .then( services => res.json(services))
            .catch( error => res.status(400).json( { error } ))
    
    }

    getByUser = (req: Request, res: Response) => {

        let { user_id } = req.params;
        new GetByuser(this.repository).execute(Number(user_id))
            .then( services => res.json(services))
            .catch( error => res.status(400).json( { error } ))
    
    }

}