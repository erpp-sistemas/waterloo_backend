import { OficinaEnlaceRepository } from "../../repositories/oficina-enlace.repository";


interface FinishCitaUseCase {
    execute( id_oficina_enlace: number, observaciones: string ): Promise<string>
}


export class FinishCita implements FinishCitaUseCase {
    
    constructor(
        public oficinaEnlaceRepository: OficinaEnlaceRepository
    ){}

    execute(id_oficina_enlace: number, observaciones: string): Promise<string> {
        return this.oficinaEnlaceRepository.finishCita(id_oficina_enlace, observaciones)
    }

}