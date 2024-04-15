BEGIN TRY

BEGIN TRAN;

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
    CONSTRAINT [PK__usuario__3213E83FF649C689] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[rol] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nombre] NVARCHAR(100) NOT NULL,
    [activo] INT CONSTRAINT [DF__rol__activo__5165187F] DEFAULT 1,
    [icon] NVARCHAR(100),
    [color] NVARCHAR(7),
    CONSTRAINT [PK__rol__3213E83F2E06AB77] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[usuario_rol] (
    [id] INT NOT NULL IDENTITY(1,1),
    [id_usuario] INT,
    [id_rol] INT,
    CONSTRAINT [PK__usuario___3213E83F82D52C49] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[usuario_rol] ADD CONSTRAINT [fk_id_rol124] FOREIGN KEY ([id_rol]) REFERENCES [dbo].[rol]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[usuario_rol] ADD CONSTRAINT [fk_id_usuario124] FOREIGN KEY ([id_usuario]) REFERENCES [dbo].[usuario]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
