-- AlterTable
ALTER TABLE "Delegacion" ALTER COLUMN "causasIncumplimiento" DROP NOT NULL,
ALTER COLUMN "compareceSospechoso" DROP NOT NULL,
ALTER COLUMN "cumplimiento" DROP NOT NULL,
ALTER COLUMN "detPosibResp" DROP NOT NULL,
ALTER COLUMN "fechaCumplimiento" DROP NOT NULL,
ALTER COLUMN "informeODescargo" DROP NOT NULL,
ALTER COLUMN "numOficioDescargo" DROP NOT NULL,
ALTER COLUMN "numVersiones" DROP NOT NULL,
ALTER COLUMN "observaciones" DROP NOT NULL,
ALTER COLUMN "peticionFiscalia" DROP NOT NULL,
ALTER COLUMN "recLugarHechos" DROP NOT NULL;
