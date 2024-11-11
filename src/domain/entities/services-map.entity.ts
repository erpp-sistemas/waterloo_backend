


export class ServiceMapEntity {

    constructor(
        public id_servicio_mapa: number,
        public nombre: string,
        public icono: string,
        public activo: number,
        public orden: number,
        public default_active: number,
    ){}


    static fromObject( object: { [key: string]: any } ): ServiceMapEntity {

        const { id_servicio_mapa, nombre, icono, activo, orden, default_active } = object;

        return new ServiceMapEntity(id_servicio_mapa, nombre, icono, activo, orden, default_active)
    }


}