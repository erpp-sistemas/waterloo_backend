import { NotificationEntity } from "../../entities/notification.entity";
import { NotificationRepository } from "../../repositories/notification.repository";


interface UpdateNotificationByIdUseCase {
    execute( id_notification : number): Promise<NotificationEntity> 
}

export class UpdateNotificationById implements UpdateNotificationByIdUseCase {
   
    constructor(
        private notificationRepository: NotificationRepository
    ){}

    execute(id_notification: number): Promise<NotificationEntity> {
        return this.notificationRepository.updateNotificationById(id_notification)
    }

}