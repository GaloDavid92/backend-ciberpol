/*
  Warnings:

  - You are about to drop the column `idDelegacion` on the `Art444` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[idArt444]` on the table `Delegacion` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Art444" DROP CONSTRAINT "Art444_idDelegacion_fkey";

-- DropIndex
DROP INDEX "Art444_idDelegacion_key";

-- AlterTable
ALTER TABLE "Art444" DROP COLUMN "idDelegacion";

-- CreateIndex
CREATE UNIQUE INDEX "Delegacion_idArt444_key" ON "Delegacion"("idArt444");

-- AddForeignKey
ALTER TABLE "Delegacion" ADD CONSTRAINT "Delegacion_idArt444_fkey" FOREIGN KEY ("idArt444") REFERENCES "Art444"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
