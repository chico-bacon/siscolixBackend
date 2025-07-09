import express from 'express';
import { router } from './routes.js'

//  SETUP DO EXPRESS E OS MODULOS RESTANTES DO SERVIDOR
const app = new express;
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

//  ROTAS DA APLICAÇÃO E SEUS COMPORTAMENTOS
/*
app.use('/', indexController.getRouter());
app.use('/', contatosController.getRouter());
app.use('/', cronogramasController.getRouter());
app.use('/', administracaoController.getRouter());
app.use('/', configuracoesController.getRouter());
*/

//  ATIVAÇÃO DO SERVIDOR
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
