import { Router } from "express";
import { NotificationController } from "./controller";
import { NotificationDatasourceImpl } from "../../infrastructure/datasource/Notification.datasource.impl";
import { NotificationRepositoryImpl } from "../../infrastructure/repositories/notification.repository.impl";



export class NotificationRoutes {

    static get routes(): Router {

        const router = Router();
        
        const datasource = new NotificationDatasourceImpl();
        const notificationRepository = new NotificationRepositoryImpl(datasource);
        const notificationController = new NotificationController(notificationRepository)

        router.post('/new-notification', notificationController.insertNewNotification)
        router.get('/get-by-user/:id_user', notificationController.getByUser)
        router.put('/update-by-id/:id', notificationController.updateById)
        router.put('/update-by-user/:id_user', notificationController.updateByUser)

        return router;

    }

}