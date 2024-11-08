


export class ZonaEntity {

    constructor(
        public id_zona: number,
        public nombre_zona: string,
        public encargado_zona: string,
        public url_foto: string
    ){}


    static fromObject( object: { [key: string]: any } ): ZonaEntity {
        
        let { id_zona, nombre_zona, encargado_zona, url_foto } = object;

        return new ZonaEntity(id_zona, nombre_zona, encargado_zona, url_foto);

    }

}