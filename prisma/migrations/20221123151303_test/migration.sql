/*
  Warnings:

  - Added the required column `nombre` to the `DetenidoProdInves` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `TipoPeticion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DetenidoProdInves" ADD COLUMN     "nombre" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TipoPeticion" ADD COLUMN     "nombre" TEXT NOT NULL;
