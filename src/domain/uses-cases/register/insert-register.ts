import { RegisterDto } from "../../dtos";
import { DashboardResumeEntity } from "../../entities/dashboard-resume.entity";
import { RegisterRepository } from "../../repositories/register.repository";


interface InsertRegisterUseCase {
    execute( dto: RegisterDto ): Promise<DashboardResumeEntity>
}

export class InsertRegister implements InsertRegisterUseCase {
    
    constructor(
        public registerRepository: RegisterRepository
    ) {}

    execute(dto: RegisterDto): Promise<DashboardResumeEntity> {
        return this.registerRepository.insertRegister(dto)
    }

}
