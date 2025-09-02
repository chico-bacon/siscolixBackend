-- CreateTable
CREATE TABLE "FluxoChamado" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "chamado_id" INTEGER NOT NULL,
    "admin_id" TEXT,
    "status" TEXT NOT NULL,
    "dataPrevista" TEXT,
    "dataRegistro" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Artigo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "situacao" TEXT NOT NULL DEFAULT 'ATIVO',
    "dataPublicacao" TEXT NOT NULL,
    "manchete" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL
);
INSERT INTO "new_Artigo" ("conteudo", "dataPublicacao", "id", "manchete") SELECT "conteudo", "dataPublicacao", "id", "manchete" FROM "Artigo";
DROP TABLE "Artigo";
ALTER TABLE "new_Artigo" RENAME TO "Artigo";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
