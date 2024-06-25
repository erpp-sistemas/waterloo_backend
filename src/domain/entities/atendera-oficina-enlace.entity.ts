

export class AtenderaOficinaEnlaceEntity {

    constructor(
        public name: string,
        public id_atendera: number,
        public id_usuario: number,
        public id_campana: number,
    ){}

    static fromObject(object: {[key: string]: any}): AtenderaOficinaEnlaceEntity {

        let { id_atendera, id_usuario, id_campana, usuario } = object;
        let { nombre, apellido_paterno, apellido_materno } = usuario;
        let name = `${nombre} ${apellido_paterno} ${apellido_materno}`

        return new AtenderaOficinaEnlaceEntity(name, id_atendera, id_usuario, id_campana)


    }

}