import { prisma } from "../../data/sqlserver";
import { CustomError, RegisterDto, DashboardResumeEntity } from "../../domain";
import { RegisterDatasource } from "../../domain/datasources/register.datasource";




export class RegisterDatasourceImpl implements RegisterDatasource {


    async insertRegister(registerDto: RegisterDto): Promise<DashboardResumeEntity> {

        let { id_contribuyente, primer_nombre, segundo_nombre, apellido_paterno, apellido_materno, edad, fecha_nacimiento, calle, numero_exterior, numero_interior, colonia, codigo_postal, numero_celular, numero_local, email, clave_elector, seccion_electoral, numero_ninos, observaciones, vigencia, curp, id_proceso, fecha_captura, id_usuario, contribuyente_nuevo, actualizacion_datos, id_campana, latitud, longitud, id_zona } = registerDto;

        try {
            await prisma.$queryRaw`EXEC sp_insert_registro_contribuyente_m @id_contribuyente=${id_contribuyente}, @primer_nombre=${primer_nombre}, @segundo_nombre=${segundo_nombre}, @apellido_paterno=${apellido_paterno}, @apellido_materno=${apellido_materno}, @edad=${edad}, @fecha_nacimiento=${fecha_nacimiento}, @calle=${calle}, @numero_exterior=${numero_exterior}, @numero_interior=${numero_interior}, @colonia=${colonia}, @codigo_postal=${codigo_postal}, @numero_celular=${numero_celular}, @numero_local=${numero_local}, @email=${email}, @clave_elector=${clave_elector}, @seccion_electoral=${seccion_electoral}, @numero_ninos=${numero_ninos}, @observaciones=${observaciones}, @vigencia=${vigencia}, @curp=${curp}, @id_proceso=${id_proceso}, @fecha_captura=${fecha_captura}, @id_usuario=${id_usuario}, @contribuyente_nuevo=${contribuyente_nuevo}, @actualizacion_datos=${actualizacion_datos}, @id_campana=${id_campana}, @latitud=${latitud}, @longitud=${longitud}, @id_zona=${id_zona}`

            const data: any[] = await prisma.$queryRaw`sp_get_resume_dashboard_w @id_campana=${id_campana}`
            let { total_contribuyentes, zonas, operadores, procesos, registros_por_usuario, total_numeros_whatsapp, total_militantes, total_registros, oficina_enlace, meta, registros_por_proceso } = data[0];

            return DashboardResumeEntity.fromObject({ total_contribuyentes, zonas, operadores, procesos, registros_por_usuario, total_numeros_whatsapp, total_militantes, total_registros, oficina_enlace, meta, registros_por_proceso })

        } catch (error) {
            console.error(error)
            throw CustomError.internalServer('Internal server error')
        }

    }

}