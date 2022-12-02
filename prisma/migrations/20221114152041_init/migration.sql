-- CreateTable
CREATE TABLE "Grado" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Grado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "idGrado" INTEGER NOT NULL,

    CONSTRAINT "Agente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeccionDelito" (
    "id" SERIAL NOT NULL,
    "seccion" TEXT NOT NULL,

    CONSTRAINT "SeccionDelito_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Delito" (
    "id" SERIAL NOT NULL,
    "delito" TEXT NOT NULL,
    "idSeccion" INTEGER NOT NULL,

    CONSTRAINT "Delito_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModalidadDelito" (
    "id" SERIAL NOT NULL,
    "modalidad" TEXT NOT NULL,

    CONSTRAINT "ModalidadDelito_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parentesco" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Parentesco_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Agente" ADD CONSTRAINT "Agente_idGrado_fkey" FOREIGN KEY ("idGrado") REFERENCES "Grado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delito" ADD CONSTRAINT "Delito_idSeccion_fkey" FOREIGN KEY ("idSeccion") REFERENCES "SeccionDelito"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
