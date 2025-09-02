/*
  Warnings:

  - You are about to drop the column `status` on the `Chamado` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Agenda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_coleta" INTEGER NOT NULL,
    "dia" TEXT NOT NULL,
    "horario" TEXT NOT NULL,
    CONSTRAINT "Agenda_id_coleta_fkey" FOREIGN KEY ("id_coleta") REFERENCES "Coleta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Agenda" ("dia", "horario", "id", "id_coleta") SELECT "dia", "horario", "id", "id_coleta" FROM "Agenda";
DROP TABLE "Agenda";
ALTER TABLE "new_Agenda" RENAME TO "Agenda";
CREATE TABLE "new_Artigo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataPublicacao" TEXT NOT NULL,
    "manchete" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL
);
INSERT INTO "new_Artigo" ("conteudo", "dataPublicacao", "id", "manchete") SELECT "conteudo", "dataPublicacao", "id", "manchete" FROM "Artigo";
DROP TABLE "Artigo";
ALTER TABLE "new_Artigo" RENAME TO "Artigo";
CREATE TABLE "new_Chamado" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuario_id" TEXT NOT NULL,
    "tipoChamado" TEXT NOT NULL DEFAULT 'PODA',
    "bairro_id" INTEGER NOT NULL,
    "logradouro" TEXT NOT NULL,
    "ponto_referencia" TEXT
);
INSERT INTO "new_Chamado" ("bairro_id", "id", "logradouro", "ponto_referencia", "tipoChamado", "usuario_id") SELECT "bairro_id", "id", "logradouro", "ponto_referencia", "tipoChamado", "usuario_id" FROM "Chamado";
DROP TABLE "Chamado";
ALTER TABLE "new_Chamado" RENAME TO "Chamado";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
