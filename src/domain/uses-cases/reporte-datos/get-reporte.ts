import { ReporteDatosEntity } from "../../entities/reporte-datos.entity";
import { ReporteDatosRepository } from "../../repositories/reporte-datos.repository";



interface GetReporteUseCase {
    execute(campana_id: number, proceso_id: number, zona_id: number, dateInit: string, dateEnd: string): Promise<ReporteDatosEntity[]>
}


export class GetReporteDatos implements GetReporteUseCase {
    

    constructor(
        private readonly reporteDatosRepository: ReporteDatosRepository
    ){}

    execute(campana_id: number, proceso_id: number, zona_id: number, dateInit: string, dateEnd: string): Promise<ReporteDatosEntity[]> {
        return this.reporteDatosRepository.getReporteDatos(campana_id, proceso_id, zona_id, dateInit, dateEnd);
    }

}