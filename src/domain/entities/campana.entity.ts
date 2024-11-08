


export class CampanaEntity {


    constructor(
        public id: number,
        public nombre: string,
        public logo: string,
        public latitud: number,
        public longitud: number,
        public estado_republica: string,
        public activo: number,
        public municipio: string,
    ) {}

    static fromObject(object: { [key: string]: any }): CampanaEntity {

        let { id, nombre, logo, latitud, longitud, estado_republica, activo, municipio } = object;

        return new CampanaEntity(id, nombre, logo, latitud, longitud, estado_republica, activo, municipio)

    }

}