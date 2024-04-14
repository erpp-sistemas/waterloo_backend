/*
  Warnings:

  - Added the required column `completedAt` to the `todo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `todo` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[todo] ADD [completedAt] DATETIME NOT NULL,
[text] NVARCHAR(100) NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
