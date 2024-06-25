import { OficinaEnlaceDto } from "../dtos";
import { OficinaEnlaceEntity } from "../entities/oficina-enlace.entity";



export abstract class OficinaEnlaceRepository {

    abstract insertRegister(oficinaEnlaceDto: OficinaEnlaceDto): Promise<OficinaEnlaceEntity>  

    abstract getByIdCampana(id_campana: number): Promise<OficinaEnlaceEntity[]>

}