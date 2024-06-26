import { OficinaEnlaceDto } from "../dtos";
import { OficinaEnlaceEntity } from "../entities/oficina-enlace.entity";



export abstract class OficinaEnlaceDatasource {

    abstract insertRegister(oficinaEnlaceDto: OficinaEnlaceDto): Promise<OficinaEnlaceEntity>  

    abstract getByIdCampana(id_campana: number): Promise<OficinaEnlaceEntity[]>

    //* las citas seran los registros de oficina enlace que tengan 1 como id_asunto
    abstract getCitasByCampanaByUser(id_campana: number, id_usuario: number): Promise<OficinaEnlaceEntity[]>;

    abstract updateCita(id_oficina_enlace: number, data: {[key: string]: any}): Promise<OficinaEnlaceEntity>

}