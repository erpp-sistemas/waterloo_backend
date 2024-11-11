import { ProcesoDatasource } from "../../domain/datasources/proceso.datasource";
import { ProcesoEntity } from "../../domain/entities/proceso.entity";
import { ProcesoRepository } from "../../domain/repositories/proceso.repository";




export class ProcesoRepositoryImpl extends ProcesoRepository {

    constructor(
        private datasource: ProcesoDatasource
    ){ super(); }

    getAll(): Promise<ProcesoEntity[]> {
        throw new Error("Method not implemented.");
    }
    getById(proceso_id: number): Promise<ProcesoEntity> {
        throw new Error("Method not implemented.");
    }
    getByCampana(campana_id: number): Promise<ProcesoEntity[]> {
        return this.datasource.getByCampana(campana_id);
    }

}