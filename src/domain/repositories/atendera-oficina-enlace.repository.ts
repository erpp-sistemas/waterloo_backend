import { AtenderaOficinaEnlaceEntity } from "../entities/atendera-oficina-enlace.entity";



export abstract class AtenderaOficinaEnlaceRepository {

    abstract getByCampana(id_campana: number): Promise<AtenderaOficinaEnlaceEntity[]>;

}