import { Request, Response } from "express";
import { ReporteDatosRepository } from "../../domain/repositories/reporte-datos.repository";
import { GetReporteDatos } from '../../domain/uses-cases/reporte-datos/get-reporte';

export class ReporteDatosController {

    constructor(
        private readonly repository: ReporteDatosRepository
    ){}

    getReporteDatos = async (req: Request, res: Response) => {

        let { campana_id, proceso_id, zona_id, dateInit, dateEnd } = req.params;
        console.log("campana_id", campana_id)
        console.log("proceso_id", proceso_id)
        console.log("zona_id", zona_id)
        console.log("dateInit", dateInit)
        console.log("dateEnd", dateEnd)

        if(!zona_id) zona_id = '0';

        new GetReporteDatos(this.repository).execute(Number(campana_id), Number(proceso_id), Number(zona_id), dateInit, dateEnd)
            .then( datos => res.json(datos))
            .catch( error => res.status(400).json( { error } ))

    }


}