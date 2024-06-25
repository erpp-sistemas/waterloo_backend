import { Request, Response } from "express";
import { AtenderaOficinaEnlaceRepository } from "../../domain/repositories/atendera-oficina-enlace.repository";
import { GetByCampana } from '../../domain/uses-cases/atendera-oficina-enlace/get-by-campana'


export class AtenderaOficinaEnlaceController {

    constructor(
        private atenderaOficinaEnlaceRepository: AtenderaOficinaEnlaceRepository
    ){}

    getAtenderaOficina = (req: Request, res: Response) => {
        
        let { id_campana } =  req.params;
        
        new GetByCampana(this.atenderaOficinaEnlaceRepository).execute(Number(id_campana))
            .then( campanas => {
                res.json(campanas)
            }).catch(error => {
                console.error(error);
                res.status(400).json( { error } )
            })

    }


}