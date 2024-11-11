import { CampanaEntity } from "../../entities/campana.entity";
import { CampanaRepository } from "../../repositories/campana.repository";


interface GetByIdUseCase {
    execute(campana_id: number): Promise<CampanaEntity>;
}


export class GetById implements GetByIdUseCase {
    
    constructor(
        private repository: CampanaRepository
    ){}

    execute(campana_id: number): Promise<CampanaEntity> {
        return this.repository.getById(campana_id);
    }

}