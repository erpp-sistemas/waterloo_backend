import { RegisterDto, RegisterEntity } from "../../domain";
import { RegisterDatasource } from "../../domain/datasources/register.datasource";
import { RegisterRepository } from "../../domain/repositories/register.repository";


export class RegisterRepositoryImpl implements RegisterRepository {
    

    constructor(
        private datasource: RegisterDatasource
    ){}

    
    insertRegister(registerDto: RegisterDto): Promise<RegisterEntity> {
        return this.datasource.insertRegister(registerDto)
    }

}