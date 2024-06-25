import { NotificationDto } from "../../dtos/notification/create-notification.dto";
import { NotificationEntity } from "../../entities/notification.entity";
import { NotificationRepository } from "../../repositories/notification.repository";


interface InsertRegisterUseCase {
    execute( dto : NotificationDto): Promise<NotificationEntity> 
}

export class InsertRegister implements InsertRegisterUseCase {
   
    constructor(
        private notificationRepository: NotificationRepository
    ){}

    execute(dto: NotificationDto): Promise<NotificationEntity> {
        return this.notificationRepository.insertNotification(dto);
    }

}