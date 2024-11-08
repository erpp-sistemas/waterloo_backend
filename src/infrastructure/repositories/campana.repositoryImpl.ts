import { CampanaDatasource } from "../../domain/datasources/campana.datasource";
import { CampanaEntity } from "../../domain/entities/campana.entity";
import { CampanaRepository } from "../../domain/repositories/campana.repository";


export class CampanaRepositoryImpl implements CampanaRepository {

    constructor(
        private datasource: CampanaDatasource
    ) {}

    getAll(): Promise<CampanaEntity[]> {
        throw new Error("Method not implemented.");
    }
    getById(): Promise<CampanaEntity> {
        throw new Error("Method not implemented.");
    }
    getByUser(user_id: number): Promise<CampanaEntity[]> {
        return this.datasource.getByUser(user_id);
    }

}