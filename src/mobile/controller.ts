import { Request, Response } from "express";
import { MobileService } from "./service";


export class MobileController {

    constructor(
        private service: MobileService
    ) { }

    signIn = (req: Request, res: Response) => {
        const { username, password } = req.body;
        this.service.LoginSql(username, password)
            .then((data) => {
                const [error, user] = data;
                if (error) return res.status(200).json({ error });
                return res.status(200).json(user)
            }).catch(error => res.status(400).json({ error }))
    }


    getCampanasProcesosModulosByUser = (req: Request, res: Response) => {
        const { user_id } = req.params;
        this.service.getCampanasProcesosModulosByUser(Number(user_id))
            .then(data => res.status(200).json(data))
            .catch(error => res.status(400).json({ error }))
    }

    registerAsistencia = (req: Request, res: Response) => {
        const { tipo, hora_entrante, latitud, longitud, url_foto, id_usuario } = req.body;
        this.service.registerAsistencia({ tipo, hora_entrante, latitud, longitud, url_foto, id_usuario })
            .then(message => res.status(200).json({ message }))
            .catch(error => res.status(400).json({ error }))
    }

    getAsignacion = (req: Request, res: Response) => {
        const { user_id, campana_id, proceso_id } = req.params;
        this.service.getAsignacion(Number(user_id), Number(campana_id), Number(proceso_id))
            .then(data_asignacion => res.status(200).json(data_asignacion))
            .catch(error => res.status(400).json({ error }))
    }

    getFindContribuyente = (req: Request, res: Response) => {
        const { nombre, segundo_nombre, apellido_paterno, apellido_materno } = req.params;
        this.service.findContribuyenteByData(nombre, segundo_nombre, apellido_paterno, apellido_materno)
            .then(contribuyente => res.status(200).json(contribuyente))
            .catch(error => res.status(400).json({ error }))
    }

    getDirectorio = (req: Request, res: Response) => {
        this.service.getDirectorio()
            .then(directorio => res.status(200).json(directorio))
            .catch(error => res.status(400).json({ error }))
    }

    insertPhotoRegister = (req: Request, res: Response) => {
        const { fecha, id_campana, id_contribuyente, id_proceso, id_usuario, imageName, tipo, url_imagen } = req.body;
        this.service.insertPhotoRegister({ fecha, id_campana, id_contribuyente, id_proceso, id_usuario, imageName, tipo, url_imagen })
            .then(message => res.status(200).json({ message }))
            .catch(error => res.status(400).json({ error }))
    }

    updateIdUserPush = (req: Request, res: Response) => {
        const { user_id, new_id_push } = req.body;
        this.service.updateIdPush(Number(user_id), new_id_push)
            .then(message => res.status(200).json({ message }))
            .catch(error => res.status(400).json({ error }))
    }

    getPushByUser = (req: Request, res: Response) => {
        const { user_id } = req.params;
        this.service.getPushNotificationsByUser(Number(user_id))
            .then(notifications => res.status(200).json(notifications))
            .catch(error => res.status(400).json({ error }))
    }


    deletePush = (req: Request, res: Response) => {
        const { user_id, id_push } = req.body;
        this.service.deletePushByIdAndUser(user_id, id_push)
            .then(message => res.status(200).json({ message }))
            .catch(error => res.status(400).json({ error }))
    }

    getRegisterByContribuyente = (req: Request, res: Response) => {
        const { contribuyente_id } = req.params;
        this.service.getRegisterByContribuyente(contribuyente_id)
            .then(registers => res.status(200).json(registers))
            .catch(error => res.status(400).json({ error }))
    }

    insertRegister = (req: Request, res: Response) => {
        this.service.insertRegisterContribuyente(req.body)
            .then( message => res.status(200).json( { message } ))
            .catch(error => res.status(400).json({ error }))
    }


}