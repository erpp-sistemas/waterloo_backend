import { prisma } from "../../data/sqlserver";
import { CustomError, OficinaEnlaceDto } from "../../domain";
import { OficinaEnlaceDatasource } from "../../domain/datasources/oficina.enlace.datasource";
import { OficinaEnlaceEntity } from "../../domain/entities/oficina-enlace.entity";



export class OficinaEnlaceDatasourceImpl implements OficinaEnlaceDatasource {

    async insertRegister(oficinaEnlaceDto: OficinaEnlaceDto): Promise<OficinaEnlaceEntity> {
        try {
            const register_oe = await prisma.oficina_enlace.create({
                data: oficinaEnlaceDto
            });
            return OficinaEnlaceEntity.fromObject(register_oe)

        } catch (error) {
            console.error(error);
            throw CustomError.internalServer('Internal server error')
        }

    }


    getByIdCampana(id_campana: number): Promise<OficinaEnlaceEntity[]> {
        throw new Error("Method not implemented.");
    }


}