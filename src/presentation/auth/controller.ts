import { Request, Response } from "express";
import { CustomError, LoginUserDto } from "../../domain";
import { UserRepository } from "../../domain/repositories/user.repository";
import { RegisterUser } from '../../domain/uses-cases/auth'
import { RegisterUserDto } from "../../domain/dtos/auth/register-user.dto";




export class AuthController {

    // * DI
    constructor(
        public userRepository: UserRepository
    ) { }


    loginUser(req: Request, res: Response) {

        const [error, loginUserDto] = LoginUserDto.create(req.body)
        if (error) return res.status(400).json({ error });

        // * llamar al service -> mas sencillo


        // * llamar al caso de uso -> mas tedioso

    }

    registerUser = (req: Request, res: Response) => {

        const [ error, registerUserDto ] = RegisterUserDto.create(req.body);
        if(error) return res.status(400).json({ error });

        // * llamar al caso de uso register user
        new RegisterUser(this.userRepository).execute(registerUserDto!)
        .then( user => {
            console.log(user)
            res.json(user)
        })
        .catch(error => res.status(400).json({error}))

    }


}