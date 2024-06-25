import { NotificationDto } from "../dtos/notification/create-notification.dto";
import { NotificationEntity } from "../entities/notification.entity";



export abstract class NotificationDatasource {
   
    abstract getById(id_notification: number): Promise<NotificationEntity>;
    abstract getByIdUser(id_user: number): Promise<NotificationEntity[]>;
    abstract insertNotification( notificationDto: NotificationDto ): Promise<NotificationEntity>;
    abstract updateNotification(id_usuario: number): Promise<string>;
    abstract updateNotificationById(id_notification: number): Promise<NotificationEntity>;

}