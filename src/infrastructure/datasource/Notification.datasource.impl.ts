import { prisma } from "../../data/sqlserver";
import { CustomError } from "../../domain";
import { NotificationDatasource } from "../../domain/datasources/notification.datasource";
import { NotificationDto } from "../../domain/dtos/notification/create-notification.dto";
import { NotificationEntity } from "../../domain/entities/notification.entity";


export class NotificationDatasourceImpl implements NotificationDatasource {

    async updateNotification(id_usuario: number): Promise<string> {
        try {
            await prisma.notifications_web.updateMany({
                where: { id_notification: id_usuario },
                data: {
                    status: 1
                }
            })
            return 'Update changes in notifications_web success'
        } catch (error) {
            console.error(error);
            throw CustomError.internalServer('Internal server error');
        }
    }

    async updateNotificationById(id_notification: number): Promise<NotificationEntity> {
        try {
            const notification_update = await prisma.notifications_web.update({
                where: { id_notification: id_notification },
                data: {
                    status: 1
                }
            })
            return NotificationEntity.fromObject(notification_update)
        } catch (error) {
            console.error(error);
            throw CustomError.internalServer('Internal server error');
        }
    }

    async getByIdUser(id_user: number): Promise<NotificationEntity[]> {
        try {
            const notifications_user = await prisma.notifications_web.findMany({
                where: {
                    AND: [
                        { id_usuario: id_user },
                        { status: 0 }
                    ]
                }
            });
            return notifications_user.map(noti_user => NotificationEntity.fromObject(noti_user))
        } catch (error) {
            console.error(error);
            throw CustomError.internalServer('Internal server error');
        }
    }

    async insertNotification(notificationDto: NotificationDto): Promise<NotificationEntity> {

        try {
            const new_notification = await prisma.notifications_web.create({
                data: notificationDto
            });
            return NotificationEntity.fromObject(new_notification);
        } catch (error) {
            console.error(error);
            throw CustomError.internalServer('Internal server error');
        }

    }

    getById(id_notification: number): Promise<NotificationEntity> {
        throw new Error("Method not implemented.");
    }


}


