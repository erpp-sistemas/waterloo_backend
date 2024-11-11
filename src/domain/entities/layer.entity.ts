

export class LayerEntity {

    constructor(
        public id: number,
        public nombre: string,
        public etiqueta: string,
        public activo: number,
    ){}


    static fromObject( object: { [key: string]: any } ): LayerEntity {
        const { id, nombre, etiqueta, activo } = object;
        return new LayerEntity(id, nombre, etiqueta, activo )
    }

}


export class LayerWithDataEntity {

    constructor(
        public id: number,
        public nombre: string,
        public etiqueta: string,
        public activo: number,
        public url_geoserver: string,
        public id_servicio_mapa: number,
        public color: string,
        public opacidad: number,
        public tipo: string,
        public visibilidad: string
    ){}
    
    static fromObject( object: { [key: string]: any } ): LayerWithDataEntity {
        const { id, nombre, etiqueta, activo, url_geoserver, id_servicio_mapa, color, opacidad, tipo, visibilidad } = object;
        return new LayerWithDataEntity(id, nombre, etiqueta, activo, url_geoserver, id_servicio_mapa, color, opacidad, tipo, visibilidad)
    }


}

