import { Router } from "express";
import { ReporteAsistenciaController } from "./controller";
import { ReporteAsistenciaDatasourceImpl } from "../../infrastructure/datasource/reporte-asistencia.datasource.impl";
import { ReporteAsistenciaRepositoryImpl } from "../../infrastructure/repositories/reporte-asistencia.repository.impl";


export class ReporteAsistenciaRoutes {

    static get routes(): Router {
        
        const router = Router();
        
        const datasource = new ReporteAsistenciaDatasourceImpl();
        const repository = new ReporteAsistenciaRepositoryImpl(datasource);
        const controller = new ReporteAsistenciaController(repository);


        router.get('/reporte-asistencia/:campana_id/:date_init/:date_end', controller.getReporteAsistencia)

        return router;

    }

}