import { LayerEntity, LayerWithDataEntity } from "../entities/layer.entity";



export abstract class LayerRepository {
    abstract getAll(): Promise<LayerEntity[]>;
    abstract getById(layer_id: number): Promise<LayerEntity>;
    abstract getByCampanaWithData(campana_id: number): Promise<LayerWithDataEntity[]>;
    abstract getByUserWithData(user_id: number): Promise<LayerWithDataEntity[]>
}