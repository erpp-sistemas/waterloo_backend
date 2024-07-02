
import { RegisterDto } from '../dtos'
import { DashboardResumeEntity } from '../entities/dashboard-resume.entity'


export abstract class RegisterDatasource {

    abstract insertRegister(registerDto: RegisterDto): Promise<DashboardResumeEntity> 
    

}