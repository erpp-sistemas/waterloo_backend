
import { RegisterDto } from '../dtos'
import { DashboardResumeEntity } from '../entities/dashboard-resume.entity';



export abstract class RegisterRepository {

    abstract insertRegister(registerDto: RegisterDto): Promise<DashboardResumeEntity> 
    

}