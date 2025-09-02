/*
  Warnings:

  - You are about to drop the `Cronograma` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Nivel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `id_nivel` on the `Usuario` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Cronograma";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Nivel";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Coleta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_bairro" INTEGER NOT NULL,
    CONSTRAINT "Coleta_id_bairro_fkey" FOREIGN KEY ("id_bairro") REFERENCES "Bairro" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Agenda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_coleta" INTEGER NOT NULL,
    "dia" TEXT NOT NULL,
    "horario" DATETIME NOT NULL,
    CONSTRAINT "Agenda_id_coleta_fkey" FOREIGN KEY ("id_coleta") REFERENCES "Coleta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Chamado" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" TEXT NOT NULL DEFAULT 'PENDENTE',
    "usuario_id" TEXT NOT NULL,
    "tipoChamado" TEXT NOT NULL DEFAULT 'PODA',
    "bairro_id" INTEGER NOT NULL,
    "logradouro" TEXT NOT NULL,
    "ponto_referencia" TEXT
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
    "senha" TEXT NOT NULL
);
INSERT INTO "new_Usuario" ("cpf", "dataNascimento", "email", "id", "nome", "senha", "telefone") SELECT "cpf", "dataNascimento", "email", "id", "nome", "senha", "telefone" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
