

export class RegisterEntity {

    constructor(
        public total: number,
        public registros_por_usuario: any[],
        public registros_por_proceso: any[]
    ) { }


    static fromObject(objeto: { [key: string]: any }): RegisterEntity {

        let { total, registros_por_usuario, registros_por_proceso } = objeto

        return new RegisterEntity(total, registros_por_usuario, registros_por_proceso)

    }

}