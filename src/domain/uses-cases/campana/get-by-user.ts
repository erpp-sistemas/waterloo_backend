import { CampanaEntity } from "../../entities/campana.entity";
import { CampanaRepository } from "../../repositories/campana.repository";


interface GetByUserUseCase {
    execute (user_id: number): Promise<CampanaEntity[]>
}


export class GetByUser implements GetByUserUseCase {
    
    constructor(
        private readonly campanaRepository: CampanaRepository
    ){}

    execute(user_id: number): Promise<CampanaEntity[]> {
        return this.campanaRepository.getByUser(user_id);
    }

}