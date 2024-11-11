import { LayerWithDataEntity } from "../../entities/layer.entity";
import { LayerRepository } from "../../repositories/layer.repository";

interface GetByUserWithDataUseCase {
    execute(user_id: number): Promise<LayerWithDataEntity[]>
}

export class GetByUserWithData implements GetByUserWithDataUseCase {
    
    constructor(
        private repository: LayerRepository
    ){}
    
    execute(user_id: number): Promise<LayerWithDataEntity[]> {
        return this.repository.getByUserWithData(user_id);
    }



}