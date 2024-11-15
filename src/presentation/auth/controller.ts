import { Request, Response } from "express";
import { LoginUserDto } from "../../domain";
import { UserRepository } from "../../domain/repositories/user.repository";
import { LoginUser, RegisterUser } from '../../domain/uses-cases/auth';
import { GetUsersWithCampanas } from '../../domain/uses-cases/users/get-with-campanas';
import { GetById } from '../../domain/uses-cases/users/get-by-id';
import { RegisterUserDto } from "../../domain/dtos/auth/register-user.dto";





export class AuthController {

    // * DI
    constructor(
        public userRepository: UserRepository
    ) { }


    loginUser = (req: Request, res: Response) => {

        const [error, loginUserDto] = LoginUserDto.create(req.body)
        if (error) return res.status(400).json({ error });

        // * llamar al service -> mas sencillo

        // * llamar al caso de uso -> clean architecture
        new LoginUser(this.userRepository).execute(loginUserDto!)
            .then(user => {
                let { token, ...user_info } = user
                res.cookie('token', token, {
                    httpOnly: true, // For security reasons, set HttpOnly to true
                    secure: true,
                    sameSite: 'none', // Helps with CSRF protection
                });
                res.json(user_info)
            }).catch(error => res.status(400).json({ error }))

    }

    registerUser = (req: Request, res: Response) => {

        const [error, registerUserDto] = RegisterUserDto.create(req.body);
        if (error) return res.status(400).json({ error });

        // * llamar al caso de uso register user
        new RegisterUser(this.userRepository).execute(registerUserDto!)
            .then(user => {
                res.json(user)
            })
            .catch(error => res.status(400).json({ error }))

    }


    getUsersWithCampanas = (req: Request, res: Response) => {

        new GetUsersWithCampanas(this.userRepository).execute()
            .then(users => {
                res.json(users)
            }).catch( error => {
                res.status(400).json( { error } )
            })

    }

    getUserById = (req: Request, res: Response) => {
        const { user_id } = req.params;
        new GetById(this.userRepository).execute(Number(user_id))
            .then( user => res.json(user))
            .catch( error => res.status(400).json( { error } ))
    }


}