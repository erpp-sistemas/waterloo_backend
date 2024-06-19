

export class RegisterEntity {

    constructor(
        public id_contribuyente: string,
        public primer_nombre: string,
        public apellido_paterno: string,
        public apellido_materno: string,
        public fecha_nacimiento: string,
        public id_proceso: number,
        public nombre_proceso: string,
        public id_campana: number,
        public nombre_campana: string,
        public fecha_captura: string,
        public id_usuario: number,
        public contribuyente_nuevo: number,
        public actualizacion_datos: number,
        public latitud: number,
        public longitud: number,
        public total: number,
        public id_zona?: number,
        public segundo_nombre?: string,
        public edad?: number,
        public calle?: string,
        public numero_exterior?: string,
        public numero_interior?: string,
        public colonia?: string,
        public codigo_postal?: number,
        public numero_celular?: string,
        public numero_local?: number,
        public email?: string,
        public clave_elector?: string,
        public seccion_electoral?: number,
        public numero_ninos?: number,
        public observaciones?: string,
        public vigencia?: number,
        public curp?: string
    ) { }


    static fromObject(objeto: { [key: string]: any }): RegisterEntity {

        let {
            id_contribuyente, primer_nombre, apellido_paterno, apellido_materno, fecha_nacimiento, id_proceso, nombre_proceso, 
            id_campana, nombre_campana, fecha_captura, id_usuario, contribuyente_nuevo, actualizacion_datos, latitud, longitud, total,
            segundo_nombre, edad, calle, numero_exterior, numero_interior, colonia, codigo_postal, numero_celular, numero_local, email, clave_elector, seccion_electoral, numero_ninos, observaciones, vigencia, id_zona, curp
        } = objeto

        return new RegisterEntity(id_contribuyente, primer_nombre, apellido_paterno, apellido_materno, fecha_nacimiento, id_proceso, nombre_proceso, id_campana, nombre_campana, fecha_captura, id_usuario, contribuyente_nuevo, actualizacion_datos, latitud, longitud, total, segundo_nombre, edad, calle, numero_exterior, numero_interior, colonia, codigo_postal, numero_celular, numero_local, email, clave_elector, seccion_electoral, numero_ninos, observaciones, vigencia, id_zona, curp)

    }

}