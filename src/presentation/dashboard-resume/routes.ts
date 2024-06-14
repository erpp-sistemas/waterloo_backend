import { Router } from "express";
import { DashboardResumeDatasourceImpl } from "../../infrastructure/datasource/dashboard-resume.datasource.impl";
import { DashboardResumeRepositoryImpl } from "../../infrastructure/repositories/dashboard-resume.repository.impl";
import { DashboardResumeController } from "./controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";


export class DashboardResume {

    static get routes(): Router {

        const router = Router()

        const datasource = new DashboardResumeDatasourceImpl()
        const dashboardResumeRepository = new DashboardResumeRepositoryImpl(datasource)
        const dashboardResumeController = new DashboardResumeController(dashboardResumeRepository)

        router.get('/get-dashboard-resume/:id_campana', AuthMiddleware.validateToken, dashboardResumeController.getData)

        return router

    }

}