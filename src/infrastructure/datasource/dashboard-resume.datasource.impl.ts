import { prisma } from "../../data/sqlserver";
import { CustomError } from "../../domain";
import { DashboardResumeDatasource } from "../../domain/datasources/dashboard-resume.datasource";
import { DashboardResumeEntity } from "../../domain/entities/dashboard-resume.entity";


export class DashboardResumeDatasourceImpl implements DashboardResumeDatasource {
    
    async getData(id_campana: number): Promise<DashboardResumeEntity[]> {
        try {
            const dashboard_data:any[] = await prisma.$queryRaw`EXEC sp_get_resume_dashboard_w @id_campana=${id_campana}`
            return dashboard_data.map( data => DashboardResumeEntity.fromObject(data))
        } catch (error) {
            console.error(error)
            throw CustomError.internalServer('Internal server error')
        }
    }

}