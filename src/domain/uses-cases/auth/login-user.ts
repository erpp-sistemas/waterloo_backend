import { LoginUserDto } from "../../dtos";
import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from "../../repositories/user.repository";



interface LoginUserUseCase {
    execute( dto: LoginUserDto ): Promise<UserEntity>
}

export class LoginUser implements LoginUserUseCase {
    
    constructor(
        private readonly userRepository: UserRepository
    ){}

    execute(dto: LoginUserDto): Promise<UserEntity> {
        return this.userRepository.loginUser(dto)
    }

}