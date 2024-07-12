import { Router } from "express";
import { ErppayDatasourceImpl } from "../../infrastructure/datasource/erppay.datasouce.impl";
import { ErppayRepositoryImpl } from "../../infrastructure/repositories/erppay.repository.impl";
import { ErppayController } from "./controller";



export class ErppayRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new ErppayDatasourceImpl();
        const erppayRepository = new ErppayRepositoryImpl(datasource);
        const erppayController = new ErppayController(erppayRepository);

        router.post('/generate-pdf', erppayController.generatePdf)


        return router;

    }

}