import { Request, Response } from "express";
import { CampanaRepository } from "../../domain/repositories/campana.repository";
import { GetByUser } from '../../domain/uses-cases/campana/get-by-user';
import { GetById } from '../../domain/uses-cases/campana/get-by-id'




export class CampanaController {


    constructor(
        private campanaRepository: CampanaRepository
    ){}

    getByUser = (req: Request, res: Response) => {

        let { user_id } = req.params;

        new GetByUser(this.campanaRepository).execute(Number(user_id))
            .then( campanas => res.json(campanas))
            .catch( error => res.status(400).json( { error } ))

    }

    getById = (req: Request, res: Response) => {
        let { campana_id } = req.params;

        new GetById(this.campanaRepository).execute(Number(campana_id))
            .then( campana => res.json(campana))
            .catch( error => res.status(400).json( { error } ))
    }

}