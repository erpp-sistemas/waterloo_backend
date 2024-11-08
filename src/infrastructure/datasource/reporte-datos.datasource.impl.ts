import { prisma } from "../../data/sqlserver";
import { CustomError } from "../../domain";
import { ReporteDatosDatasource } from "../../domain/datasources/reporte-datos.datasource";
import { ReporteDatosEntity } from "../../domain/entities/reporte-datos.entity";


export class ReporteDatosDatasourceImpl extends ReporteDatosDatasource {
    
    async getReporteDatos(campana_id: number, proceso_id: number, zona_id: number, dateInit: string, dateEnd: string): Promise<ReporteDatosEntity[]> {
        try {
            const data: any[] = await prisma.$queryRaw`EXEC sp_get_registros_reporte_datos @id_campana=${campana_id}, @id_proceso=${proceso_id}, @id_zona=${zona_id}, @fecha_inicial=${dateInit}, @fecha_final=${dateEnd}`
            
            return data.map( register => ReporteDatosEntity.fromObject(register));
        } catch (error) {
            console.error(error)
            throw CustomError.internalServer('Internal server error')
        }
    }

}