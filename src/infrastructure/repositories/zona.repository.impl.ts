import { ZonaDatasource } from "../../domain/datasources/zona.datasource";
import { ZonaEntity } from "../../domain/entities/zona.entity";
import { ZonaRepository } from "../../domain/repositories/zona.repository";



export class ZonaRepositoryImpl extends ZonaRepository {

    constructor(
        private datasource: ZonaDatasource
    ){ super(); }

    getAll(): Promise<ZonaEntity[]> {
        throw new Error("Method not implemented.");
    }
    getById(zona_id: number): Promise<ZonaEntity> {
        throw new Error("Method not implemented.");
    }
    getByCampana(campana_id: number): Promise<ZonaEntity[]> {
        return this.datasource.getByCampana(campana_id);
    }

}