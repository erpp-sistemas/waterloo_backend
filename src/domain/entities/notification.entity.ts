


export class NotificationEntity {

    constructor(
        public id_notification: number,
        public name: string,
        public id_usuario: number,
        public status: number,
        public fecha: string,
        public id_type_notification: number,
        public id_oficina_enlace: number
    ){}

    static fromObject(object: {[key: string]: any}): NotificationEntity {

        let { id_notification, name, id_usuario, status, fecha, id_type_notification, id_oficina_enlace } = object;
        return new NotificationEntity(id_notification, name, id_usuario, status, fecha, id_type_notification, id_oficina_enlace);
    }

}