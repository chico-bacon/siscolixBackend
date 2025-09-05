/*
  Warnings:

  - You are about to drop the `Agenda` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Coleta` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Agenda";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Coleta";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Rota" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_bairro" INTEGER NOT NULL,
    "dias" TEXT NOT NULL,
    "turnos" TEXT NOT NULL,
    CONSTRAINT "Rota_id_bairro_fkey" FOREIGN KEY ("id_bairro") REFERENCES "Bairro" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "dataNascimento" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "nivel" TEXT NOT NULL DEFAULT 'USUARIO',
    "senha" TEXT NOT NULL,
    "situacao" TEXT NOT NULL DEFAULT 'ATIVO'
);
INSERT INTO "new_Usuario" ("cpf", "dataNascimento", "email", "id", "nivel", "nome", "senha", "telefone") SELECT "cpf", "dataNascimento", "email", "id", "nivel", "nome", "senha", "telefone" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
