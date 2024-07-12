import { Request, Response } from "express";
import { ErppayRepository } from "../../domain/repositories/erppay.repository";
import { GeneratePdf, GetInfoAccount } from '../../domain/uses-cases/erppay'
import { GeneratePdfDto } from "../../domain/dtos/erppay/generate-pdf";



export class ErppayController {

    constructor(
        private erppayRepository: ErppayRepository
    ) { }


    getInfoAccount = (req: Request, res: Response) => {
        let { account } = req.params;
        new GetInfoAccount(this.erppayRepository).execute(account)
            .then(data => {
                const [error, generatePdfDto] = GeneratePdfDto.create(data);
                if (error) return res.status(400).json({ error });
                new GeneratePdf(this.erppayRepository).execute(generatePdfDto!)
                    .then(pdf => {
                        res.setHeader('Content-Type', 'application/pdf');
                        res.setHeader('Content-Disposition', 'attachment; filename=output.pdf');

                        // Todo aqui enviamos el pdf en un Buffer pero tambien podriamos guardarlo en el s3 y obtener la url y esa es la que mandariamos
                        res.send(pdf);
                    })
            })
            .catch(error => res.status(400).json({ error }))
    }





}