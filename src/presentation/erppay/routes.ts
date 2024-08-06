import { Router } from "express";
import { ErppayDatasourceImpl } from "../../infrastructure/datasource/erppay.datasouce.impl";
import { ErppayRepositoryImpl } from "../../infrastructure/repositories/erppay.repository.impl";
import { ErppayController } from "./controller";
import cors from 'cors';



export class ErppayRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new ErppayDatasourceImpl();
        const erppayRepository = new ErppayRepositoryImpl(datasource);
        const erppayController = new ErppayController(erppayRepository);

        router.get('/get-infoaccount/:account', erppayController.getInfoAccount)
        router.get('/get-infoaccount-url/:account', erppayController.getInfoAccountStorage)
        router.post('/generate-edocta', cors({origin: '*'}), erppayController.generatePdf)


        return router;

    }

}