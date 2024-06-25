import { NotificationEntity } from "../../entities/notification.entity";
import { NotificationRepository } from "../../repositories/notification.repository";


interface UpdateNotificationUseCase {
    execute( id_usuario : number): Promise<string> 
}

export class UpdateNotification implements UpdateNotificationUseCase {
   
    constructor(
        private notificationRepository: NotificationRepository
    ){}

    execute(id_usuario: number): Promise<string> {
        return this.notificationRepository.updateNotification(id_usuario)
    }

}