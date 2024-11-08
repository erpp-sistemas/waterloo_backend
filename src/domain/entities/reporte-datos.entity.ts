

export class ReporteDatosEntity {

    constructor(
        public id: string,
        public nombre: string,
        public edad: number,
        public fecha_nacimiento: string,
        public numero_celular: string,
        public seccion: number,
        public correo: string,
        public foto_ine_frente: string,
        public foto_ine_trasera: string,
        public calle: string,
        public num_ext: string,
        public num_int: string,
        public colonia: string,
        public codigo_postal: number,
        public observaciones: string,
        public nombre_proceso: string,
        public nombre_usuario: string,
        public fecha_registro: string,
        public foto_persona: string,
        public foto_persona_estatus: string,
        public foto_ine_frente_estatus: string,
        public foto_ine_trasera_estatus: string,
    ) { }

    static fromObject(object: { [key: string]: any }): ReporteDatosEntity {

        let {
            id,
            nombre,
            edad,
            fecha_nacimiento,
            numero_celular,
            seccion,
            correo,
            foto_ine_frente,
            foto_ine_trasera,
            calle,
            num_ext,
            num_int,
            colonia,
            codigo_postal,
            observaciones,
            nombre_proceso,
            nombre_usuario,
            fecha_registro,
            foto_persona,
            foto_persona_estatus,
            foto_ine_frente_estatus,
            foto_ine_trasera_estatus,
        } = object

        return new ReporteDatosEntity(
            id,
            nombre,
            edad,
            fecha_nacimiento,
            numero_celular,
            seccion,
            correo,
            foto_ine_frente,
            foto_ine_trasera,
            calle,
            num_ext,
            num_int,
            colonia,
            codigo_postal,
            observaciones,
            nombre_proceso,
            nombre_usuario,
            fecha_registro,
            foto_persona,
            foto_persona_estatus,
            foto_ine_frente_estatus,
            foto_ine_trasera_estatus,)

    }


}