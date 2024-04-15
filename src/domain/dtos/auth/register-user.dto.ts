import { regularExps } from "../../../config/regular-exp";


export class RegisterUserDto {

    private constructor(
        public usuario: string,
        public password: string,
        public nombre: string,
        public apellido_paterno: string,
    ) { }

    static create( object: { [key: string]: any } ): [string?, RegisterUserDto?] {

        const { usuario, password, nombre, apellido_paterno } = object;

        if( !usuario ) return ['Missing usuario'];
        if( !regularExps.email.test( usuario ) ) return ['Email is not valid']
        if( !password ) return ['Missing password']
        if( !nombre ) return ['Missing nombre']
        if( !apellido_paterno ) return ['Missing apellido paterno']

        return [undefined, new RegisterUserDto(usuario, password, nombre, apellido_paterno)]

    }

}