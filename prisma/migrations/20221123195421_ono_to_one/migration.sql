/*
  Warnings:

  - A unique constraint covering the columns `[idDelegacion]` on the table `Art444` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idDelegacion` to the `Art444` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Delegacion" DROP CONSTRAINT "Delegacion_idArt444_fkey";

-- AlterTable
ALTER TABLE "Art444" ADD COLUMN     "idDelegacion" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Art444_idDelegacion_key" ON "Art444"("idDelegacion");

-- AddForeignKey
ALTER TABLE "Art444" ADD CONSTRAINT "Art444_idDelegacion_fkey" FOREIGN KEY ("idDelegacion") REFERENCES "Delegacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
