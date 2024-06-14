import { DashboardResumeEntity } from "../entities/dashboard-resume.entity";

export abstract class DashboardResumeDatasource {

    abstract getData(id_campana: number): Promise<DashboardResumeEntity[]>

}