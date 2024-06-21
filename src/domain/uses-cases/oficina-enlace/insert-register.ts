import { OficinaEnlaceDto } from "../../dtos";
import { OficinaEnlaceWSEntity } from "../../entities/oficina-enlace-ws.entity";
import { OficinaEnlaceRepository } from "../../repositories/oficina-enlace.repository";


interface InsertRegisterUseCase {
    execute( dto: OficinaEnlaceDto ): Promise<OficinaEnlaceWSEntity>
}


export class InsertRegister implements InsertRegisterUseCase {
    
    constructor(
        public oficinaEnlaceRepository: OficinaEnlaceRepository
    ){}

    execute(dto: OficinaEnlaceDto): Promise<OficinaEnlaceWSEntity> {
        return this.oficinaEnlaceRepository.insertRegister(dto)
    }

}