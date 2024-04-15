import { Router } from 'express'
import { TodosRoutes } from './todos/todos_routes'
import { AuthRoutes } from './auth/routes'

export class AppRoutes {

    static get routes(): Router {

        const router = Router();
        
        router.use('/api/todos', TodosRoutes.routes)
        router.use('/api/auth', AuthRoutes.routes)

        return router;

    }

}