import { Request, Response } from "express";
import { OficinaEnlaceRepository } from "../../domain/repositories/oficina-enlace.repository";
import { OficinaEnlaceDto } from "../../domain";
import { InsertRegister, GetByCampanaByUser, UpdateCita, FinishCita } from '../../domain/uses-cases/oficina-enlace'
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


    //* citas son el id_asunto 1 de los registros de oficina enlace
    getByUser = (req: Request, res: Response) => {
        let { id_usuario } = req.params;
        new GetByCampanaByUser(this.oficinaEnlaceRepository).execute(Number(id_usuario))
            .then( citas => res.json(citas))
            .catch(error => res.status(400).json({ error }))
    }

    updateCita = (req: Request, res: Response) => {
        let { id_oficina_enlace, data } = req.body;

        new UpdateCita(this.oficinaEnlaceRepository).execute(id_oficina_enlace, data)
            .then( cita => res.json(cita) )
            .catch(error => res.status(400).json({ error }))
    }

    finishCita = (req: Request, res: Response) => {
        let { id_oficina_enlace, observaciones } = req.body;
        new FinishCita(this.oficinaEnlaceRepository).execute(id_oficina_enlace, observaciones)
            .then( message => res.json({ message }))
            .catch(error => res.status(400).json( { error } ))
    }


} 