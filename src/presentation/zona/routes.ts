import { Router } from "express";
import { ZonaDatasourceImpl } from "../../infrastructure/datasource/zona.datasource.Impl";
import { ZonaRepositoryImpl } from "../../infrastructure/repositories/zona.repository.impl";
import { ZonaController } from "./controller";



export class ZonaRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new ZonaDatasourceImpl();
        const repository = new ZonaRepositoryImpl(datasource);
        const controller = new ZonaController(repository);

        router.get('/get-by-campana/:campana_id', controller.getZonasByCampana)

        return router;

    }

}