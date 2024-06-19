import { RegisterDto } from "../../dtos";
import { RegisterEntity } from "../../entities/register.entity";
import { RegisterRepository } from "../../repositories/register.repository";


interface InsertRegisterUseCase {
    execute( dto: RegisterDto ): Promise<RegisterEntity>
}

export class InsertRegister implements InsertRegisterUseCase {
    
    constructor(
        public registerRepository: RegisterRepository
    ) {}

    execute(dto: RegisterDto): Promise<RegisterEntity> {
        return this.registerRepository.insertRegister(dto)
    }

}
