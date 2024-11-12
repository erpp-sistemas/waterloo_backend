import { ReporteAsistenciaEntity } from "../../entities/reporte-asistencia.entity";
import { ReporteAsistenciaRepository } from "../../repositories/reporte-asistencia.repository";


interface GetReporteAsistenciaUseCase {
    execute(campana_id: number, date_init: string, date_end: string): Promise<ReporteAsistenciaEntity[]>
}


export class GetReporteAsistencia implements GetReporteAsistenciaUseCase {


    constructor(
        private repository: ReporteAsistenciaRepository
    ){}

    execute(campana_id: number, date_init: string, date_end: string): Promise<ReporteAsistenciaEntity[]> {
        return this.repository.getReporteAsistencia(campana_id, date_init, date_end);
    }
    

}