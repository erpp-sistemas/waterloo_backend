import { ReporteDatosDatasource } from "../../domain/datasources/reporte-datos.datasource";
import { ReporteDatosEntity } from "../../domain/entities/reporte-datos.entity";
import { ReporteDatosRepository } from "../../domain/repositories/reporte-datos.repository";



export class ReporteDatosRepositoryImpl extends ReporteDatosRepository {

    constructor(
        private datasource: ReporteDatosDatasource
    ){super();}

    getReporteDatos(campana_id: number, proceso_id: number, zona_id: number, dateInit: string, dateEnd: string): Promise<ReporteDatosEntity[]> {
        return this.datasource.getReporteDatos(campana_id, proceso_id, zona_id, dateInit, dateEnd);
    }

}