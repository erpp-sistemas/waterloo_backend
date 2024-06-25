import { Request, Response } from "express";
import { NotificationRepository } from "../../domain/repositories/notification.repository";
import { InsertRegister, GetByUser, UpdateNotification, UpdateNotificationById } from '../../domain/uses-cases/notification'
import { NotificationDto } from "../../domain/dtos/notification/create-notification.dto";
import { WssService } from "../services/wss.service";


export class NotificationController {

    constructor(
        private notificationRepository: NotificationRepository,
        private wssService = WssService.instance
    ) { }

    insertNewNotification = (req: Request, res: Response) => {
        const [error, notificationDto] = NotificationDto.create(req.body);
        if (error) return res.status(400).json({ error });
        new InsertRegister(this.notificationRepository).execute(notificationDto!)
            .then(notification => {

                new GetByUser(this.notificationRepository).execute(notification.id_usuario)
                    .then(noti_user => {
                        this.wssService.sendMessage('on-notification-changed', noti_user)
                    })
                res.json(notification)

            }).catch(error => {
                console.error("Error ", error)
                res.status(400).json({ error })
            })
    }

    getByUser = (req: Request, res: Response) => {
        let { id_user } = req.params;
        new GetByUser(this.notificationRepository).execute(Number(id_user))
            .then(noti_user => res.json(noti_user))
            .catch(error => {
                console.error("Error ", error)
                res.status(400).json({ error })
            })
    }

    updateById = (req: Request, res: Response) => {
        let { id } = req.params;
        new UpdateNotificationById(this.notificationRepository).execute(Number(id))
            .then(noti_update => {

                new GetByUser(this.notificationRepository).execute(noti_update.id_usuario)
                    .then(noti_user => {
                        this.wssService.sendMessage('on-notification-changed', noti_user)
                    })
                res.json(noti_update)

            })
            .catch(error => {
                console.error("Error ", error)
                res.status(400).json({ error })
            })
    }

    updateByUser = (req: Request, res: Response) => {
        let { id_user } = req.body;

        new UpdateNotification(this.notificationRepository).execute(id_user)
            .then(message => {

                new GetByUser(this.notificationRepository).execute(id_user)
                    .then(noti_user => {
                        this.wssService.sendMessage('on-notification-changed', noti_user)
                    })
                res.json(message)
            })
            .catch(error => {
                console.error("Error ", error)
                res.status(400).json({ error })
            })
    }




}