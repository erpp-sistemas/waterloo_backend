

export class RegisterDto {

    private constructor(
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
        public segundo_nombre: string,
        public edad: number,
        public calle: string,
        public numero_exterior: string,
        public numero_interior: string,
        public colonia: string,
        public codigo_postal: number,
        public numero_celular: string,
        public numero_local: number,
        public email: string,
        public clave_elector: string,
        public seccion_electoral: number,
        public numero_ninos: number,
        public observaciones: string,
        public vigencia: number,
        public id_zona: number,
        public curp: string
    ) { }

    static create(object: { [key: string]: any }): [string?, RegisterDto?] {
        
        let { id_contribuyente, primer_nombre, apellido_paterno, apellido_materno, fecha_nacimiento,
            id_proceso, nombre_proceso, id_campana, nombre_campana, fecha_captura,
            id_usuario, contribuyente_nuevo, actualizacion_datos, latitud,
            longitud, segundo_nombre, edad, calle, numero_exterior, numero_interior,
            colonia, codigo_postal, numero_local, numero_celular, email, clave_elector,
            seccion_electoral, numero_ninos, observaciones, vigencia, id_zona, curp } = object


        if (!id_contribuyente) return ['Missing id del contribuyente'];
        if (!primer_nombre) return ['Missing primer nombre'];
        if (!apellido_paterno) return ['Missing apellido paterno'];
        if (!apellido_materno) return ['Missing apellido materno'];
        if (!fecha_nacimiento) return ['Missing fecha nacimiento'];
        if (!id_proceso) return ['Missing idproceso'];
        if (!nombre_proceso) return ['Missing nombre proceso'];
        if (!id_campana) return ['Missing id campana'];
        if (!nombre_campana) return ['Missing nombre campana'];
        if (!fecha_captura) return ['Missing fecha captura'];
        if (!id_usuario) return ['Missing id usuario'];
        //if (!contribuyente_nuevo) return ['Missing contribuyente nuevo'];
        //if (!actualizacion_datos) return ['Missing actualizacion datos'];
        if (!latitud) return ['Missing latitud'];
        if (!longitud) return ['Missing latitud'];
        if (!id_zona) return ['Missing id de la zona'];

        if (!segundo_nombre) segundo_nombre = '';
        if (!edad) edad = 0;
        if (!calle) calle = '';
        if (!numero_exterior) numero_exterior = '';
        if (!numero_interior) numero_interior = '';
        if (!colonia) colonia = '';
        if (!codigo_postal) codigo_postal = 0
        if (!numero_celular) numero_celular = '';
        if (!numero_local) numero_local = '';
        if (!email) email = '';
        if (!clave_elector) clave_elector = '';
        if (!seccion_electoral) seccion_electoral = 0;
        if (!numero_ninos) numero_ninos = 0;
        if (!observaciones) observaciones = '';
        if (!vigencia) vigencia = 0;
        if (!curp) curp = '';



        return [undefined, new RegisterDto(
            id_contribuyente, primer_nombre, apellido_paterno, apellido_materno, fecha_nacimiento,
            id_proceso, nombre_proceso, id_campana, nombre_campana, fecha_captura,
            id_usuario, contribuyente_nuevo, actualizacion_datos, latitud,
            longitud, segundo_nombre, edad, calle, numero_exterior, numero_interior,
            colonia, codigo_postal, numero_celular, numero_local, email, clave_elector,
            seccion_electoral, numero_ninos, observaciones, vigencia, id_zona, curp
        )]


    }

}




