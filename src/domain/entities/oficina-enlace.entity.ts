

export class OficinaEnlaceEntity {

    constructor(
        public id_oficina_enlace: number,
        public nombres: string,
        public apellido_paterno: string,
        public apellido_materno: string,
        public calle: string,
        public num_ext: string,
        public num_int: string,
        public colonia: string,
        public codigo_postal: number,
        public telefono_personal: string,
        public correo: string,
        public edad: number,
        public id_asunto: number,
        public id_atendera: number,
        public fecha_cita: string,
        public hora_cita: string,
        public url_foto_persona: string,
        public url_foto_ine_frente: string,
        public url_foto_ine_trasera: string,
        public comentarios: string,
        public id_campana: number,
        public estatus_cita: number
    ) { }

    static fromObject(object: { [key: string]: any }): OficinaEnlaceEntity {

        let {
            id_oficina_enlace, nombres, apellido_paterno, apellido_materno, calle, num_ext, num_int, colonia, codigo_postal,
            telefono_personal, correo, edad, id_asunto, id_atendera, fecha_cita, hora_cita,
            url_foto_persona, url_foto_ine_frente, url_foto_ine_trasera, comentarios, id_campana,
            estatus_cita 
        } = object;

        return new OficinaEnlaceEntity(id_oficina_enlace, nombres, apellido_paterno, apellido_materno, calle, num_ext, num_int,
            colonia, codigo_postal, telefono_personal, correo, edad, id_asunto, id_atendera, fecha_cita, hora_cita, 
            url_foto_persona, url_foto_ine_frente, url_foto_ine_trasera, comentarios, id_campana,  estatus_cita)

    }

}