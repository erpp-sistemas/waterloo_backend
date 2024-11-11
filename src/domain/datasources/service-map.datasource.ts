import { ServiceMapEntity } from "../entities/services-map.entity";




export abstract class ServiceMapDatasource {

    abstract getAll(): Promise<ServiceMapEntity[]>;
    abstract getById(service_id: number): Promise<ServiceMapEntity>;
    abstract getByCampana(campana_id: number): Promise<ServiceMapEntity[]>;
    abstract getByUser(user_id: number): Promise<ServiceMapEntity[]>

}