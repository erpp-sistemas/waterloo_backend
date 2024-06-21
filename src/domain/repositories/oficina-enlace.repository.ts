import { OficinaEnlaceDto } from "../dtos";
import { OficinaEnlaceWSEntity } from "../entities/oficina-enlace-ws.entity";
import { OficinaEnlaceEntity } from "../entities/oficina-enlace.entity";



export abstract class OficinaEnlaceRepository {

    abstract insertRegister(oficinaEnlaceDto: OficinaEnlaceDto): Promise<OficinaEnlaceWSEntity>  

    abstract getByIdCampana(id_campana: number): Promise<OficinaEnlaceEntity[]>

}