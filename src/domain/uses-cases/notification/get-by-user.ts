import { NotificationEntity } from "../../entities/notification.entity";
import { NotificationRepository } from "../../repositories/notification.repository";


interface GetByUserUseCase {
    execute( id_user : number): Promise<NotificationEntity[]> 
}

export class GetByUser implements GetByUserUseCase {
   
    constructor(
        private notificationRepository: NotificationRepository
    ){}

    execute(id_user: number): Promise<NotificationEntity[]> {
        return this.notificationRepository.getByIdUser(id_user)
    }

}