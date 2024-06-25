import { OficinaEnlaceDto } from "../../dtos";
import { OficinaEnlaceEntity } from "../../entities/oficina-enlace.entity";
import { OficinaEnlaceRepository } from "../../repositories/oficina-enlace.repository";


interface InsertRegisterUseCase {
    execute( dto: OficinaEnlaceDto ): Promise<OficinaEnlaceEntity>
}


export class InsertRegister implements InsertRegisterUseCase {
    
    constructor(
        public oficinaEnlaceRepository: OficinaEnlaceRepository
    ){}

    execute(dto: OficinaEnlaceDto): Promise<OficinaEnlaceEntity> {
        return this.oficinaEnlaceRepository.insertRegister(dto)
    }

}