import { ZonaEntity } from "../entities/zona.entity";



export abstract class ZonaDatasource {
    abstract getAll(): Promise<ZonaEntity[]>;
    abstract getById(zona_id: number): Promise<ZonaEntity>;
    abstract getByCampana(campana_id: number): Promise<ZonaEntity[]>
}