import { prisma } from "../../data/sqlserver";
import { CustomError } from "../../domain";
import { ProcesoDatasource } from "../../domain/datasources/proceso.datasource";
import { ProcesoEntity } from "../../domain/entities/proceso.entity";



export class ProcesoDatasourceImpl extends ProcesoDatasource {
    
    getAll(): Promise<ProcesoEntity[]> {
        throw new Error("Method not implemented.");
    }
    getById(proceso_id: number): Promise<ProcesoEntity> {
        throw new Error("Method not implemented.");
    }
    
    async getByCampana(campana_id: number): Promise<ProcesoEntity[]> {
        try {
            const procesos_campana = await prisma.campanas.findUnique({
                where: { id: campana_id },
                include: {
                    campana_proceso: {
                        include: {
                            procesos: true
                        }
                    }
                }
            })
            const procesos = procesos_campana?.campana_proceso.map((cp) => cp.procesos);
            return procesos!.map( proceso => ProcesoEntity.fromObject(proceso));
        } catch (error) {
            console.error(error)
            throw CustomError.internalServer('Internal server error')
        }    
    }

}