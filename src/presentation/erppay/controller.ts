import { Request, Response } from "express";
import { ErppayRepository } from "../../domain/repositories/erppay.repository";
import { GeneratePdf, GetInfoAccount } from '../../domain/uses-cases/erppay'
import { GeneratePdfDto } from "../../domain/dtos/erppay/generate-pdf";
import { StorageAdapter } from '../../config/storage.adapter';

export class ErppayController {

    constructor(
        private erppayRepository: ErppayRepository,
        private storage = StorageAdapter.instance
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
                        res.send(pdf);
                    })
            })
            .catch(error => res.status(400).json({ error }))
    }

    getInfoAccountStorage = (req: Request, res: Response) => {
        let { account } = req.params;
        new GetInfoAccount(this.erppayRepository).execute(account).then(data => {
            const [error, generatePdfDto] = GeneratePdfDto.create(data);
            if (error) return res.status(400).json({ error });
            new GeneratePdf(this.erppayRepository).execute(generatePdfDto!)
                .then(pdf => {
                    const date = new Date();
                    const fecha = date.toISOString();
                    this.storage.uploadFile(pdf, 'estados_cuenta', `${account}-${fecha}.pdf`)
                        .then(file_url => res.json({ url_file: file_url }))
                        .catch(error => res.status(400).json({ error }))
                })
        }).catch(error => res.status(400).json({ error }))
    }

    generatePdf = (req: Request, res: Response) => {
        let { account } = req.body;
        new GetInfoAccount(this.erppayRepository).execute(account).then(data => {
            const [error, generatePdfDto] = GeneratePdfDto.create(data);
            if (error) return res.status(400).json({ error });
            new GeneratePdf(this.erppayRepository).execute(generatePdfDto!)
                .then(pdf => {
                    const date = new Date();
                    const fecha = date.toISOString();
                    this.storage.uploadFile(pdf, 'estados_cuenta', `${account}-${fecha}.pdf`)
                        .then(file_url => res.json({
                            // message: `Tu estado de cuenta se genero con éxito\n${file_url}`  
                            message: file_url
                        }))
                        .catch(error => res.status(400).json({ error }))
                })
        }).catch(error => res.status(400).json({ error }))
    }





}