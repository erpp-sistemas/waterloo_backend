


export class NotificationDto {

    private constructor(
        public name: string,
        public id_usuario: number,
        public status: number,
        public fecha: string,
        public id_type_notification: number, 
        public id_oficina_enlace: number
    ) { }

    static create(object: { [key: string]: any }): [string?, NotificationDto?] {

        let { name, id_usuario, id_type_notification, id_oficina_enlace } = object;

        if (!name) return ['Missing name'];
        if (!id_usuario) return ['Missing id del usuario'];
        

        const status = 0;
        const fecha_date = new Date();
        const fecha = fecha_date.toISOString()

        return [undefined, new NotificationDto(name, id_usuario, status, fecha, id_type_notification, id_oficina_enlace)]

    }

}