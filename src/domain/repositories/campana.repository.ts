
import { CampanaEntity } from '../entities/campana.entity';


export abstract class CampanaRepository {
    abstract getAll(): Promise<CampanaEntity[]>;
    abstract getById(proceso_id: number): Promise<CampanaEntity>;
    abstract getByUser(user_id: number): Promise<CampanaEntity[]>;
}