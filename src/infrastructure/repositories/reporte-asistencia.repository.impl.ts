import { ReporteAsistenciaDatasource } from "../../domain/datasources/reporte-asistencia.datasource";
import { ReporteAsistenciaEntity } from "../../domain/entities/reporte-asistencia.entity";
import { ReporteAsistenciaRepository } from "../../domain/repositories/reporte-asistencia.repository";



export class ReporteAsistenciaRepositoryImpl extends ReporteAsistenciaRepository {

    constructor(
        private datasource: ReporteAsistenciaDatasource
    ){ super(); }

    getReporteAsistencia(campana_id: number, date_init: string, date_end: string): Promise<ReporteAsistenciaEntity[]> {
        return this.datasource.getReporteAsistencia(campana_id, date_init, date_end);
    }

}