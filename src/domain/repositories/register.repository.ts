
import { RegisterDto } from '../dtos'
import { RegisterEntity } from '../entities/register.entity';



export abstract class RegisterRepository {

    abstract insertRegister(registerDto: RegisterDto): Promise<RegisterEntity> 
    

}