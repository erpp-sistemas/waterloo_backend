


export class OficinaEnlaceWSEntity {

    constructor(
        public id_asunto: number,
        public cita: string,
        public hora_cita: string,
        public id_atendera: number,
    ) { }

    static fromObject(object: { [key: string]: any }): OficinaEnlaceWSEntity {

        let { id_asunto, fecha_cita, hora_cita, id_atendera } = object;

        return new OficinaEnlaceWSEntity(id_asunto, fecha_cita, hora_cita, id_atendera);

    }

}