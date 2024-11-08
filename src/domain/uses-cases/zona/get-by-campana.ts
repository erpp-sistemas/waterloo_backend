import { ZonaEntity } from "../../entities/zona.entity";
import { ZonaRepository } from "../../repositories/zona.repository";




interface GetByCampanaUseCase {
    execute(campana_id: number): Promise<ZonaEntity[]>
}

export class GetByCampana implements GetByCampanaUseCase {
    
    constructor(
        private readonly zonaRepository: ZonaRepository
    ){}

    execute(campana_id: number): Promise<ZonaEntity[]> {
        return this.zonaRepository.getByCampana(campana_id);
    }

}