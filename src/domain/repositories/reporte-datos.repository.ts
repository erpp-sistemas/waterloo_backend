import { ReporteDatosEntity } from "../entities/reporte-datos.entity";



export abstract class ReporteDatosRepository {
    abstract getReporteDatos(campana_id: number, proceso_id: number, zona_id: number, dateInit: string, dateEnd: string): Promise<ReporteDatosEntity[]>;
}