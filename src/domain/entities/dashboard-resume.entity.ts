

export class DashboardResumeEntity {

    constructor(
        public total_contribuyentes: any[],
        public zonas: any[],
        public operadores: any[],
        public procesos: any[],
        public registros_por_usuario: any[],
        public total_numeros_whatsapp: any[],
        public total_militantes: any[],
        public total_registros: any[],
        public oficina_enlace: any[],
        public meta: any[],
        public registros_por_proceso: any[]
    ){}

    static fromObject(objeto: {[key: string]: any}): DashboardResumeEntity {

        let { total_contribuyentes, zonas, operadores, procesos, registros_por_usuario, total_numeros_whatsapp, total_militantes, total_registros, oficina_enlace, meta, registros_por_proceso } = objeto;

        return new DashboardResumeEntity(total_contribuyentes, zonas, operadores, procesos, registros_por_usuario, total_numeros_whatsapp, total_militantes, total_registros, oficina_enlace, meta, registros_por_proceso)

    }

}