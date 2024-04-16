import { Router } from "express";
import { UserDatasourceImpl } from "../../infrastructure/datasource/user.datasource.impl";
import { UserRepositoryImpl } from "../../infrastructure/repositories/user.repository.impl";
import { AuthController } from "./controller";




export class AuthRoutes {

    static get routes(): Router {

        const router = Router();

        // todo implementar datasource y repository
        const datasource = new UserDatasourceImpl();
        const userRepository = new UserRepositoryImpl(datasource)
        const userController = new AuthController(userRepository)
    
        router.post('/register', userController.registerUser)
        router.post('/login', userController.loginUser)

        return router;

    }

}