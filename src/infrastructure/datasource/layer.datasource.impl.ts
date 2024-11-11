import { prisma } from "../../data/sqlserver";
import { CustomError } from "../../domain";
import { LayerDatasource } from "../../domain/datasources/layer.datasource";
import { LayerEntity, LayerWithDataEntity } from "../../domain/entities/layer.entity";


export class LayerDatasourceImpl extends LayerDatasource {

    getAll(): Promise<LayerEntity[]> {
        throw new Error("Method not implemented.");
    }
    getById(layer_id: number): Promise<LayerEntity> {
        throw new Error("Method not implemented.");
    }

    async getByCampanaWithData(campana_id: number): Promise<LayerWithDataEntity[]> {
        try {
            const resultado = await prisma.layer.findMany({
                where: {
                    campana_servicio_layer_estilo: {
                        some: {
                            id_campana: campana_id
                        }
                    }
                },
                select: {
                    id: true,
                    nombre: true,
                    etiqueta: true,
                    activo: true,
                    campana_servicio_layer_estilo: {
                        where: {
                            id_campana: campana_id
                        },
                        select: {
                            url_geoserver: true,
                            id_servicio_mapa: true,
                            estilo_layer: {
                                select: {
                                    color: true,
                                    opacidad: true,
                                    tipo: true,
                                    visibilidad: true
                                }
                            }
                        }
                    }
                }
            });
            const data = resultado.map(res => {
                return {
                    id: res.id, nombre: res.nombre, etiqueta: res.etiqueta, activo: res.activo,
                    url_geoserver: res.campana_servicio_layer_estilo[0].url_geoserver,
                    id_servicio_mapa: res.campana_servicio_layer_estilo[0].id_servicio_mapa,
                    color: res.campana_servicio_layer_estilo[0].estilo_layer.color,
                    opacidad: res.campana_servicio_layer_estilo[0].estilo_layer.opacidad,
                    tipo: res.campana_servicio_layer_estilo[0].estilo_layer.tipo,
                    visibilidad: res.campana_servicio_layer_estilo[0].estilo_layer.visibilidad,
                }
            });

            return data.map( layer => LayerWithDataEntity.fromObject(layer))
        } catch (error) {
            console.error(error);
            throw CustomError.internalServer('Internal server error');
        }
    }

    async getByUserWithData(user_id: number): Promise<LayerWithDataEntity[]> {
        try {
            const resultado = await prisma.layer.findMany({
                where: {
                    usuario_layer_mapa: {
                        some: {
                            id_usuario: user_id
                        }
                    }
                },
                select: {
                    id: true,
                    nombre: true,
                    etiqueta: true,
                    activo: true,
                    usuario_layer_mapa: {
                        where: {
                            id_usuario: user_id
                        },
                        select: {
                            url_geoserver: true,
                            id_servicio_mapa: true,
                            estilo_layer: {
                                select : {
                                    color: true,
                                    opacidad: true,
                                    tipo: true,
                                    visibilidad: true
                                }
                            }
                        }
                    }
                }
            });
            const data = resultado.map(res => {
                return {
                    id: res.id, nombre: res.nombre, etiqueta: res.etiqueta, activo: res.activo,
                    url_geoserver: res.usuario_layer_mapa[0].url_geoserver,
                    id_servicio_mapa: res.usuario_layer_mapa[0].id_servicio_mapa,
                    color: res.usuario_layer_mapa[0].estilo_layer?.color,
                    opacidad: res.usuario_layer_mapa[0].estilo_layer?.opacidad,
                    tipo: res.usuario_layer_mapa[0].estilo_layer?.tipo,
                    visibilidad: res.usuario_layer_mapa[0].estilo_layer?.visibilidad,
                }
            });
            return data.map( layer => LayerWithDataEntity.fromObject(layer) );
        } catch (error) {
            console.error(error);
            throw CustomError.internalServer('Internal server error');
        }
    }



}