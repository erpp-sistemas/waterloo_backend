import { prisma } from '../../data/sqlserver';
import { CampanaDatasource } from "../../domain/datasources/campana.datasource";
import { CampanaEntity } from "../../domain/entities/campana.entity";
import { CustomError } from '../../domain';


export class CampanaDatasourceImpl implements CampanaDatasource {

    getAll(): Promise<CampanaEntity[]> {
        throw new Error("Method not implemented.");
    }
    getById(): Promise<CampanaEntity> {
        throw new Error("Method not implemented.");
    }

    async getByUser(user_id: number): Promise<CampanaEntity[]> {
        try {
            const campanas_user = await prisma.usuario.findUnique({
                where: { id: user_id },
                include: {
                    usuario_campana_procesos: {
                        include: {
                            campanas: true
                        }
                    }
                }
            });
            const campanas = campanas_user?.usuario_campana_procesos.map((ucp) => ucp.campanas)
            const unique_campanas = campanas!.filter((value, index, self) =>
                index === self.findIndex((t) => (
                    t!.nombre === value!.nombre
                ))
            );
            return unique_campanas.map( campana => CampanaEntity.fromObject(campana!))
        } catch (error) {
            console.error(error)
            throw CustomError.internalServer('Internal server error')
        }
    }

}



