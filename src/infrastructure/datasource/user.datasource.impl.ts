import { prisma } from "../../data/sqlserver";
import { CustomError, LoginUserDto, UserEntity } from "../../domain";
import { UserDatasource } from "../../domain/datasources/user.datasource";
import { RegisterUserDto } from "../../domain/dtos/auth/register-user.dto";


export class UserDatasourceImpl implements UserDatasource {


    async registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {

        const user = await prisma.usuario.findFirst({
            where: { usuario: registerUserDto.usuario }
        })
        if(user) throw CustomError.badRequest('Email already exists');

        const newUser = await prisma.usuario.create({
            data: registerUserDto
        })

        return UserEntity.fromObject(newUser)
    }

    async loginUser(loginUserDto: LoginUserDto): Promise<UserEntity> {

        return new UserEntity(0, '', '', '', '', '', '', 0, 0, 0, '')

    }

}