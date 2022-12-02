/*
  Warnings:

  - You are about to drop the column `idGrado` on the `Agente` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Agente" DROP CONSTRAINT "Agente_idGrado_fkey";

-- AlterTable
ALTER TABLE "Agente" DROP COLUMN "idGrado";

-- CreateTable
CREATE TABLE "Delegacion" (
    "id" SERIAL NOT NULL,
    "mesIngreso" TEXT NOT NULL,
    "numInvestPrevia" TEXT NOT NULL,
    "numInstFiscal" TEXT NOT NULL,
    "idDistrito" INTEGER NOT NULL,

    CONSTRAINT "Delegacion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Delegacion" ADD CONSTRAINT "Delegacion_idDistrito_fkey" FOREIGN KEY ("idDistrito") REFERENCES "Distrito"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
