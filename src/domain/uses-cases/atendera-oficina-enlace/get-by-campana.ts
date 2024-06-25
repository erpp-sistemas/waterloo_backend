import { AtenderaOficinaEnlaceEntity } from "../../entities/atendera-oficina-enlace.entity";
import { AtenderaOficinaEnlaceRepository } from "../../repositories/atendera-oficina-enlace.repository";


interface GetByCampanaUseCase {
    execute(id_campana: number): Promise<AtenderaOficinaEnlaceEntity[]>
}


export class GetByCampana implements GetByCampanaUseCase {
    

    constructor(
        private atenderaOficinaEnlaceRepository: AtenderaOficinaEnlaceRepository
    ){}

    execute(id_campana: number): Promise<AtenderaOficinaEnlaceEntity[]> {
       return this.atenderaOficinaEnlaceRepository.getByCampana(id_campana)
    }

}
