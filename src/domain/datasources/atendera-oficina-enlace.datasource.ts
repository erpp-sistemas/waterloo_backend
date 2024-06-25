import { AtenderaOficinaEnlaceEntity } from "../entities/atendera-oficina-enlace.entity";



export abstract class AtenderaOficinaEnlaceDatasource {

    abstract getByCampana(id_campana: number): Promise<AtenderaOficinaEnlaceEntity[]>;

}