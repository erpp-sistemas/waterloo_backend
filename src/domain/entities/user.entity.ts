import { CustomError } from "../errors/custom.error";

export class UserEntity {

    constructor(
        public id: number,
        public usuario: string,
        public password: string,
        public nombre: string,
        public apellido_paterno: string,
        public apellido_materno: string,
        public url_foto: string,
        public activo: number,
        public access_app_movil: number,
        public access_app_web: number,
        public telefono_personal?: string,
        public id_user_push?: string,
        public sexo?: string,
        public correo?: string,
    ) { }

    static fromObject(object: { [key: string]: any }): UserEntity {

        const { id, nombre, apellido_paterno, apellido_materno, usuario, password, url_foto, activo,
            access_app_movil, access_app_web } = object;

        //if (!id) throw CustomError.badRequest('Missign id');
        if (!nombre) throw CustomError.badRequest('Missign nombre');
        if (!apellido_paterno) throw CustomError.badRequest('Missign apellido paterno');
        if (!usuario) throw CustomError.badRequest('Missign usuario');
        if (!password) throw CustomError.badRequest('Missign password');

        return new UserEntity(
            id, nombre, apellido_materno, apellido_materno, usuario, password, url_foto,
            activo, access_app_movil, access_app_web
        )

    }

}