import { DashboardResumeEntity } from "../entities/dashboard-resume.entity";

export abstract class DashboardResumeRepository {

    abstract getData(id_campana: number): Promise<DashboardResumeEntity[]>

}