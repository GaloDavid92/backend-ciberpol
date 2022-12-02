-- CreateTable
CREATE TABLE "Zona" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Zona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Provincia" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "idZona" INTEGER NOT NULL,

    CONSTRAINT "Provincia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Canton" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "idProvincia" INTEGER NOT NULL,

    CONSTRAINT "Canton_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Distrito" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "idCanton" INTEGER NOT NULL,

    CONSTRAINT "Distrito_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Provincia" ADD CONSTRAINT "Provincia_idZona_fkey" FOREIGN KEY ("idZona") REFERENCES "Zona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Canton" ADD CONSTRAINT "Canton_idProvincia_fkey" FOREIGN KEY ("idProvincia") REFERENCES "Provincia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Distrito" ADD CONSTRAINT "Distrito_idCanton_fkey" FOREIGN KEY ("idCanton") REFERENCES "Canton"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
