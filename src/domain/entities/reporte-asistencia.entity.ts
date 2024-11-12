


export class ReporteAsistenciaEntity {

    constructor(
        public id: number,
        public nombre: string,
        public apellido_paterno: string,
        public apellido_materno: string,
        public hora_entrada: string,
        public latitud_entrada: number,
        public longitud_entrada: number,
        public estatus_entrada: string,
        public url_foto_entrada: string,
        public hora_salida: string,
        public latitud_salida: number,
        public longitud_salida: number,
        public estatus_salida: string,
        public url_foto_salida: string,
        public fecha_captura: string
    ) { }


    static fromObject(object: { [key: string]: any }): ReporteAsistenciaEntity {

        const { id, nombre, apellido_paterno, apellido_materno, hora_entrada, latitud_entrada, longitud_entrada, estatus_entrada, url_foto_entrada, hora_salida, latitud_salida, longitud_salida, estatus_salida, url_foto_salida, fecha_captura } = object;

        return new ReporteAsistenciaEntity(id, nombre, apellido_paterno, apellido_materno, hora_entrada, latitud_entrada, longitud_entrada, estatus_entrada, url_foto_entrada, hora_salida, latitud_salida, longitud_salida, estatus_salida, url_foto_salida, fecha_captura)


    }

}