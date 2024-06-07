BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[asignacion_campana] (
    [id_asignacion] INT NOT NULL IDENTITY(1,1),
    [id_usuario] INT NOT NULL,
    [id_contribuyente] NVARCHAR(100) NOT NULL,
    [id_campana] INT NOT NULL,
    [id_proceso] INT NOT NULL,
    [id_modulo] INT NOT NULL,
    [fecha_asignacion] DATETIME NOT NULL,
    [estatus_asignacion] INT NOT NULL,
    CONSTRAINT [PK_id_asignacion] PRIMARY KEY CLUSTERED ([id_asignacion])
);

-- CreateTable
CREATE TABLE [dbo].[asignacion_excel] (
    [id_asignacion_excel] INT NOT NULL IDENTITY(1,1),
    [id_afiliado] INT,
    [id_campana] INT,
    [nombre_campana] NVARCHAR(255),
    [municipio] NVARCHAR(255),
    [estado] NVARCHAR(255),
    [id_proceso] INT,
    [nombre_proceso] NVARCHAR(255),
    [id_usuario] INT,
    [username] NVARCHAR(255),
    [fecha] DATETIME,
    [estatus] NVARCHAR(100)
);

-- CreateTable
CREATE TABLE [dbo].[atendera_apoyo] (
    [id_atendera] INT NOT NULL IDENTITY(1,1),
    [id_usuario] INT,
    [id_campana] INT,
    CONSTRAINT [PK__atendera__A973F0FDCF49DB9B] PRIMARY KEY CLUSTERED ([id_atendera])
);

-- CreateTable
CREATE TABLE [dbo].[campana_proceso] (
    [id_campana_proceso] INT NOT NULL IDENTITY(1,1),
    [id_campana] INT NOT NULL,
    [id_proceso] INT NOT NULL,
    [activo] BIT CONSTRAINT [DF__campana_p__activ__208CD6FA] DEFAULT 1,
    CONSTRAINT [PK_id_campana_proceso] PRIMARY KEY CLUSTERED ([id_campana_proceso])
);

