import { OficinaEnlaceDto } from "../../domain";
import { OficinaEnlaceDatasource } from "../../domain/datasources/oficina.enlace.datasource";
import { OficinaEnlaceEntity } from "../../domain/entities/oficina-enlace.entity";
import { OficinaEnlaceRepository } from "../../domain/repositories/oficina-enlace.repository";


export class OficinaEnlaceRepositoryImpl implements OficinaEnlaceRepository {


    constructor(
        private datasource: OficinaEnlaceDatasource
    ) {}
    
    insertRegister(oficinaEnlaceDto: OficinaEnlaceDto): Promise<OficinaEnlaceEntity> {
        return this.datasource.insertRegister(oficinaEnlaceDto)
    }

    getByIdCampana(id_campana: number): Promise<OficinaEnlaceEntity[]> {
        throw new Error("Method not implemented.");
    }



}