import { LoginUserDto } from "../dtos";
import { RegisterUserDto } from "../dtos/auth/register-user.dto";
import { UserEntity } from "../entities/user.entity";



export abstract class UserRepository {

    abstract loginUser(loginUserDto: LoginUserDto): Promise<UserEntity>

    abstract registerUser(registerUser: RegisterUserDto): Promise<UserEntity>

}