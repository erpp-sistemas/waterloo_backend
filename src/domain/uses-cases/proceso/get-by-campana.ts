import { ProcesoEntity } from "../../entities/proceso.entity";
import { ProcesoRepository } from "../../repositories/proceso.repository";



interface GetByCampanaUseCase {
    execute( campana_id: number ): Promise<ProcesoEntity[]>;
}


export class GetByCampana implements GetByCampanaUseCase {
    
    constructor(
        private readonly procesoRepository: ProcesoRepository
    ){}

    execute(campana_id: number): Promise<ProcesoEntity[]> {
        return this.procesoRepository.getByCampana(campana_id);
    }

}