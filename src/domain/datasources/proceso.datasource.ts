import { ProcesoEntity } from "../entities/proceso.entity";



export abstract class ProcesoDatasource {
    abstract getAll(): Promise<ProcesoEntity[]>;
    abstract getById(proceso_id: number): Promise<ProcesoEntity>;
    abstract getByCampana(campana_id: number): Promise<ProcesoEntity[]>;
}