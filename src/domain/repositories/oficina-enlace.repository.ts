import { OficinaEnlaceDto } from "../dtos";
import { OficinaEnlaceEntity } from "../entities/oficina-enlace.entity";



export abstract class OficinaEnlaceRepository {

    abstract insertRegister(oficinaEnlaceDto: OficinaEnlaceDto): Promise<OficinaEnlaceEntity>;

    abstract getByIdCampana(id_campana: number): Promise<OficinaEnlaceEntity[]>;

    abstract getCitasByUser(id_usuario: number): Promise<OficinaEnlaceEntity[]>;

    abstract updateCita(id_oficina_enlace: number, data: {[key: string]: any}): Promise<OficinaEnlaceEntity>

    abstract finishCita(id_oficina_enlace: number, observaciones: string) : Promise<string>

}