/*
  Warnings:

  - You are about to drop the column `bairro` on the `Cronograma` table. All the data in the column will be lost.
  - Added the required column `id_bairro` to the `Cronograma` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Bairro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cronograma" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_bairro" INTEGER NOT NULL,
    "periodicidade" JSONB NOT NULL,
    "turno" JSONB NOT NULL,
    CONSTRAINT "Cronograma_id_bairro_fkey" FOREIGN KEY ("id_bairro") REFERENCES "Bairro" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Cronograma" ("id", "periodicidade", "turno") SELECT "id", "periodicidade", "turno" FROM "Cronograma";
DROP TABLE "Cronograma";
ALTER TABLE "new_Cronograma" RENAME TO "Cronograma";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
