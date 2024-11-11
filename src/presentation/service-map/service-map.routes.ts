import { Router } from "express";
import { ServiceMapDatasourceImpl } from "../../infrastructure/datasource/service-map.datasource.impl";
import { ServiceMapRepositoryImpl } from "../../infrastructure/repositories/service-map.repository.impl";
import { ServiceMapController } from "./controller";



export class ServiceMapRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new ServiceMapDatasourceImpl();
        const repository = new ServiceMapRepositoryImpl(datasource);
        const controller = new ServiceMapController(repository);

        router.get('/get-by-campana/:campana_id', controller.getByCampana)
        router.get('/get-by-user/:user_id', controller.getByUser)


        return router;

    }


}