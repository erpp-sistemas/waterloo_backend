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


    async getCitasByUser(id_usuario: number): Promise<OficinaEnlaceEntity[]> {
        try {
            const citas = await prisma.oficina_enlace.findMany({
                where: {
                    id_asunto: 1,
                    id_atendera: id_usuario
                }
            })
            return citas.map(cita => OficinaEnlaceEntity.fromObject(cita))
        } catch (error) {
            console.error(error);
            throw CustomError.internalServer('Internal server error');
        }
    }

    async updateCita(id_oficina_enlace: number, data: {[key: string]: any}): Promise<OficinaEnlaceEntity> {
        try {

            const cita_update = await prisma.oficina_enlace.update({
                where: { id_oficina_enlace: id_oficina_enlace },
                data: data
            })
            return OficinaEnlaceEntity.fromObject(cita_update);
        } catch (error) {
            console.error(error);
            throw CustomError.internalServer('Internal server error');
        }
    }


}