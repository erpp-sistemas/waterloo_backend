import { Request, Response } from "express";
import { GetReporteAsistencia } from '../../domain/uses-cases/reporte-asistencia/get-reporte-asistencia';
import { ReporteAsistenciaRepository } from "../../domain/repositories/reporte-asistencia.repository";



export class ReporteAsistenciaController {

    constructor(
        private repository: ReporteAsistenciaRepository
    ){}

    getReporteAsistencia = (req: Request, res: Response) => {
        const { campana_id, date_init, date_end } = req.params;
        new GetReporteAsistencia(this.repository).execute(Number(campana_id), date_init, date_end)
            .then( registers => res.status(200).json(registers))
            .catch( error => res.status(400).json({ error }))
    }

}