import { ServiceMapDatasource } from "../../domain/datasources/service-map.datasource";
import { ServiceMapEntity } from "../../domain/entities/services-map.entity";
import { ServiceMapRepository } from "../../domain/repositories/service-map.repository";



export class ServiceMapRepositoryImpl extends ServiceMapRepository {
    
    constructor(
        private datasource: ServiceMapDatasource
    ){ super(); }

    getAll(): Promise<ServiceMapEntity[]> {
        throw new Error("Method not implemented.");
    }
    getById(service_id: number): Promise<ServiceMapEntity> {
        throw new Error("Method not implemented.");
    }

    getByCampana(campana_id: number): Promise<ServiceMapEntity[]> {
        return this.datasource.getByCampana(campana_id);
    }

    getByUser(user_id: number): Promise<ServiceMapEntity[]> {
        return this.datasource.getByUser(user_id);
    }

}