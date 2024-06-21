import { Request, Response } from "express";
import { RegisterRepository } from "../../domain/repositories/register.repository";
import { InsertRegister } from '../../domain/uses-cases/register/insert-register'
import { RegisterDto } from "../../domain";
import { WssService } from "../services/wss.service";


export class RegisterController {

    constructor(
        private registerRepository: RegisterRepository,
        private readonly wssService = WssService.instance
    ) { }


    insertNewRegister = (req: Request, res: Response) => {
        const [error, registerDto] = RegisterDto.create(req.body);
        if (error) return res.status(400).json({ error });

        new InsertRegister(this.registerRepository).execute(registerDto!).then(register => {
            this.wssService.sendMessage('on-register-changed',
                [register.total, register.registros_por_usuario, register.registros_por_proceso]
            )
            res.json(register)
        }).catch(error => res.status(400).json({ error }))

    }

} 