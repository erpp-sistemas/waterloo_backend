import { Request, Response } from "express";
import { OficinaEnlaceRepository } from "../../domain/repositories/oficina-enlace.repository";
import { OficinaEnlaceDto } from "../../domain";
import { InsertRegister, GetByCampanaByUser, UpdateCita, FinishCita } from '../../domain/uses-cases/oficina-enlace'
import { RequestAdapter } from "../../config/request.adapter";
import { envs } from "../../config/envs";


export class OficinaEnlaceController {

    constructor(
        private oficinaEnlaceRepository: OficinaEnlaceRepository
    ) { }

    insertNewRegisterOE = (req: Request, res: Response) => {
        const [error, oficinaEnlaceDto] = OficinaEnlaceDto.create(req.body)
        if (error) return res.status(400).json({ error });

        new InsertRegister(this.oficinaEnlaceRepository).execute(oficinaEnlaceDto!)
            .then(register => {
                if (register.id_atendera > 0) {
                    let { id_oficina_enlace, id_atendera } = register;
                    const body = { name: 'Se te ha asignado una nueva cita.', id_usuario: id_atendera, id_type_notification: 1, id_oficina_enlace: id_oficina_enlace }
                    RequestAdapter.post(envs.INSERT_NOTIFICATION_URL, body)
                        .then(notification =>  {})
                        .catch(error => console.error("No se pudo registrar la notificación ", error))
                }

                res.json({ message: 'Registro insertado correctamente' })

            }).catch(error => res.status(400).json({ error }))
    }


    //* citas son el id_asunto 1 de los registros de oficina enlace
    getByUser = (req: Request, res: Response) => {
        let { id_usuario } = req.params;
        new GetByCampanaByUser(this.oficinaEnlaceRepository).execute(Number(id_usuario))
            .then(citas => res.json(citas))
            .catch(error => res.status(400).json({ error }))
    }

    updateCita = (req: Request, res: Response) => {
        let { id_oficina_enlace, data } = req.body;

        new UpdateCita(this.oficinaEnlaceRepository).execute(id_oficina_enlace, data)
            .then(cita => res.json(cita))
            .catch(error => res.status(400).json({ error }))
    }

    finishCita = (req: Request, res: Response) => {
        let { id_oficina_enlace, observaciones } = req.body;
        new FinishCita(this.oficinaEnlaceRepository).execute(id_oficina_enlace, observaciones)
            .then(message => res.json({ message }))
            .catch(error => res.status(400).json({ error }))
    }


} 