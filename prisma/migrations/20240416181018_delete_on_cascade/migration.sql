BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[usuario_rol] DROP CONSTRAINT [fk_id_rol124];

-- DropForeignKey
ALTER TABLE [dbo].[usuario_rol] DROP CONSTRAINT [fk_id_usuario124];

-- AddForeignKey
ALTER TABLE [dbo].[usuario_rol] ADD CONSTRAINT [fk_id_rol124] FOREIGN KEY ([id_rol]) REFERENCES [dbo].[rol]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[usuario_rol] ADD CONSTRAINT [fk_id_usuario124] FOREIGN KEY ([id_usuario]) REFERENCES [dbo].[usuario]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
