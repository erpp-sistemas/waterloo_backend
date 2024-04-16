BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[usuario] ALTER COLUMN [password] NVARCHAR(255) NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
