import { Router } from "express"
import { RegisterDatasourceImpl } from "../../infrastructure/datasource/register.datasource.impl"
import { RegisterRepositoryImpl } from "../../infrastructure/repositories/register.repository.impl";
import { RegisterController } from "./controller";



export class RegisterRoutes {

    static get routes(): Router {

        const router = Router()

        const datasource = new RegisterDatasourceImpl();
        const registerRepository = new RegisterRepositoryImpl(datasource);
        const registerController = new RegisterController(registerRepository)

        router.post('/new-register', registerController.insertNewRegister )

        return router

    }
    
}