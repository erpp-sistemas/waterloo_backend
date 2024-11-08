import { prisma } from "../../data/sqlserver";
import { CustomError } from "../../domain";
import { ZonaDatasource } from "../../domain/datasources/zona.datasource";
import { ZonaEntity } from "../../domain/entities/zona.entity";


export class ZonaDatasourceImpl extends ZonaDatasource {
    getAll(): Promise<ZonaEntity[]> {
        throw new Error("Method not implemented.");
    }
    getById(zona_id: number): Promise<ZonaEntity> {
        throw new Error("Method not implemented.");
    }

    async getByCampana(campana_id: number): Promise<ZonaEntity[]> {
        try {
            const zonas_by_campana: any[] = await prisma.$queryRaw`EXEC sp_get_zonas_by_campana @id_campana=${campana_id}`;
            return zonas_by_campana.map( zona => ZonaEntity.fromObject( zona ))
        } catch (error) {
            console.error(error)
            throw CustomError.internalServer('Internal server error')
        }
    }

}