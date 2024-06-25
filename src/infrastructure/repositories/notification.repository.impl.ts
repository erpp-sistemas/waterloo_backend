import { NotificationDatasource } from "../../domain/datasources/notification.datasource";
import { NotificationDto } from "../../domain/dtos/notification/create-notification.dto";
import { NotificationEntity } from "../../domain/entities/notification.entity";
import { NotificationRepository } from "../../domain/repositories/notification.repository";



export class NotificationRepositoryImpl implements NotificationRepository {
    
    constructor(
        private datasource: NotificationDatasource
    ){}


    updateNotification(id_usuario: number): Promise<string> {
        return this.datasource.updateNotification(id_usuario);
    }
    updateNotificationById(id_notification: number): Promise<NotificationEntity> {
        return this.datasource.updateNotificationById(id_notification);
    }

    getByIdUser(id_user: number): Promise<NotificationEntity[]> {
        return this.datasource.getByIdUser(id_user);
    }

    insertNotification(notificationDto: NotificationDto): Promise<NotificationEntity> {
        return this.datasource.insertNotification(notificationDto);
    }

    getById(id_notification: number): Promise<NotificationEntity> {
        throw new Error("Method not implemented.");
    }

}