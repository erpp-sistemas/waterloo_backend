import { OficinaEnlaceEntity } from "../../entities/oficina-enlace.entity";
import { OficinaEnlaceRepository } from "../../repositories/oficina-enlace.repository";


interface GetByCampanaByUserUseCase {
    execute( id_campana: number, id_usuario: number ): Promise<OficinaEnlaceEntity[]>
}


export class GetByCampanaByUser implements GetByCampanaByUserUseCase {
    
    constructor(
        public oficinaEnlaceRepository: OficinaEnlaceRepository
    ){}

    execute(id_campana: number, id_usuario: number): Promise<OficinaEnlaceEntity[]> {
        return this.oficinaEnlaceRepository.getCitasByCampanaByUser(id_campana, id_usuario)
    }

}