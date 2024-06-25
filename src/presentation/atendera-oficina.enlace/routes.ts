import { Router } from "express";
import { AtenderaOficinaEnlaceDatasourceImpl } from "../../infrastructure/datasource/atendera-oficina-enlace.datasource.impl";
import { AtenderaOficinaEnlaceRepositoryImpl } from "../../infrastructure/repositories/atendera-oficina-enlace.repository.impl";
import { AtenderaOficinaEnlaceController } from "./controller";



export class AtenderaOficinaEnlaceRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new AtenderaOficinaEnlaceDatasourceImpl();
        const repository = new AtenderaOficinaEnlaceRepositoryImpl(datasource);
        const controller = new AtenderaOficinaEnlaceController(repository);

        router.get('/get-by-campana/:id_campana', controller.getAtenderaOficina)

        return router;

    }

}