import { Request, Response } from "express";
import { ErppayRepository } from "../../domain/repositories/erppay.repository";
import { GeneratePdf } from '../../domain/uses-cases/erppay/generate-pdf'
import { GeneratePdfDto } from "../../domain/dtos/erppay/generate-pdf";



export class ErppayController {

    constructor(
        private erppayRepository: ErppayRepository
    ) { }

    generatePdf = (req: Request, res: Response) => {

        const [error, generatePdfDto] = GeneratePdfDto.create(req.body);

        if (error) return res.status(400).json({ error });


        new GeneratePdf(this.erppayRepository).execute(generatePdfDto!)
            .then(pdf => {
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', 'attachment; filename=output.pdf');
                res.send(pdf);
            })

    }


}