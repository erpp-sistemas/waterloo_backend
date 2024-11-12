
export interface UserLogged {
    id: number;
    activo: number;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    correo: string;
    url_foto: string;
    username: string;
    id_rol: number;
    nombre_rol: string;
    id_user_push: string;
    id_zona: number;
}


export interface UserCampanaProcesoModulo {
    id_usuario: number;
    id_campana: number;
    id_proceso: number;
    nombre_campana: number;
    nombre_proceso: string;
    proceso_icono_app_movil: string;
    id_modulo: number;
    nombre_modulo: string;
    modulo_icono_app_movil: string;
    modulo_url_app_movil: string;
}

export interface RegisterAsistencia {
    tipo: number;
    id_usuario: number;
    hora_entrante: number;
    latitud: number;
    longitud: number;
    url_foto: string;
}

export interface Asignacion {
    id_contribuyente: number;
    nombre: string;
    segundo_nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    edad: number;
    fecha_nacimiento: string;
    clave_elector: string;
    seccion: number;
    curp: string;
    numero_celular: string;
    numero_local: string;
    correo: string;
    calle: string;
    num_ext: string;
    num_int: string;
    colonia: string;
    codigo_postal: number;
    latitud: number;
    longitud: number;
    foto_ine_frente: string;
    foto_ine_trasera: string;
    id_campana: number;
    id_modulo: number;
    nombre_modulo: string;
}

export interface RegisterPhoto {
    id_contribuyente: number;
    id_usuario: number;
    imageName: string;
    id_proceso: number;
    fecha: string;
    tipo: string;
    id_campana: number;
    url_imagen: string;
}

export interface RegisterPhotoSeguimiento {
    id_seguimiento: number;
    id_campana: number;
    id_usuario: number;
    imageName: string;
    fecha: string;
    tipo: string;
    url_imagen: string;
}

export interface RegisterContribuyente {
    id_contribuyente: number;
    primer_nombre: string;
    segundo_nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    edad: number
    fecha_nacimiento: string;
    calle: string;
    numero_exterior: string;
    numero_interior: string;
    colonia: string;
    codigo_postal: number
    numero_celular: string;
    numero_local: string;
    email: string;
    clave_elector: string;
    seccion_electoral: number
    numero_ninos: number
    observaciones: string;
    vigencia: string;
    curp: string;
    id_proceso: number;
    fecha_captura: string;
    id_usuario: number;
    contribuyente_nuevo: number;
    actualizacion_datos: number;
    id_campana: number;
    latitud: number;
    longitud: number;
    id_zona: number;
}

export interface RegisterSeguimientoGestion {
    nombres: string;
    apellido_paterno: string;
    apellido_materno: string;
    numero_celular: string;
    correo: string;
    observaciones: string;
    id_usuario: number;
    id_campana: number;
    latitud: number;
    longitud: number;
    tipo: string;
    fecha: string;
    id_seguimiento: number;
}


export interface RecorridoGestor {
    id_usuario: number;
    latitud: number;
    longitud: number;
    fecha: string;
}