import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from "../../repositories/user.repository";


interface GetUsersWithCampanasUseCase {
    execute(): Promise<UserEntity[]>;
}

export class GetUsersWithCampanas implements GetUsersWithCampanasUseCase {

    constructor(
        private repository: UserRepository
    ){}

    execute(): Promise<UserEntity[]> {
        return this.repository.getAllWithCampanas();
    }

}