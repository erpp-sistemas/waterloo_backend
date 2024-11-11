import { LayerDatasource } from "../../domain/datasources/layer.datasource";
import { LayerEntity, LayerWithDataEntity } from "../../domain/entities/layer.entity";
import { LayerRepository } from "../../domain/repositories/layer.repository";


export class LayerRepositoryImpl extends LayerRepository {


    constructor(
        private datasource: LayerDatasource
    ){ super(); }

    getAll(): Promise<LayerEntity[]> {
        throw new Error("Method not implemented.");
    }
    getById(layer_id: number): Promise<LayerEntity> {
        throw new Error("Method not implemented.");
    }
    getByCampanaWithData(campana_id: number): Promise<LayerWithDataEntity[]> {
        return this.datasource.getByCampanaWithData(campana_id);
    }
    getByUserWithData(user_id: number): Promise<LayerWithDataEntity[]> {
        return this.datasource.getByUserWithData(user_id);
    }

}