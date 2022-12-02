/*
  Warnings:

  - Added the required column `causasIncumplimiento` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `compareceSospechoso` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cumplimiento` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `detPosibResp` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `edadVictima` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaCumplimiento` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaDelegacion` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaInfraccion` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaRecAgente` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaRecepcionPJ` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idAgente` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idArt444` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idCondicion` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idDelito` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idGrado` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idModalidad` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idParentesco` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `informeODescargo` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombreDetenido` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombreFiscal` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombreVictima` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numOficioDescargo` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numOficioRecAgente` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numVersiones` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `observaciones` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `peticionFiscalia` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plazoOtorgado` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recLugarHechos` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sexoVictima` to the `Delegacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unidadFiscalia` to the `Delegacion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Delegacion" ADD COLUMN     "causasIncumplimiento" TEXT NOT NULL,
ADD COLUMN     "compareceSospechoso" BOOLEAN NOT NULL,
ADD COLUMN     "cumplimiento" TEXT NOT NULL,
ADD COLUMN     "detPosibResp" BOOLEAN NOT NULL,
ADD COLUMN     "edadVictima" INTEGER NOT NULL,
ADD COLUMN     "fechaCumplimiento" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "fechaDelegacion" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "fechaInfraccion" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "fechaRecAgente" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "fechaRecepcionPJ" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "idAgente" INTEGER NOT NULL,
ADD COLUMN     "idArt444" INTEGER NOT NULL,
ADD COLUMN     "idCondicion" INTEGER NOT NULL,
ADD COLUMN     "idDelito" INTEGER NOT NULL,
ADD COLUMN     "idGrado" INTEGER NOT NULL,
ADD COLUMN     "idModalidad" INTEGER NOT NULL,
ADD COLUMN     "idParentesco" INTEGER NOT NULL,
ADD COLUMN     "informeODescargo" TEXT NOT NULL,
ADD COLUMN     "nombreDetenido" TEXT NOT NULL,
ADD COLUMN     "nombreFiscal" TEXT NOT NULL,
ADD COLUMN     "nombreVictima" TEXT NOT NULL,
ADD COLUMN     "numOficioDescargo" TEXT NOT NULL,
ADD COLUMN     "numOficioRecAgente" TEXT NOT NULL,
ADD COLUMN     "numVersiones" INTEGER NOT NULL,
ADD COLUMN     "observaciones" TEXT NOT NULL,
ADD COLUMN     "peticionFiscalia" BOOLEAN NOT NULL,
ADD COLUMN     "plazoOtorgado" INTEGER NOT NULL,
ADD COLUMN     "recLugarHechos" INTEGER NOT NULL,
ADD COLUMN     "sexoVictima" TEXT NOT NULL,
ADD COLUMN     "unidadFiscalia" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Condicion" (
    "id" SERIAL NOT NULL,
    "condicion" TEXT NOT NULL,

    CONSTRAINT "Condicion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Art444" (
    "id" SERIAL NOT NULL,
    "no1" TEXT NOT NULL,
    "no2" TEXT NOT NULL,
    "no3" TEXT NOT NULL,
    "no4" TEXT NOT NULL,
    "no5" TEXT NOT NULL,
    "no6" TEXT NOT NULL,
    "no7" TEXT NOT NULL,
    "no8" TEXT NOT NULL,
    "no9" TEXT NOT NULL,
    "no10" TEXT NOT NULL,
    "no11" TEXT NOT NULL,
    "no12" TEXT NOT NULL,
    "no13" TEXT NOT NULL,
    "no14" TEXT NOT NULL,

    CONSTRAINT "Art444_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoPeticion" (
    "id" SERIAL NOT NULL,
    "idDelegacion" INTEGER NOT NULL,

    CONSTRAINT "TipoPeticion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetenidoProdInves" (
    "id" SERIAL NOT NULL,
    "idDelegacion" INTEGER NOT NULL,

    CONSTRAINT "DetenidoProdInves_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TipoPeticion" ADD CONSTRAINT "TipoPeticion_idDelegacion_fkey" FOREIGN KEY ("idDelegacion") REFERENCES "Delegacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetenidoProdInves" ADD CONSTRAINT "DetenidoProdInves_idDelegacion_fkey" FOREIGN KEY ("idDelegacion") REFERENCES "Delegacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delegacion" ADD CONSTRAINT "Delegacion_idAgente_fkey" FOREIGN KEY ("idAgente") REFERENCES "Agente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delegacion" ADD CONSTRAINT "Delegacion_idGrado_fkey" FOREIGN KEY ("idGrado") REFERENCES "Grado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delegacion" ADD CONSTRAINT "Delegacion_idDelito_fkey" FOREIGN KEY ("idDelito") REFERENCES "Delito"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delegacion" ADD CONSTRAINT "Delegacion_idModalidad_fkey" FOREIGN KEY ("idModalidad") REFERENCES "ModalidadDelito"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delegacion" ADD CONSTRAINT "Delegacion_idCondicion_fkey" FOREIGN KEY ("idCondicion") REFERENCES "Condicion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delegacion" ADD CONSTRAINT "Delegacion_idParentesco_fkey" FOREIGN KEY ("idParentesco") REFERENCES "Parentesco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delegacion" ADD CONSTRAINT "Delegacion_idArt444_fkey" FOREIGN KEY ("idArt444") REFERENCES "Art444"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
