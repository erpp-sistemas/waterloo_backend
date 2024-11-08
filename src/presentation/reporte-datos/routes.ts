import { Router } from "express";
import { ReporteDatosDatasourceImpl } from "../../infrastructure/datasource/reporte-datos.datasource.impl";
import { ReporteDatosRepositoryImpl } from "../../infrastructure/repositories/reporte-datos.repository.impl";
import { ReporteDatosController } from "./controller";



export class ReporteDatosRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new ReporteDatosDatasourceImpl();
        const repository = new ReporteDatosRepositoryImpl(datasource);
        const controller = new ReporteDatosController(repository);

        router.get('/get-data/:campana_id/:proceso_id/:zona_id/:dateInit/:dateEnd', controller.getReporteDatos);


        return router;


    }

}