-- CreateTable
CREATE TABLE [dbo].[campana_servicio_layer_estilo] (
    [id] INT NOT NULL IDENTITY(1,1),
    [id_campana] INT NOT NULL,
    [id_servicio_mapa] INT NOT NULL,
    [id_layer] INT NOT NULL,
    [id_estilo] INT NOT NULL,
    [url_geoserver] NVARCHAR(max),
    CONSTRAINT [PK__campana___3213E83F4E8A15E8] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[campanas] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nombre] NVARCHAR(150) NOT NULL,
    [logo] NVARCHAR(255) CONSTRAINT [DF_campanas_logo] DEFAULT 'https://firebasestorage.googleapis.com/v0/b/waterloo-6e309.appspot.com/o/images%2Fusuarios%2FERPP?alt=media&token=fb73957a-68ea-4e76-bd8c-5170f3c949ee',
    [latitud] DECIMAL(19,6) NOT NULL,
    [longitud] DECIMAL(19,6) NOT NULL,
    [estado_republica] NVARCHAR(100) NOT NULL,
    [activo] INT NOT NULL CONSTRAINT [DF_campanas_activo] DEFAULT 1,
    [municipio] NVARCHAR(100) NOT NULL,
    [radius] INT CONSTRAINT [DF_campanas_radius] DEFAULT 0,
    [id_horario] INT NOT NULL,
    CONSTRAINT [PK_campanas] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[campanas_zonas] (
    [id] INT NOT NULL IDENTITY(1,1),
    [id_campana] INT NOT NULL,
    [id_zona] INT NOT NULL,
    CONSTRAINT [PK__campanas__3213E83F1CFCF4E5] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[cat_asunto_oficina_enlace] (
    [id_asunto] INT NOT NULL IDENTITY(1,1),
    [asunto] NVARCHAR(100),
    [status] INT CONSTRAINT [DF__cat_asunt__statu__2D12A970] DEFAULT 1,
    [create_at] DATETIME CONSTRAINT [DF__cat_asunt__creat__2E06CDA9] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [PK_id_asunto] PRIMARY KEY CLUSTERED ([id_asunto])
);

-- CreateTable
CREATE TABLE [dbo].[cat_estatus_asistencia] (
    [id] INT NOT NULL IDENTITY(1,1),
    [estatus] NVARCHAR(100),
    CONSTRAINT [PK__cat_esta__3213E83F125D3D41] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[cat_estatus_cita] (
    [id_estatus_cita] INT NOT NULL IDENTITY(1,1),
    [estatus] NVARCHAR(100),
    CONSTRAINT [PK_id_estatus_cita] PRIMARY KEY CLUSTERED ([id_estatus_cita])
);

-- CreateTable
CREATE TABLE [dbo].[cat_estatus_punto_asistencia] (
    [id] INT NOT NULL IDENTITY(1,1),
    [estatus] NVARCHAR(100) NOT NULL,
    CONSTRAINT [PK__cat_esta__3213E83F8DED0F4F] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[cat_rol] (
    [id_rol] INT NOT NULL IDENTITY(1,1),
    [nombre] VARCHAR(250),
    [activo] BIT,
    [icon] NVARCHAR(100),
    [color] NVARCHAR(7),
    CONSTRAINT [PK_id_rol] PRIMARY KEY CLUSTERED ([id_rol])
);

-- CreateTable
CREATE TABLE [dbo].[cat_templates_whatsapp] (
    [id_template] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(100) NOT NULL,
    [display] NVARCHAR(100) NOT NULL,
    [id_tipo_template] INT NOT NULL,
    [activo] INT NOT NULL CONSTRAINT [DF__cat_templ__activ__2F9A1060] DEFAULT 1,
    [icono] NVARCHAR(100),
    [id_campana] INT NOT NULL,
    [url_image] NVARCHAR(255),
    [has_text] INT,
    CONSTRAINT [PK__cat_temp__97B30205D2A60A8E] PRIMARY KEY CLUSTERED ([id_template])
);

-- CreateTable
CREATE TABLE [dbo].[cat_tipo_foto_registro] (
    [id] INT NOT NULL IDENTITY(1,1),
    [tipo] NVARCHAR(100),
    CONSTRAINT [PK__cat_tipo__3213E83FD47DC70A] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[cat_tipo_template] (
    [id_tipo_template] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(100) NOT NULL,
    [activo] INT NOT NULL CONSTRAINT [DF__cat_tipo___activ__2CBDA3B5] DEFAULT 1,
    CONSTRAINT [PK__cat_tipo__2CBB8ED5758E8D9E] PRIMARY KEY CLUSTERED ([id_tipo_template])
);

-- CreateTable
CREATE TABLE [dbo].[cita_finalizada] (
    [id] INT NOT NULL IDENTITY(1,1),
    [id_oficina_enlace] INT NOT NULL,
    [observaciones] NVARCHAR(255),
    [fecha] DATETIME CONSTRAINT [DF__cita_fina__fecha__795DFB40] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [PK__cita_fin__3213E83F4C8A1633] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[contador_asignacion] (
    [id] INT NOT NULL IDENTITY(1,1),
    [numero_registros] INT,
    [fecha] DATETIME,
    CONSTRAINT [PK_id_contador_asignacion] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[contribuyente] (
    [id] INT NOT NULL IDENTITY(1,1),
    [id_contribuyente] NVARCHAR(100) NOT NULL,
    [nombre] NVARCHAR(100) NOT NULL,
    [segundo_nombre] NVARCHAR(100),
    [apellido_paterno] NVARCHAR(100) NOT NULL,
    [apellido_materno] NVARCHAR(100) NOT NULL,
    [edad] INT NOT NULL,
    [fecha_nacimiento] DATE,
    [clave_elector] NVARCHAR(20),
    [seccion] INT,
    [curp] NVARCHAR(20),
    [numero_celular] NVARCHAR(20),
    [numero_local] NVARCHAR(20),
    [correo] NVARCHAR(100),
    [calle] NVARCHAR(255),
    [num_ext] NVARCHAR(100),
    [num_int] NVARCHAR(100),
    [colonia] NVARCHAR(100),
    [codigo_postal] INT,
    [latitud] DECIMAL(19,6),
    [longitud] DECIMAL(19,6),
    [foto_ine_frente] NVARCHAR(255),
    [foto_ine_trasera] NVARCHAR(255),
    [id_campana] INT NOT NULL,
    [fecha_ingreso] DATETIME NOT NULL,
    [foto_persona] NVARCHAR(255),
    [vigencia] NVARCHAR(50),
    CONSTRAINT [PK_id_contribuyente] PRIMARY KEY CLUSTERED ([id_contribuyente])
);

-- CreateTable
CREATE TABLE [dbo].[direccionGeocoding] (
    [id] INT NOT NULL IDENTITY(1,1),
    [cuenta] NVARCHAR(50),
    [calle] NVARCHAR(150),
    [numero] NVARCHAR(50),
    [cp] NVARCHAR(10),
    [distrito] NVARCHAR(150),
    [ciudad] NVARCHAR(150),
    [estado] NVARCHAR(150),
    [pais] NVARCHAR(150),
    [latitud] DECIMAL(18,6),
    [longitud] DECIMAL(18,6),
    [fecha] DATETIME,
    CONSTRAINT [PK__direccio__3213E83FC5566930] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[directorio] (
    [id_directorio] INT NOT NULL IDENTITY(1,1),
    [nombre_empleado] NVARCHAR(100) NOT NULL,
    [apellido_paterno_empleado] NVARCHAR(100),
    [apellido_materno_empleado] NVARCHAR(100),
    [puesto] NVARCHAR(100) NOT NULL,
    [telefono] NVARCHAR(20) NOT NULL,
    [email] NVARCHAR(100),
    [area] NVARCHAR(100),
    CONSTRAINT [PK__director__B45C4B70586C67BD] PRIMARY KEY CLUSTERED ([id_directorio])
);

-- CreateTable
CREATE TABLE [dbo].[encargados_zona] (
    [id] INT NOT NULL IDENTITY(1,1),
    [id_usuario] INT NOT NULL,
    [id_zona] INT NOT NULL,
    [id_campana] INT NOT NULL,
    CONSTRAINT [PK__encargad__3213E83FDE7C8359] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[estilo_layer] (
    [id_estilo] INT NOT NULL IDENTITY(1,1),
    [color] NVARCHAR(20),
    [opacidad] DECIMAL(16,2),
    [tipo] NVARCHAR(100),
    [activo] INT CONSTRAINT [DF_estilo_layer_activo] DEFAULT 1,
    [visibilidad] NVARCHAR(100) CONSTRAINT [DF_estilo_layer_visible] DEFAULT 'none',
    CONSTRAINT [PK__estilo_l__478DDD2908305D3C] PRIMARY KEY CLUSTERED ([id_estilo])
);

-- CreateTable
CREATE TABLE [dbo].[filtro] (
    [id_filtro] INT NOT NULL IDENTITY(1,1),
    [nombre_filtro] NVARCHAR(100),
    [etiqueta] NVARCHAR(100),
    [activo] INT CONSTRAINT [DF__filtro__activo__44CA3770] DEFAULT 1,
    CONSTRAINT [PK_id_filtro] PRIMARY KEY CLUSTERED ([id_filtro])
);

-- CreateTable
CREATE TABLE [dbo].[foto_registro_contribuyente] (
    [id_foto_registro] INT NOT NULL IDENTITY(1,1),
    [id_contribuyente] NVARCHAR(100),
    [url_foto] NVARCHAR(255),
    [tipo] NVARCHAR(100),
    [fecha] DATETIME,
    [id_proceso] INT,
    [id_usuario] INT,
    [id_campana] INT,
    [nombre_foto] NVARCHAR(100),
    [activo] INT,
    [fecha_sincronizacion] DATETIME,
    CONSTRAINT [PK__foto_reg__29DDE21A2B741D78] PRIMARY KEY CLUSTERED ([id_foto_registro])
);

-- CreateTable
CREATE TABLE [dbo].[foto_seguimiento_gestion] (
    [id] INT NOT NULL IDENTITY(1,1),
    [id_seguimiento] NVARCHAR(100),
    [id_campana] INT NOT NULL,
    [id_usuario] INT NOT NULL,
    [url_foto] NVARCHAR(max),
    [tipo] NVARCHAR(100),
    [fecha] DATETIME,
    [imageName] NVARCHAR(255),
    CONSTRAINT [PK__foto_seg__3213E83FF9594B3C] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[horario] (
    [id_horario] INT NOT NULL IDENTITY(1,1),
    [horario_entrada] NVARCHAR(100),
    [horario_salida] NVARCHAR(100),
    [activo] INT CONSTRAINT [DF__horario__activo__558AAF1E] DEFAULT 1,
    [hora_entrada_tolerancia] NVARCHAR(100),
    CONSTRAINT [PK__horario__C5836D690056DE2E] PRIMARY KEY CLUSTERED ([id_horario])
);

-- CreateTable
CREATE TABLE [dbo].[layer] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nombre] NVARCHAR(100),
    [etiqueta] NVARCHAR(100),
    [activo] INT CONSTRAINT [DF__layer__activo__6D0D32F4] DEFAULT 1,
    CONSTRAINT [PK__layer__3213E83FCF561D8A] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[layer_filtro] (
    [id_layer_filtro] INT NOT NULL IDENTITY(1,1),
    [id_layer] INT,
    [id_filtro] INT,
    [id_campana] INT,
    [nombre_tabla] NVARCHAR(100),
    [campos] NVARCHAR(255),
    [descripcion] NVARCHAR(255),
    CONSTRAINT [PK__layer_fi__C42E8A72BEF6F74E] PRIMARY KEY CLUSTERED ([id_layer_filtro])
);

-- CreateTable
CREATE TABLE [dbo].[menu] (
    [id_menu] INT NOT NULL IDENTITY(1,1),
    [id_menu_parent] INT CONSTRAINT [DF_id_menu_parent] DEFAULT 0,
    [name_menu] NVARCHAR(255),
    [icon] NVARCHAR(100),
    [route] NVARCHAR(100),
    [activo] INT CONSTRAINT [DF__menu__activo__2FBA0BF1] DEFAULT 1,
    CONSTRAINT [PK__menu__68A1D9DB317A8286] PRIMARY KEY CLUSTERED ([id_menu])
);

-- CreateTable
CREATE TABLE [dbo].[menu_rol] (
    [id] INT NOT NULL IDENTITY(1,1),
    [id_rol] INT,
    [id_menu] INT,
    [activo] INT CONSTRAINT [DF__menu_rol__activo__3A379A64] DEFAULT 1,
    CONSTRAINT [PK__menu_rol__3213E83F8C09F787] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[menu_usuario] (
    [id] INT NOT NULL IDENTITY(1,1),
    [id_usuario] INT,
    [id_menu] INT,
    CONSTRAINT [PK__menu_usu__3213E83F19AE0C35] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[meta] (
    [id_meta] INT NOT NULL IDENTITY(1,1),
    [numero_meta] INT,
    [create_at] DATETIME CONSTRAINT [DF__meta__create_at__4301EA8F] DEFAULT CURRENT_TIMESTAMP,
    [estatus] INT CONSTRAINT [DF__meta__estatus__43F60EC8] DEFAULT 1,
    [id_campana] INT,
    CONSTRAINT [PK__meta__68A1E9B81AF5DC38] PRIMARY KEY CLUSTERED ([id_meta])
);

-- CreateTable
CREATE TABLE [dbo].[modulos] (
    [id_modulo] INT NOT NULL IDENTITY(1,1),
    [nombre_modulo] NVARCHAR(255),
    [activo] INT CONSTRAINT [DF__modulos__activo__44952D46] DEFAULT 1,
    [icono_web] NVARCHAR(100),
    [icono_app_movil] NVARCHAR(100),
    [url_app_movil] NVARCHAR(100),
    [default_active] INT CONSTRAINT [DF__modulos__default__4589517F] DEFAULT 0,
    [orden] INT,
    [in_app_movil] INT,
    CONSTRAINT [PK__modulos__B2584DFCD6E689D6] PRIMARY KEY CLUSTERED ([id_modulo])
);

-- CreateTable
CREATE TABLE [dbo].[oficina_enlace] (
    [id_oficina_enlace] INT NOT NULL IDENTITY(1,1),
    [nombres] NVARCHAR(100),
    [apellido_paterno] NVARCHAR(100),
    [apellido_materno] NVARCHAR(100),
    [calle] NVARCHAR(100),
    [num_ext] NVARCHAR(100),
    [num_int] NVARCHAR(100),
    [colonia] NVARCHAR(100),
    [codigo_postal] NVARCHAR(100),
    [telefono_personal] NVARCHAR(20),
    [correo] NVARCHAR(100),
    [edad] INT,
    [id_asunto] INT,
    [id_atendera] INT,
    [cita] DATE,
    [hora_cita] INT,
    [minuto_cita] INT,
    [url_foto_persona] NVARCHAR(255),
    [url_foto_ine_frente] NVARCHAR(255),
    [url_foto_ine_trasera] NVARCHAR(255),
    [comentarios] NVARCHAR(255),
    [id_campana] INT,
    [estatus_cita] INT,
    CONSTRAINT [PK__apoyo__D470E9808F1DCDA9] PRIMARY KEY CLUSTERED ([id_oficina_enlace])
);

-- CreateTable
CREATE TABLE [dbo].[procesos] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nombre] NVARCHAR(50),
    [icono] NVARCHAR(100),
    [activo] INT CONSTRAINT [DF_procesos_activo] DEFAULT 1,
    [icono_app_movil] NVARCHAR(100),
    CONSTRAINT [PK_procesos] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[procesos_modulos] (
    [id] INT NOT NULL IDENTITY(1,1),
    [id_proceso] INT,
    [id_modulo] INT,
    CONSTRAINT [PK__procesos__3213E83FA6820FBE] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[recorrido_gestor] (
    [id_recorrido_gestor] INT NOT NULL IDENTITY(1,1),
    [id_usuario] INT,
    [latitud] DECIMAL(19,6),
    [longitud] DECIMAL(19,16),
    [fecha] DATETIME,
    CONSTRAINT [PK__recorrid__5E4DB639F03A7BA9] PRIMARY KEY CLUSTERED ([id_recorrido_gestor])
);

-- CreateTable
CREATE TABLE [dbo].[register_whatsapp_send] (
    [id] NVARCHAR(255) NOT NULL,
    [number] VARCHAR(100),
    [message_status] NVARCHAR(100),
    [id_campana] INT,
    [id_template] INT,
    [fecha] DATETIME,
    CONSTRAINT [PK_id_register_whatsapp] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[registro_asistencia] (
    [id_registro_asistencia] INT NOT NULL IDENTITY(1,1),
    [id_usuario] INT,
    [id_campana] INT,
    [hora_entrada] DATETIME,
    [latitud_entrada] DECIMAL(18,6) CONSTRAINT [DF__registro___latit__4FD1D5C8] DEFAULT 0,
    [longitud_entrada] DECIMAL(18,6) CONSTRAINT [DF__registro___longi__50C5FA01] DEFAULT 0,
    [punto_entrada] geometry,
    [id_estatus_entrada] INT,
    [id_estatus_punto_entrada] INT,
    [hora_salida] DATETIME,
    [latitud_salida] DECIMAL(18,6) CONSTRAINT [DF__registro___latit__51BA1E3A] DEFAULT 0,
    [longitud_salida] DECIMAL(18,6) CONSTRAINT [DF__registro___longi__52AE4273] DEFAULT 0,
    [punto_salida] geometry,
    [id_estatus_salida] INT,
    [id_estatus_punto_salida] INT,
    [fecha_captura] DATETIME,
    [url_foto] NVARCHAR(max),
    [url_foto_salida] NVARCHAR(max),
    CONSTRAINT [PK__registro__1A52A5BE33DC7801] PRIMARY KEY CLUSTERED ([id_registro_asistencia])
);

-- CreateTable
CREATE TABLE [dbo].[registro_contribuyente] (
    [id_registro] INT NOT NULL IDENTITY(1,1),
    [id_contribuyente] NVARCHAR(100),
    [observaciones] NVARCHAR(255),
    [numero_ninos] INT,
    [id_proceso] INT,
    [fecha_registro] DATETIME,
    [id_usuario] INT,
    [id_campana] INT,
    [id_zona] INT,
    CONSTRAINT [PK_id_registro] PRIMARY KEY CLUSTERED ([id_registro])
);

-- CreateTable
CREATE TABLE [dbo].[registro_push_notifications] (
    [id_registro_push] INT NOT NULL IDENTITY(1,1),
    [id_push_notification] NVARCHAR(100),
    [id_usuario] INT,
    [id_user_push] NVARCHAR(255),
    [titulo_push] NVARCHAR(255),
    [mensaje] NVARCHAR(max),
    [leido] INT CONSTRAINT [DF__registro___leido__58671BC9] DEFAULT 0,
    [url_img] NVARCHAR(255),
    [categoria] NVARCHAR(100),
    [tipo] NVARCHAR(100),
    [fecha] DATETIME,
    [activo] INT,
    [usuario_creo] INT,
    CONSTRAINT [PK_id_push] PRIMARY KEY CLUSTERED ([id_registro_push])
);

-- CreateTable
CREATE TABLE [dbo].[registro_seguimiento_gestion] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nombres] NVARCHAR(100),
    [apellido_paterno] NVARCHAR(100),
    [apellido_materno] NVARCHAR(100),
    [numero_celular] NVARCHAR(100),
    [correo] NVARCHAR(100),
    [observaciones] NVARCHAR(255),
    [id_campana] INT,
    [id_usuario] INT,
    [latitud] DECIMAL(19,6),
    [longitud] DECIMAL(19,6),
    [tipo] NVARCHAR(100),
    [fecha_sincronizacion] DATETIME,
    [fecha] DATETIME,
    [id_seguimiento] NVARCHAR(100) NOT NULL,
    CONSTRAINT [PK__registro__127E9A1A2947E65E] PRIMARY KEY CLUSTERED ([id_seguimiento])
);

-- CreateTable
CREATE TABLE [dbo].[servicios_mapa] (
    [id_servicio_mapa] INT NOT NULL IDENTITY(1,1),
    [nombre] NVARCHAR(100),
    [icono] NVARCHAR(100),
    [default_active] INT CONSTRAINT [DF__servicios__defau__7226EDCC] DEFAULT 0,
    [orden] INT,
    [activo] INT CONSTRAINT [DF__servicios__activ__731B1205] DEFAULT 1,
    CONSTRAINT [PK_id_servicio_mapa] PRIMARY KEY CLUSTERED ([id_servicio_mapa])
);

-- CreateTable
CREATE TABLE [dbo].[submenu] (
    [id_submenu] INT NOT NULL IDENTITY(1,1),
    [id_menu_parent] INT,
    [name_submenu] NVARCHAR(255),
    [icon] NVARCHAR(100),
    [route] NVARCHAR(100),
    [activo] INT CONSTRAINT [DF__submenu__activo__3296789C] DEFAULT 1,
    CONSTRAINT [PK__submenu__A41C30182BD72A5E] PRIMARY KEY CLUSTERED ([id_submenu])
);

-- CreateTable
CREATE TABLE [dbo].[submenu_rol] (
    [id] INT NOT NULL IDENTITY(1,1),
    [id_rol] INT,
    [id_submenu] INT,
    [activo] INT CONSTRAINT [DF__submenu_r__activ__3D14070F] DEFAULT 1,
    CONSTRAINT [PK__submenu___3213E83F7375E5C6] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[submenu_usuario] (
    [id] INT NOT NULL IDENTITY(1,1),
    [id_usuario] INT,
    [id_submenu] INT,
    CONSTRAINT [PK__submenu___3213E83F76732385] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[user_session_web] (
    [id_session] INT NOT NULL IDENTITY(1,1),
    [id_usuario] INT,
    [fecha_session] DATETIME,
    CONSTRAINT [PK__user_ses__A9E494D0D4C19674] PRIMARY KEY CLUSTERED ([id_session])
);

-- CreateTable
CREATE TABLE [dbo].[usuario] (
    [id] INT NOT NULL IDENTITY(1,1),
    [usuario] NVARCHAR(80),
    [password] NVARCHAR(20),
    [correo] NVARCHAR(40),
    [nombre] NVARCHAR(90),
    [url_foto] NVARCHAR(255),
    [apellido_paterno] NVARCHAR(100),
    [apellido_materno] NVARCHAR(100),
    [sexo] NVARCHAR(20),
    [activo] INT,
    [telefono_personal] NVARCHAR(20),
    [id_user_push] NVARCHAR(100),
    [access_app_web] INT,
    [access_app_movil] INT,
    CONSTRAINT [PK__usuario__3213E83FA713B1A3] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[usuario_campana_procesos] (
    [id_usuario_campana_procesos] INT NOT NULL IDENTITY(1,1),
    [id_usuario] INT,
    [id_campana] INT,
    [id_proceso] INT,
    [id_modulo] INT,
    CONSTRAINT [PK_ucp] PRIMARY KEY CLUSTERED ([id_usuario_campana_procesos])
);

-- CreateTable
CREATE TABLE [dbo].[usuario_layer_mapa] (
    [id] INT NOT NULL IDENTITY(1,1),
    [id_usuario] INT,
    [id_layer] INT,
    [id_estilo] INT,
    [id_servicio_mapa] INT,
    [url_geoserver] NVARCHAR(255),
    CONSTRAINT [PK__usuario___3213E83F75352AAA] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[usuario_rol] (
    [id_usuario_rol] INT NOT NULL IDENTITY(1,1),
    [id_usuario] INT,
    [id_rol] INT,
    CONSTRAINT [PK__usuario_rol___321283FFBBCC426] PRIMARY KEY CLUSTERED ([id_usuario_rol])
);

-- CreateTable
CREATE TABLE [dbo].[usuario_servicio_mapa] (
    [id] INT NOT NULL IDENTITY(1,1),
    [id_usuario] INT,
    [id_servicio] INT,
    CONSTRAINT [PK__usuario___3213E83FFBBCC426] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[whatsapp_messages] (
    [id] INT NOT NULL IDENTITY(1,1),
    [id_conversation] NVARCHAR(255),
    [message] NVARCHAR(max),
    [profile] NVARCHAR(255),
    [numberUser] NVARCHAR(20),
    [fecha] DATETIME,
    [activo] INT,
    [id_campana] INT,
    [id_template] INT,
    CONSTRAINT [PK__whatsapp__3213E83F05838BE1] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[zona] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nombre_zona] NVARCHAR(100),
    [create_at] DATETIME CONSTRAINT [DF__zona__create_at__1E8F7FEF] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [PK__zona__3213E83FDCB6B958] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[asignacion_campana] ADD CONSTRAINT [fk_id_campana_asignacion] FOREIGN KEY ([id_campana]) REFERENCES [dbo].[campanas]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[asignacion_campana] ADD CONSTRAINT [fk_id_modulo_asignacion] FOREIGN KEY ([id_modulo]) REFERENCES [dbo].[modulos]([id_modulo]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[asignacion_campana] ADD CONSTRAINT [fk_id_proceso_asignacion] FOREIGN KEY ([id_proceso]) REFERENCES [dbo].[procesos]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[asignacion_campana] ADD CONSTRAINT [fk_id_usuario_asignacion] FOREIGN KEY ([id_usuario]) REFERENCES [dbo].[usuario]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[atendera_apoyo] ADD CONSTRAINT [FK_atendera_apoyo_campana] FOREIGN KEY ([id_campana]) REFERENCES [dbo].[campanas]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[atendera_apoyo] ADD CONSTRAINT [FK_atendera_apoyo_usuario] FOREIGN KEY ([id_usuario]) REFERENCES [dbo].[usuario]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[campana_proceso] ADD CONSTRAINT [FK_campana_proceso_campana] FOREIGN KEY ([id_campana]) REFERENCES [dbo].[campanas]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[campana_proceso] ADD CONSTRAINT [FK_campana_proceso_proceso] FOREIGN KEY ([id_proceso]) REFERENCES [dbo].[procesos]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[campana_servicio_layer_estilo] ADD CONSTRAINT [FK_campana_servicio_layer_estilo_campana] FOREIGN KEY ([id_campana]) REFERENCES [dbo].[campanas]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[campana_servicio_layer_estilo] ADD CONSTRAINT [FK_campana_servicio_layer_estilo_estilo] FOREIGN KEY ([id_estilo]) REFERENCES [dbo].[estilo_layer]([id_estilo]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[campana_servicio_layer_estilo] ADD CONSTRAINT [FK_campana_servicio_layer_estilo_layer] FOREIGN KEY ([id_layer]) REFERENCES [dbo].[layer]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[campana_servicio_layer_estilo] ADD CONSTRAINT [FK_campana_servicio_layer_estilo_ser_mapa] FOREIGN KEY ([id_servicio_mapa]) REFERENCES [dbo].[servicios_mapa]([id_servicio_mapa]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[campanas] ADD CONSTRAINT [FK_campana_horario] FOREIGN KEY ([id_horario]) REFERENCES [dbo].[horario]([id_horario]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[campanas_zonas] ADD CONSTRAINT [FK_campana_zonas_campana] FOREIGN KEY ([id_campana]) REFERENCES [dbo].[campanas]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[campanas_zonas] ADD CONSTRAINT [FK_campana_zonas_zona] FOREIGN KEY ([id_zona]) REFERENCES [dbo].[zona]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[cat_templates_whatsapp] ADD CONSTRAINT [FK_cat_templates_whatsapp_campana] FOREIGN KEY ([id_campana]) REFERENCES [dbo].[campanas]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[cat_templates_whatsapp] ADD CONSTRAINT [FK_cat_templates_whatsapp_tipo_temp] FOREIGN KEY ([id_tipo_template]) REFERENCES [dbo].[cat_tipo_template]([id_tipo_template]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[cita_finalizada] ADD CONSTRAINT [FK_cita_finalizada_oficina_enlace] FOREIGN KEY ([id_oficina_enlace]) REFERENCES [dbo].[oficina_enlace]([id_oficina_enlace]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[contribuyente] ADD CONSTRAINT [FK_contribuyente_campana] FOREIGN KEY ([id_campana]) REFERENCES [dbo].[campanas]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[encargados_zona] ADD CONSTRAINT [FK_encargados_zona_campana] FOREIGN KEY ([id_campana]) REFERENCES [dbo].[campanas]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[encargados_zona] ADD CONSTRAINT [FK_encargados_zona_usuario] FOREIGN KEY ([id_usuario]) REFERENCES [dbo].[usuario]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[encargados_zona] ADD CONSTRAINT [FK_encargados_zona_zona] FOREIGN KEY ([id_zona]) REFERENCES [dbo].[zona]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[foto_registro_contribuyente] ADD CONSTRAINT [FK_foto_contribuyente_campana] FOREIGN KEY ([id_campana]) REFERENCES [dbo].[campanas]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[foto_registro_contribuyente] ADD CONSTRAINT [FK_foto_contribuyente_contribuyente] FOREIGN KEY ([id_contribuyente]) REFERENCES [dbo].[contribuyente]([id_contribuyente]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[foto_registro_contribuyente] ADD CONSTRAINT [FK_foto_contribuyente_proceso] FOREIGN KEY ([id_proceso]) REFERENCES [dbo].[procesos]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[foto_registro_contribuyente] ADD CONSTRAINT [FK_foto_contribuyente_usuario] FOREIGN KEY ([id_usuario]) REFERENCES [dbo].[usuario]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[foto_seguimiento_gestion] ADD CONSTRAINT [FK_seg_gest_reg_seg] FOREIGN KEY ([id_seguimiento]) REFERENCES [dbo].[registro_seguimiento_gestion]([id_seguimiento]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[foto_seguimiento_gestion] ADD CONSTRAINT [FK_seguimiento_gestion_campana] FOREIGN KEY ([id_campana]) REFERENCES [dbo].[campanas]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[foto_seguimiento_gestion] ADD CONSTRAINT [FK_seguimiento_gestion_usuario] FOREIGN KEY ([id_usuario]) REFERENCES [dbo].[usuario]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[layer_filtro] ADD CONSTRAINT [FK_layer_filtro_campana] FOREIGN KEY ([id_campana]) REFERENCES [dbo].[campanas]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[layer_filtro] ADD CONSTRAINT [FK_layer_filtro_filtro] FOREIGN KEY ([id_filtro]) REFERENCES [dbo].[filtro]([id_filtro]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[layer_filtro] ADD CONSTRAINT [FK_layer_filtro_layer] FOREIGN KEY ([id_layer]) REFERENCES [dbo].[layer]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[menu_rol] ADD CONSTRAINT [FK_menu_rol_menu] FOREIGN KEY ([id_menu]) REFERENCES [dbo].[menu]([id_menu]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[menu_rol] ADD CONSTRAINT [FK_menu_rol_rol] FOREIGN KEY ([id_rol]) REFERENCES [dbo].[cat_rol]([id_rol]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[menu_usuario] ADD CONSTRAINT [fk_menu_usuario] FOREIGN KEY ([id_menu]) REFERENCES [dbo].[menu]([id_menu]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[menu_usuario] ADD CONSTRAINT [fk_usuario_menu] FOREIGN KEY ([id_usuario]) REFERENCES [dbo].[usuario]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[meta] ADD CONSTRAINT [FK_meta_campana] FOREIGN KEY ([id_campana]) REFERENCES [dbo].[campanas]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[oficina_enlace] ADD CONSTRAINT [FK_oficina_enlace_campana] FOREIGN KEY ([id_campana]) REFERENCES [dbo].[campanas]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[procesos_modulos] ADD CONSTRAINT [FK_procesos_modulos_modulos] FOREIGN KEY ([id_modulo]) REFERENCES [dbo].[modulos]([id_modulo]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[procesos_modulos] ADD CONSTRAINT [FK_procesos_modulos_proceso] FOREIGN KEY ([id_proceso]) REFERENCES [dbo].[procesos]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[recorrido_gestor] ADD CONSTRAINT [FK_recorrido_gestor_usuario] FOREIGN KEY ([id_usuario]) REFERENCES [dbo].[usuario]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[register_whatsapp_send] ADD CONSTRAINT [FK_whatsapp_campana] FOREIGN KEY ([id_campana]) REFERENCES [dbo].[campanas]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[register_whatsapp_send] ADD CONSTRAINT [FK_whatsapp_template] FOREIGN KEY ([id_template]) REFERENCES [dbo].[cat_templates_whatsapp]([id_template]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[registro_asistencia] ADD CONSTRAINT [FK_asistencia_campana] FOREIGN KEY ([id_campana]) REFERENCES [dbo].[campanas]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[registro_asistencia] ADD CONSTRAINT [FK_asistencia_estatus_asis_salida] FOREIGN KEY ([id_estatus_salida]) REFERENCES [dbo].[cat_estatus_asistencia]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[registro_asistencia] ADD CONSTRAINT [FK_asistencia_estatus_asistencia] FOREIGN KEY ([id_estatus_entrada]) REFERENCES [dbo].[cat_estatus_asistencia]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[registro_asistencia] ADD CONSTRAINT [FK_asistencia_estatus_punto_entrada] FOREIGN KEY ([id_estatus_punto_entrada]) REFERENCES [dbo].[cat_estatus_punto_asistencia]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[registro_asistencia] ADD CONSTRAINT [FK_asistencia_estatus_punto_salida] FOREIGN KEY ([id_estatus_punto_salida]) REFERENCES [dbo].[cat_estatus_punto_asistencia]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[registro_asistencia] ADD CONSTRAINT [FK_asistencia_usuario] FOREIGN KEY ([id_usuario]) REFERENCES [dbo].[usuario]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[registro_contribuyente] ADD CONSTRAINT [FK_reg_contr_campana] FOREIGN KEY ([id_campana]) REFERENCES [dbo].[campanas]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[registro_contribuyente] ADD CONSTRAINT [FK_reg_contr_contr] FOREIGN KEY ([id_contribuyente]) REFERENCES [dbo].[contribuyente]([id_contribuyente]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[registro_contribuyente] ADD CONSTRAINT [FK_reg_contr_proceso] FOREIGN KEY ([id_proceso]) REFERENCES [dbo].[procesos]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[registro_contribuyente] ADD CONSTRAINT [FK_reg_contr_usuario] FOREIGN KEY ([id_usuario]) REFERENCES [dbo].[usuario]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[registro_contribuyente] ADD CONSTRAINT [FK_reg_contr_zona] FOREIGN KEY ([id_zona]) REFERENCES [dbo].[zona]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[registro_push_notifications] ADD CONSTRAINT [FK_reg_push_usuario] FOREIGN KEY ([id_usuario]) REFERENCES [dbo].[usuario]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[registro_push_notifications] ADD CONSTRAINT [FK_reg_push_usuario_creo] FOREIGN KEY ([usuario_creo]) REFERENCES [dbo].[usuario]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[registro_seguimiento_gestion] ADD CONSTRAINT [FK_reg_seg_campana] FOREIGN KEY ([id_campana]) REFERENCES [dbo].[campanas]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[registro_seguimiento_gestion] ADD CONSTRAINT [FK_reg_seg_usuario] FOREIGN KEY ([id_usuario]) REFERENCES [dbo].[usuario]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[submenu] ADD CONSTRAINT [fk_menu] FOREIGN KEY ([id_menu_parent]) REFERENCES [dbo].[menu]([id_menu]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[submenu_rol] ADD CONSTRAINT [FK_submenu_rol_rol] FOREIGN KEY ([id_rol]) REFERENCES [dbo].[cat_rol]([id_rol]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[submenu_rol] ADD CONSTRAINT [FK_submenu_rol_submenu] FOREIGN KEY ([id_submenu]) REFERENCES [dbo].[submenu]([id_submenu]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[submenu_usuario] ADD CONSTRAINT [fk_submenu_usuario] FOREIGN KEY ([id_submenu]) REFERENCES [dbo].[submenu]([id_submenu]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[submenu_usuario] ADD CONSTRAINT [fk_usuario_submenu] FOREIGN KEY ([id_usuario]) REFERENCES [dbo].[usuario]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[user_session_web] ADD CONSTRAINT [FK_session_web_usuario] FOREIGN KEY ([id_usuario]) REFERENCES [dbo].[usuario]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[usuario_campana_procesos] ADD CONSTRAINT [FK_ucp_campana] FOREIGN KEY ([id_campana]) REFERENCES [dbo].[campanas]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[usuario_campana_procesos] ADD CONSTRAINT [FK_ucp_modulo] FOREIGN KEY ([id_modulo]) REFERENCES [dbo].[modulos]([id_modulo]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[usuario_campana_procesos] ADD CONSTRAINT [FK_ucp_proceso] FOREIGN KEY ([id_proceso]) REFERENCES [dbo].[procesos]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[usuario_campana_procesos] ADD CONSTRAINT [FK_ucp_usuario] FOREIGN KEY ([id_usuario]) REFERENCES [dbo].[usuario]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[usuario_layer_mapa] ADD CONSTRAINT [FK_ulm_estilo] FOREIGN KEY ([id_estilo]) REFERENCES [dbo].[estilo_layer]([id_estilo]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[usuario_layer_mapa] ADD CONSTRAINT [FK_ulm_layer] FOREIGN KEY ([id_layer]) REFERENCES [dbo].[layer]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[usuario_layer_mapa] ADD CONSTRAINT [FK_ulm_servicio] FOREIGN KEY ([id_servicio_mapa]) REFERENCES [dbo].[servicios_mapa]([id_servicio_mapa]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[usuario_layer_mapa] ADD CONSTRAINT [FK_ulm_usuario] FOREIGN KEY ([id_usuario]) REFERENCES [dbo].[usuario]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[usuario_rol] ADD CONSTRAINT [FK_ur_rol] FOREIGN KEY ([id_rol]) REFERENCES [dbo].[cat_rol]([id_rol]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[usuario_rol] ADD CONSTRAINT [FK_ur_usuario] FOREIGN KEY ([id_usuario]) REFERENCES [dbo].[usuario]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[usuario_servicio_mapa] ADD CONSTRAINT [FK_usm_servicio] FOREIGN KEY ([id_servicio]) REFERENCES [dbo].[servicios_mapa]([id_servicio_mapa]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[usuario_servicio_mapa] ADD CONSTRAINT [FK_usm_usuario] FOREIGN KEY ([id_usuario]) REFERENCES [dbo].[usuario]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[whatsapp_messages] ADD CONSTRAINT [FK_whats_mess_campana] FOREIGN KEY ([id_campana]) REFERENCES [dbo].[campanas]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[whatsapp_messages] ADD CONSTRAINT [FK_whats_mess_template] FOREIGN KEY ([id_template]) REFERENCES [dbo].[cat_templates_whatsapp]([id_template]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
