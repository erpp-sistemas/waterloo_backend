import { Router } from "express";
import { CampanaDatasourceImpl } from "../../infrastructure/datasource/campana.datasourceImpl";
import { CampanaRepositoryImpl } from "../../infrastructure/repositories/campana.repositoryImpl";
import { CampanaController } from "./controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";




export class CampanasRoutes {

    static get routes(): Router {
        const router = Router();


        const datasource = new CampanaDatasourceImpl();
        const campanaRepository = new CampanaRepositoryImpl(datasource);
        const campanaController = new CampanaController(campanaRepository);

        router.get('/get-by-user/:user_id', AuthMiddleware.validateToken, campanaController.getByUser)

        return router;

    }

}