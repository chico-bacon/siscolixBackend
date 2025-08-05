/*
  Warnings:

  - Added the required column `turnos` to the `Cronograma` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "dataNascimento" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Gestor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "dataNascimento" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cronograma" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_bairro" INTEGER NOT NULL,
    "periodicidade" JSONB NOT NULL,
    "turnos" JSONB NOT NULL,
    CONSTRAINT "Cronograma_id_bairro_fkey" FOREIGN KEY ("id_bairro") REFERENCES "Bairro" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Cronograma" ("id", "id_bairro", "periodicidade") SELECT "id", "id_bairro", "periodicidade" FROM "Cronograma";
DROP TABLE "Cronograma";
ALTER TABLE "new_Cronograma" RENAME TO "Cronograma";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
