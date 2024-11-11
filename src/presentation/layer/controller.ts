import { Request, Response } from "express";
import { GetByCampanaWithData } from '../../domain/uses-cases/layer/GetByCampanaWithData';
import { GetByUserWithData } from '../../domain/uses-cases/layer/GetByUserWithData';
import { LayerRepository } from "../../domain/repositories/layer.repository";



export class LayerController {

    constructor(
        private repository: LayerRepository
    ){}

    getByCampanaWithData = (req: Request, res: Response) => {
        const { campana_id } = req.params;
        new GetByCampanaWithData(this.repository).execute(Number(campana_id))
            .then( layers => res.json(layers))
            .catch(error => res.status(400).json({error}))
    }

    getByUserWithData = (req: Request, res: Response) => {
        const { user_id } = req.params;
        new GetByUserWithData(this.repository).execute(Number(user_id))
            .then( layers => res.json(layers))
            .catch(error => res.status(400).json({error}))
    }

}