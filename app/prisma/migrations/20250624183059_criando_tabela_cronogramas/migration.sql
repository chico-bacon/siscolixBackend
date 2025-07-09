-- CreateTable
CREATE TABLE "Cronograma" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bairro" TEXT NOT NULL,
    "periodicidade" JSONB NOT NULL,
    "turno" JSONB NOT NULL
);
