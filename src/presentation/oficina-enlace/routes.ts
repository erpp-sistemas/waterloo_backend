import { Router } from "express"
import { OficinaEnlaceDatasourceImpl } from "../../infrastructure/datasource/oficina-enlace.datasource.impl";
import { OficinaEnlaceRepositoryImpl } from "../../infrastructure/repositories/oficina-enlace.repository.impl";
import { OficinaEnlaceController } from "./controller";




export class OficinaEnlaceRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new OficinaEnlaceDatasourceImpl();
        const oficinaEnlaceRepository = new OficinaEnlaceRepositoryImpl(datasource);
        const oficinaEnlaceController = new OficinaEnlaceController(oficinaEnlaceRepository);

        router.post('/new-register', oficinaEnlaceController.insertNewRegisterOE)
        router.get('/get-citas-user/:id_usuario', oficinaEnlaceController.getByUser)
        router.put('/update-cita', oficinaEnlaceController.updateCita)

        return router;

    }

}