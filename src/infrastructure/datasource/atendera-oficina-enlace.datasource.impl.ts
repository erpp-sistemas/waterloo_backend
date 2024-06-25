import { prisma } from "../../data/sqlserver";
import { CustomError } from "../../domain";
import { AtenderaOficinaEnlaceDatasource } from "../../domain/datasources/atendera-oficina-enlace.datasource";
import { AtenderaOficinaEnlaceEntity } from "../../domain/entities/atendera-oficina-enlace.entity";



export class AtenderaOficinaEnlaceDatasourceImpl implements AtenderaOficinaEnlaceDatasource {
    
    async getByCampana(id_campana: number): Promise<AtenderaOficinaEnlaceEntity[]> {
        try {
            const data = await prisma.atendera_oficina_enlace.findMany({
                where: {
                    id_campana: id_campana
                },
                include : {
                    usuario: true
                }
            });
            return data.map( register => AtenderaOficinaEnlaceEntity.fromObject(register)) ;
        } catch (error) {
            console.error(error);
            throw CustomError.internalServer('Internal server error');
        }

    }

}