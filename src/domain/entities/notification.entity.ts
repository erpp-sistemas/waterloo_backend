


export class NotificationEntity {

    constructor(
        public id_notification: number,
        public name: string,
        public id_usuario: number,
        public status: number,
        public fecha: string
    ){}

    static fromObject(object: {[key: string]: any}): NotificationEntity {

        let { id_notification, name, id_usuario, status, fecha } = object;
        return new NotificationEntity(id_notification, name, id_usuario, status, fecha);
    }

}