


export class TemplateWhatsappEntity {

    constructor(
        public id_template: string,
        public nombre: string,
        public etiqueta: string,
        public activo: number,
        public created_at: string,
        public description: string,
    ){}

    static fromObject( object: { [key: string]: any } ): TemplateWhatsappEntity {

        const { id_template, nombre, etiqueta, activo, created_at, description } = object;

        return new TemplateWhatsappEntity(id_template, nombre, etiqueta, activo, created_at, description)

    }

}