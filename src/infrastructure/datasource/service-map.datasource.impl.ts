import { prisma } from "../../data/sqlserver";
import { CustomError } from "../../domain";
import { ServiceMapDatasource } from "../../domain/datasources/service-map.datasource";
import { ServiceMapEntity } from "../../domain/entities/services-map.entity";



export class ServiceMapDatasourceImpl extends ServiceMapDatasource {

    getAll(): Promise<ServiceMapEntity[]> {
        throw new Error("Method not implemented.");
    }
    getById(service_id: number): Promise<ServiceMapEntity> {
        throw new Error("Method not implemented.");
    }

    async getByCampana(campana_id: number): Promise<ServiceMapEntity[]> {
        try {
            const servicios_by_campana = await prisma.campanas.findUnique({
                where: { id: campana_id },
                include: {
                    campana_servicio_layer_estilo: {
                        include: {
                            servicios_mapa: true
                        }
                    }
                }
            })
            const servicios_mapa = servicios_by_campana?.campana_servicio_layer_estilo.map((csle) => csle.servicios_mapa);
            const servicios_mapa_unique = servicios_mapa!.filter((value, index, self) =>
                index === self.findIndex((t) => (
                    t!.nombre === value!.nombre
                ))
            );
            return servicios_mapa_unique.map( service => ServiceMapEntity.fromObject(service));
        } catch (error) {
            console.error(error)
            throw CustomError.internalServer('Internal server error')
        }
    }

    async getByUser(user_id: number): Promise<ServiceMapEntity[]> {
        try {
            const servicios_by_user = await prisma.usuario.findUnique({
                where: { id: user_id },
                include: {
                    usuario_servicio_mapa: {
                        include: {
                            servicios_mapa: true
                        }
                    }
                }
            });
            const servicios_user = servicios_by_user?.usuario_servicio_mapa.map((usm) => usm.servicios_mapa);
            const servicios_mapa_unique = servicios_user!.filter((value, index, self) =>
                index === self.findIndex((t) => (
                    t!.nombre === value!.nombre
                ))
            );
            return servicios_mapa_unique.map(service => ServiceMapEntity.fromObject(service!));
        } catch (error) {
            console.error(error)
            throw CustomError.internalServer('Internal server error')
        }
    }

}