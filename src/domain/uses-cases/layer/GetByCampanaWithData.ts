import { LayerWithDataEntity } from "../../entities/layer.entity";
import { LayerRepository } from "../../repositories/layer.repository";

interface GetByCampanaWithDataUseCase {
    execute(campana_id: number): Promise<LayerWithDataEntity[]>
}

export class GetByCampanaWithData implements GetByCampanaWithDataUseCase {
    
    constructor(
        private repository: LayerRepository
    ){}
    
    execute(campana_id: number): Promise<LayerWithDataEntity[]> {
        return this.repository.getByCampanaWithData(campana_id);
    }



}