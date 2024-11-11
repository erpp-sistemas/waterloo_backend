import { Encrypt } from "../config/encrypt.adapter";
import { prisma } from "../data/sqlserver";
import { CustomError } from "../domain";
import { UserLogged, UserCampanaProcesoModulo, RegisterAsistencia, RegisterPhoto, RegisterContribuyente } from "./interfaces";


export class MobileService {

    async LoginSql(username: string, password: string): Promise<[string?, UserLogged?]> {
        try {

            const userFind = await prisma.usuario.findFirst({
                where: { usuario: username }
            });

            if (userFind) {
                const isMatching = Encrypt.compare(password, userFind.password!);
                if (isMatching) {
                    const res: UserLogged[] = await prisma.$queryRaw`EXEC sp_login_sql @username = ${username}`
                    return [undefined, res[0]]
                }
                if (!isMatching) return ['Credenciales incorrectas']
            }

            return ['Usuario no encontrado']
        } catch (error) {
            console.error(error);
            throw CustomError.internalServer('Internal server error')
        }
    }

    async getCampanasProcesosModulosByUser(user_id: number) {
        try {
            const data: UserCampanaProcesoModulo[] = await prisma.$queryRaw`EXEC sp_get_campanas_procesos_modulos_by_user @id_usuario=${user_id}`;
            return data
        } catch (error) {
            console.error(error);
            throw CustomError.internalServer('Internal server error')
        }
    }

    async registerAsistencia(data: RegisterAsistencia) {
        try {
            const { tipo, hora_entrante, latitud, longitud, url_foto, id_usuario } = data;
            const res = await prisma.$queryRaw`EXEC sp_registro_asistencia @tipo=${tipo}, @id_usuario=${id_usuario}, @hora_entrante=${hora_entrante}, @latitud=${latitud}, @longitud=${longitud}, @url_imagen=${url_foto}`;
            return 'Registro insertado correctamente'
        } catch (error) {
            console.error(error);
            throw CustomError.internalServer('Internal server error')
        }
    }

    async getAsignacion(user_id: number, campana_id: number, proceso_id: number) {
        try {
            const asignacion = await prisma.$queryRaw`EXEC sp_get_asignacion @id_usuario=${user_id}, @id_campana=${campana_id}, @id_proceso=${proceso_id}`;
            return asignacion;
        } catch (error) {
            console.error(error);
            throw CustomError.internalServer('Internal server error')
        }
    }

    async findContribuyenteByData(nombnre: string, segundo_nombre: string, apellido_paterno: string, apellido_materno: string) {
        try {
            const contribuyente_find: any = await prisma.$queryRaw`EXEC sp_find_contribuyente_by_data @nombre=${nombnre}, @segundo_nombre=${segundo_nombre}, @apellido_paterno=${apellido_paterno}, @apellido_materno=${apellido_materno}`;
            return contribuyente_find[0];
        } catch (error) {
            console.error(error);
            throw CustomError.internalServer('Internal server error')
        }
    }

    async getDirectorio() {
        try {
            const directorio = await prisma.directorio.findMany();
            return directorio
        } catch (error) {
            console.error(error);
            throw CustomError.internalServer('Internal server error')
        }
    }

    async insertPhotoRegister(data: RegisterPhoto) {
        try {
            const { fecha, id_campana, id_contribuyente, id_proceso, id_usuario, imageName, tipo, url_imagen } = data;
            const res = await prisma.$queryRaw`EXEC sp_insert_foto_registro @id_contribuyente=${id_contribuyente}, @id_usuario=${id_usuario}, @imageName=${imageName}, @id_proceso=${id_proceso}, @fecha=${fecha}, @tipo=${tipo}, @id_campana=${id_campana}, @url_imagen=${url_imagen}`;
            return 'Foto subida correctamente'
        } catch (error) {
            console.error(error);
            throw CustomError.internalServer('Internal server error')
        }
    }

    async updateIdPush(user_id: number, new_id_push: string) {
        try {
            const res = await prisma.usuario.update({
                data: { id_user_push: new_id_push },
                where: { id: user_id }
            })
            return 'Se actualizo correctamente el id_user_push'
        } catch (error) {
            console.error(error);
            throw CustomError.internalServer('Internal server error')
        }
    }

    async getPushNotificationsByUser(user_id: number) {
        try {
            const res = await prisma.registro_push_notifications.findMany({
                select: {
                    id_registro_push: true,
                    id_push_notification: true,
                    id_usuario: true,
                    id_user_push: true,
                    titulo_push: true,
                    mensaje: true,
                    leido: true,
                    fecha: true,
                    activo: true,
                    url_img: true
                },
                where: { id_usuario: user_id }
            });
            return res
        } catch (error) {
            console.error(error);
            throw CustomError.internalServer('Internal server error')
        }
    }

    async deletePushByIdAndUser(user_id: number, id_push: string) {
        try {
            const res = await prisma.registro_push_notifications.updateMany({
                data: { activo: 0 },
                where: {
                    AND: [
                        { id_usuario: user_id },
                        { id_push_notification: id_push }
                    ]
                }
            });
            return 'Se desactivo la notificación correctamente'
        } catch (error) {
            console.error(error);
            throw CustomError.internalServer('Internal server error')
        }
    }

    async getRegisterByContribuyente(contribuyente_id: string) {
        try {
            const res = await prisma.$queryRaw`EXEC sp_get_registros_by_contribuyente @id_contribuyente=${contribuyente_id}`;
            return res
        } catch (error) {
            console.error(error);
            throw CustomError.internalServer('Internal server error')
        }
    }


    async insertRegisterContribuyente(data: RegisterContribuyente) {
        try {
            const { actualizacion_datos, apellido_materno, apellido_paterno, calle, clave_elector, codigo_postal, colonia, contribuyente_nuevo, curp, edad, email, fecha_captura, fecha_nacimiento, id_campana, id_contribuyente, id_proceso, id_usuario, id_zona, latitud, longitud, numero_celular, numero_exterior, numero_interior, numero_local, numero_ninos, observaciones, primer_nombre, seccion_electoral, segundo_nombre, vigencia } = data;

            let params = `'${id_contribuyente}', '${primer_nombre}', '${segundo_nombre}', '${apellido_paterno}', '${apellido_materno}', ${edad}, '${fecha_nacimiento}', '${calle}', '${numero_exterior}', '${numero_interior}', '${colonia}', ${codigo_postal}, '${numero_celular}', '${numero_local}', '${email}', '${clave_elector}', ${seccion_electoral}, ${numero_ninos}, '${observaciones}', '${vigencia}', '${curp}', ${id_proceso}, '${fecha_captura}', ${id_usuario}, ${contribuyente_nuevo}, ${actualizacion_datos}, ${id_campana}, ${latitud}, ${longitud}, ${id_zona} `

            const res = await prisma.$queryRaw`EXEC sp_insert_registro_contribuyente_m ${params}`
            return 'Registro insertado correctamente'
        } catch (error) {
            console.error(error);
            throw CustomError.internalServer('Internal server error')
        }
    }


}