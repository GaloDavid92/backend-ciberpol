/*
  Warnings:

  - A unique constraint covering the columns `[numInvestPrevia]` on the table `Delegacion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[numInstFiscal]` on the table `Delegacion` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Delegacion_numInvestPrevia_key" ON "Delegacion"("numInvestPrevia");

-- CreateIndex
CREATE UNIQUE INDEX "Delegacion_numInstFiscal_key" ON "Delegacion"("numInstFiscal");
