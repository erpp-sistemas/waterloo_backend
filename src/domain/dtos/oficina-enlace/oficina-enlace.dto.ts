


export class OficinaEnlaceDto {

    private constructor(
        public nombres: string,
        public apellido_paterno: string,
        public apellido_materno: string,
        public calle: string,
        public num_ext: string,
        public num_int: string,
        public colonia: string,
        public codigo_postal: string,
        public telefono_personal: string,
        public correo: string,
        public edad: number,
        public id_asunto: number,
        public id_atendera: number,
        public fecha_cita: string,
        public hora_cita: string,
        public url_photo_face: string,
        public url_photo_ine_frente: string,
        public url_photo_ine_trasera: string,
        public comentarios: string,
        public id_campana: number,
        public estatus_cita: number
    ) { }


    static create(object: { [key: string]: any }): [string?, OficinaEnlaceDto?] {

        let { id_campana, nombres, apellido_paterno, apellido_materno, calle, num_ext, num_int,
            colonia, codigo_postal, telefono_personal, correo, edad, id_asunto, id_atendera,
            fecha_cita, hora_cita, comentarios, url_photo_face, url_photo_ine_frente,
            url_photo_ine_trasera, estatus_cita
        } = object;


        if (!nombres) return ['Missing nombres'];
        if (!apellido_paterno) return ['Missing apellido paterno'];
        if (!apellido_materno) return ['Missing apellido materno'];
        if (!id_asunto) return ['Missing id del asunto'];
        if (id_asunto === 1 && !fecha_cita) return ['Missing fecha de la cita'];
        if (id_asunto === 1 && !hora_cita) return ['Missing hora de la cita'];
        if (id_asunto === 1 && id_atendera === 0) return ['Missing id de quien atendera'];

        return [undefined, new OficinaEnlaceDto(nombres, apellido_paterno, apellido_materno, calle, num_ext, num_int,
            colonia, codigo_postal, telefono_personal, correo, edad, id_asunto, id_atendera, fecha_cita, hora_cita,
            url_photo_face, url_photo_ine_frente, url_photo_ine_trasera, comentarios, id_campana, estatus_cita)]

    }




}




