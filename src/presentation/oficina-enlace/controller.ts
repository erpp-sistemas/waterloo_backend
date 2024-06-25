import { Request, Response } from "express";
import { OficinaEnlaceRepository } from "../../domain/repositories/oficina-enlace.repository";
import { OficinaEnlaceDto } from "../../domain";
import { InsertRegister } from '../../domain/uses-cases/oficina-enlace/insert-register'
import { WssService } from "../services/wss.service";


export class OficinaEnlaceController {

    constructor(
        private oficinaEnlaceRepository: OficinaEnlaceRepository,
        private wssService = WssService.instance
    ) { }

    insertNewRegisterOE = (req: Request, res: Response) => {
        const [error, oficinaEnlaceDto] = OficinaEnlaceDto.create(req.body)
        if (error) return res.status(400).json({ error });

        new InsertRegister(this.oficinaEnlaceRepository).execute(oficinaEnlaceDto!)
            .then(register => {
                if (register.id_atendera > 0) {
                    let { id_oficina_enlace, id_asunto, id_atendera } = register;
                    const obj = { id_oficina_enlace, id_asunto, id_atendera }
                    this.wssService.sendMessage('on-cita-changed', obj)
                }
                res.json({ message: 'Registro insertado correctamente' })
            }).catch(error => res.status(400).json({ error }))

    }


} 