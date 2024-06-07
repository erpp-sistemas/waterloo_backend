import { Encrypt } from "../../config/encrypt.adapter";
import { JwtAdapter } from "../../config/jwt.adapter";
import { prisma } from "../../data/sqlserver";
import { CustomError, LoginUserDto, UserEntity } from "../../domain";
import { UserDatasource } from "../../domain/datasources/user.datasource";
import { RegisterUserDto } from "../../domain/dtos/auth/register-user.dto";



export class UserDatasourceImpl implements UserDatasource {


    async registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {

        const user = await prisma.usuario.findFirst({
            where: { usuario: registerUserDto.usuario }
        })
        if (user) throw CustomError.badRequest('Email already exists');

        registerUserDto.password = Encrypt.hash(registerUserDto.password)

        try {
            const newUser = await prisma.usuario.create({
                data: registerUserDto
            })

            const token = 'ABC'

            const { password, ...userEntity } = UserEntity.fromObject({ ...newUser, token });

            return UserEntity.fromObject(userEntity)
        } catch (error) {
            console.log(error)
            return UserEntity.fromObject([])
        }

    }


    async loginUser(loginUserDto: LoginUserDto): Promise<UserEntity> {

        const user = await prisma.usuario.findFirst({
            where: { usuario: loginUserDto.usuario }
        })

        if (!user) throw CustomError.badRequest('Email not exist');

        if (user.activo === 0) throw CustomError.badRequest('User not active');

        const isMatching = Encrypt.compare(loginUserDto.password, user.password!);
        if (!isMatching) throw CustomError.badRequest('Password is not valid');

        const token = await JwtAdapter.generateToken({ id: user.id, email: user.usuario });
        if (!token) throw CustomError.internalServer('Error while creating JWT');

        const data_user: any[] = await prisma.$queryRaw`EXEC sp_get_user_w @id_user=${user.id}`
        const user_info = data_user[0]; 
        
        const { password, ...userEntity } = UserEntity.fromObject({ ...user_info, token });

        return UserEntity.fromObject(userEntity)

    }

}