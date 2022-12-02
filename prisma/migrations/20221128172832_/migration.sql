/*
  Warnings:

  - A unique constraint covering the columns `[idUsuario]` on the table `Agente` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idUsuario` to the `Agente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Agente" ADD COLUMN     "idUsuario" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "correo" TEXT NOT NULL,
    "clave" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Agente_idUsuario_key" ON "Agente"("idUsuario");

-- AddForeignKey
ALTER TABLE "Agente" ADD CONSTRAINT "Agente_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
