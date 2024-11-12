import { ReporteAsistenciaEntity } from "../entities/reporte-asistencia.entity";



export abstract class ReporteAsistenciaDatasource {
    abstract getReporteAsistencia(campana_id: number, date_init: string, date_end: string): Promise<ReporteAsistenciaEntity[]>;
}