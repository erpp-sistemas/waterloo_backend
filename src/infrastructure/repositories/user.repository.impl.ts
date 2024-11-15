import { LoginUserDto, UserEntity } from "../../domain";
import { UserDatasource } from "../../domain/datasources/user.datasource";
import { RegisterUserDto } from "../../domain/dtos/auth/register-user.dto";
import { UserRepository } from "../../domain/repositories/user.repository";


export class UserRepositoryImpl implements UserRepository {
  
    constructor(
        public datasource: UserDatasource
    ){}
    
    loginUser(loginUserDto: LoginUserDto): Promise<UserEntity> {
        return this.datasource.loginUser(loginUserDto)
    }
  
    registerUser(registerUser: RegisterUserDto): Promise<UserEntity> {
        return this.datasource.registerUser(registerUser)
    }

    getAllWithCampanas(): Promise<any[]> {
        return this.datasource.getAllWithCampanas();
    }

    getById(user_id: number): Promise<UserEntity> {
        return this.datasource.getById(user_id);
    }

}