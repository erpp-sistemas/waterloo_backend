import { ErppayEntity } from "../../entities/erppay-entity";
import { ErppayRepository } from "../../repositories/erppay.repository";


interface GetInfoAccountUseCase {
    execute(account: string): Promise<ErppayEntity>
}

export class GetInfoAccount implements GetInfoAccountUseCase {

    constructor(
        private erppayRepository: ErppayRepository
    ){}

    
    execute(account: string): Promise<ErppayEntity> {
        return this.erppayRepository.getInfoAccount(account);
    }

}