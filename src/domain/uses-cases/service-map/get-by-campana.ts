import { ServiceMapEntity } from "../../entities/services-map.entity";
import { ServiceMapRepository } from "../../repositories/service-map.repository";


interface GetByCampanaUseCase {
    execute(campana_id: number): Promise<ServiceMapEntity[]>
}

export class GetByCampana implements GetByCampanaUseCase {
    
    constructor(
        private repository: ServiceMapRepository
    ){}

    execute(campana_id: number): Promise<ServiceMapEntity[]> {
        return this.repository.getByCampana(campana_id);
    }

}