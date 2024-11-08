import { Request, Response } from "express";
import { CampanaRepository } from "../../domain/repositories/campana.repository";
import { GetByUser } from '../../domain/uses-cases/campana/get-by-user';




export class CampanaController {


    constructor(
        private campanaRepository: CampanaRepository
    ){}

    getByUser = async (req: Request, res: Response) => {

        let { user_id } = req.params;

        new GetByUser(this.campanaRepository).execute(Number(user_id))
            .then( campanas => res.json(campanas))
            .catch( error => res.status(400).json( { error } ))

    }

}