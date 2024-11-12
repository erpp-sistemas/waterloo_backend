import { prisma } from "../../data/sqlserver";
import { CustomError } from "../../domain";
import { ReporteAsistenciaDatasource } from "../../domain/datasources/reporte-asistencia.datasource";
import { ReporteAsistenciaEntity } from "../../domain/entities/reporte-asistencia.entity";


export class ReporteAsistenciaDatasourceImpl extends ReporteAsistenciaDatasource {

    async getReporteAsistencia(campana_id: number, date_init: string, date_end: string): Promise<ReporteAsistenciaEntity[]> {
        try {
            const res: any[] = await prisma.$queryRaw`EXEC sp_get_registro_asistencia @id_campana=${campana_id}, @fecha_inicio=${date_init}, @fecha_fin=${date_end}`
            return res.map( (reporte) => ReporteAsistenciaEntity.fromObject(reporte));
        } catch (error) {
            console.error(error)
            throw CustomError.internalServer('Internal server error')
        }
    }

}