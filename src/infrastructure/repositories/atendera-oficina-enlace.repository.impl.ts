import { AtenderaOficinaEnlaceDatasource } from "../../domain/datasources/atendera-oficina-enlace.datasource";
import { AtenderaOficinaEnlaceEntity } from "../../domain/entities/atendera-oficina-enlace.entity";
import { AtenderaOficinaEnlaceRepository } from "../../domain/repositories/atendera-oficina-enlace.repository";


export class AtenderaOficinaEnlaceRepositoryImpl implements AtenderaOficinaEnlaceRepository {
    
    
    constructor(
        private datasource: AtenderaOficinaEnlaceDatasource
    ){}

    
    getByCampana(id_campana: number): Promise<AtenderaOficinaEnlaceEntity[]> {
        return this.datasource.getByCampana(id_campana);
    }

}