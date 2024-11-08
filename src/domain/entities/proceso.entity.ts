


export class ProcesoEntity {

    constructor(
        public id: number,
        public nombre: string,
        public icono: string,
        public activo: number,
        public icono_app_movil: string
    ){}

    static fromObject(object: {[key: string]: any}): ProcesoEntity {

        let { id, nombre, icono, activo, icono_app_movil } = object;

        return new ProcesoEntity(id, nombre, icono, activo, icono_app_movil)

    }

}