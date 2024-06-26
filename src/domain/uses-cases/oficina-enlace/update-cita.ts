import { OficinaEnlaceEntity } from "../../entities/oficina-enlace.entity";
import { OficinaEnlaceRepository } from "../../repositories/oficina-enlace.repository";


interface UpdateCitaUseCase {
    execute(id_oficina_enlace: number, data: {[key: string]: any}): Promise<OficinaEnlaceEntity>
}


export class UpdateCita implements UpdateCitaUseCase {

    constructor(
        private oficinaEnlaceRepository: OficinaEnlaceRepository
    ){}

    execute(id_oficina_enlace: number, data: {[key: string]: any}): Promise<OficinaEnlaceEntity> {
        return this.oficinaEnlaceRepository.updateCita(id_oficina_enlace, data);
    }

}