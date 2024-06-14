import { Router } from 'express'
import { AuthRoutes } from './auth/routes'
import { MenuRoutes } from './menu/routes'
import { DashboardResume } from './dashboard-resume/routes'

export class AppRoutes {

    static get routes(): Router {

        const router = Router();
        
        router.use('/api/auth', AuthRoutes.routes)
        router.use('/api/menu', MenuRoutes.routes)
        router.use('/api/dashboard', DashboardResume.routes)

        return router;

    }

}