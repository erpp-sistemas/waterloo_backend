import { DashboardResumeDatasource } from "../../domain/datasources/dashboard-resume.datasource";
import { DashboardResumeEntity } from "../../domain/entities/dashboard-resume.entity";
import { DashboardResumeRepository } from "../../domain/repositories/dashboard-resume.repository";


export class DashboardResumeRepositoryImpl implements DashboardResumeRepository {
    
    constructor(
        public datasource: DashboardResumeDatasource
    ){}

    getData(id_campana: number): Promise<DashboardResumeEntity[]> {
        return this.datasource.getData(id_campana)
    }

}