import { Router } from "express";
import { MobileController } from "./controller";
import { MobileService } from "./service";



export class MobileRoutes {

    static get routes(): Router {
        
        const router = Router();

        const service = new MobileService();
        const controller = new MobileController(service);


        router.post('/sign-in', controller.signIn)
        router.post('/register-asistencia', controller.registerAsistencia)
        router.post('/upload-photo', controller.insertPhotoRegister)
        router.post('/upload-photo-seguimiento', controller.insertPhotoSeguimiento)
        router.post('/insert-register', controller.insertRegister)
        router.post('/insert-seguimiento-gestion', controller.insertRegisterSeguimiento)
        router.post('/insert-recorrido', controller.insertRecorridoGestor)
        
        router.put('/update-iduserpush', controller.updateIdUserPush)
        router.put('/delete-push', controller.deletePush)
        

        router.get('/user-campana-proceso-modulo/:user_id', controller.getCampanasProcesosModulosByUser)
        router.get('/get-asignacion/:user_id/:campana_id/:proceso_id', controller.getAsignacion)
        router.get('/find-contribuyente/:nombre/:segundo_nombre/:apellido_paterno/:apellido_materno', controller.getFindContribuyente)
        router.get('/get-directorio', controller.getDirectorio)
        router.get('/get-push-by-user/:user_id', controller.getPushByUser)
        router.get('/get-registers-by-contribuyente', controller.getRegisterByContribuyente)

        return router;

    }

}