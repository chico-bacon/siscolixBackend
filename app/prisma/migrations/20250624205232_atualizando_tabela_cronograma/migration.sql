/*
  Warnings:

  - You are about to drop the column `turno` on the `Cronograma` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cronograma" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_bairro" INTEGER NOT NULL,
    "periodicidade" JSONB NOT NULL,
    CONSTRAINT "Cronograma_id_bairro_fkey" FOREIGN KEY ("id_bairro") REFERENCES "Bairro" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Cronograma" ("id", "id_bairro", "periodicidade") SELECT "id", "id_bairro", "periodicidade" FROM "Cronograma";
DROP TABLE "Cronograma";
ALTER TABLE "new_Cronograma" RENAME TO "Cronograma";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
