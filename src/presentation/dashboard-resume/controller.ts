import { Request, Response } from "express";
import { DashboardResumeRepository } from "../../domain/repositories/dashboard-resume.repository";
import { GetData } from '../../domain/uses-cases/dashboard-resume/get-data'



export class DashboardResumeController {

    constructor(
        private dashboardRepository: DashboardResumeRepository
    ){}

    getData = (req: Request, res: Response) => {

        let { id_campana } = req.params

        new GetData(this.dashboardRepository).execute(Number(id_campana))
            .then(data => res.json(data))
            .catch(error => res.status(400).json({error}))

    }

}