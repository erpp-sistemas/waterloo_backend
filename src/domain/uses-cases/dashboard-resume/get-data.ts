import { DashboardResumeEntity } from "../../entities/dashboard-resume.entity";
import { DashboardResumeRepository } from "../../repositories/dashboard-resume.repository";

interface GetDataUseCase {
    execute(id_campana: number): Promise<DashboardResumeEntity[]>
}


export class GetData implements GetDataUseCase {
    
    constructor(
        private readonly dashboardResumeRepository: DashboardResumeRepository
    ){}

    execute(id_campana: number): Promise<DashboardResumeEntity[]> {
        return this.dashboardResumeRepository.getData(id_campana)
    }


}