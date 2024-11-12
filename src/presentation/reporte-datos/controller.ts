import { Request, Response } from "express";
import { ReporteDatosRepository } from "../../domain/repositories/reporte-datos.repository";
import { GetReporteDatos } from '../../domain/uses-cases/reporte-datos/get-reporte';

export class ReporteDatosController {

    constructor(
        private readonly repository: ReporteDatosRepository
    ){}

    getReporteDatos = (req: Request, res: Response) => {

        let { campana_id, proceso_id, zona_id, dateInit, dateEnd } = req.params;
      
        if(!zona_id) zona_id = '0';

        new GetReporteDatos(this.repository).execute(Number(campana_id), Number(proceso_id), Number(zona_id), dateInit, dateEnd)
            .then( datos => res.json(datos))
            .catch( error => res.status(400).json( { error } ))

    }


}