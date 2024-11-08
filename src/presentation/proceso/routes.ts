import { Router } from "express";
import { ProcesoDatasourceImpl } from "../../infrastructure/datasource/proceso.datasourceImpl";
import { ProcesoRepositoryImpl } from "../../infrastructure/repositories/proceso.repositoryImpl";
import { ProcesoController } from "./controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";



export class ProcesosRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new ProcesoDatasourceImpl();
        const repository = new ProcesoRepositoryImpl(datasource);
        const controller = new ProcesoController(repository);

        router.get('/get-by-campana/:campana_id',  controller.getByCampana)

        return router;

    }

}