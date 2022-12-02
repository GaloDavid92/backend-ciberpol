/*
  Warnings:

  - You are about to drop the column `idArt444` on the `Delegacion` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[idDelegacion]` on the table `Art444` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idDelegacion` to the `Art444` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Delegacion" DROP CONSTRAINT "Delegacion_idArt444_fkey";

-- DropIndex
DROP INDEX "Delegacion_idArt444_key";

-- AlterTable
ALTER TABLE "Art444" ADD COLUMN     "idDelegacion" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Delegacion" DROP COLUMN "idArt444";

-- CreateIndex
CREATE UNIQUE INDEX "Art444_idDelegacion_key" ON "Art444"("idDelegacion");

-- AddForeignKey
ALTER TABLE "Art444" ADD CONSTRAINT "Art444_idDelegacion_fkey" FOREIGN KEY ("idDelegacion") REFERENCES "Delegacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
