import { ServiceMapEntity } from "../../entities/services-map.entity";
import { ServiceMapRepository } from "../../repositories/service-map.repository";


interface GetByUserUseCase {
    execute(user_id: number): Promise<ServiceMapEntity[]>
}

export class GetByuser implements GetByUserUseCase {
    
    constructor(
        private repository: ServiceMapRepository
    ){}

    execute(user_id: number): Promise<ServiceMapEntity[]> {
        return this.repository.getByUser(user_id);
    }

}