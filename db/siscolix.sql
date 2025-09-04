CREATE TABLE `artigos` (
  `id` int PRIMARY KEY,
  `ativo` int,
  `dataPublicacao` varchar(10),
  `manchete` varchar(150),
  `contudo` longtext
);

CREATE TABLE `bairros` (
  `id` int PRIMARY KEY,
  `nome` varchar(150),
  `ativo` int
);

CREATE TABLE `tipos_chamados` (
  `id` int PRIMARY KEY,
  `nome` varchar(150),
  `descricao` varchar(256),
  `ativo` int
);

CREATE TABLE `chamados` (
  `id` int PRIMARY KEY,
  `usuario_id` int,
  `dataAbertura` varchar(20),
  `tipoChamado_id` int(11),
  `logradouro` varchar(150),
  `numero` int(11),
  `bairro_id` int(11),
  `observacao` longtext,
  `foto1` longtext,
  `foto2` longtext
);

CREATE TABLE `chamados_movimentos` (
  `id` int PRIMARY KEY,
  `chamado_id` int,
  `tipo_movimento` varchar(150),
  `dataHora_movimento` varchar(20)
);

CREATE TABLE `cronogramas` (
  `id` int PRIMARY KEY,
  `descricao` varchar(80),
  `bairro_id` int(11),
  `periodicidade` varchar(150),
  `turnos` varchar(80),
  `ativo` int
);

CREATE TABLE `fotos_artigos` (
  `id` int PRIMARY KEY,
  `artigo_id` int(11),
  `foto` longtext
);

CREATE TABLE `usuarios` (
  `id` int PRIMARY KEY,
  `nome` varchar(150),
  `matricula` varchar(20),
  `cpf` int,
  `dataNascimento` varchar(10),
  `email` varchar(150),
  `senha` longtext,
  `perfi_id` int(11),
  `ativo` int(11)
);

ALTER TABLE `chamados` ADD FOREIGN KEY (`bairro_id`) REFERENCES `bairros` (`id`);

ALTER TABLE `fotos_artigos` ADD FOREIGN KEY (`artigo_id`) REFERENCES `artigos` (`id`);

ALTER TABLE `chamados` ADD FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

ALTER TABLE `chamados` ADD FOREIGN KEY (`tipoChamado_id`) REFERENCES `tipos_chamados` (`id`);

ALTER TABLE `chamados_movimentos` ADD FOREIGN KEY (`chamado_id`) REFERENCES `chamados` (`id`);
