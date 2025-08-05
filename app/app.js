import express from 'express';
import privateRoutes  from './routes/private.js';
import publicRoutes  from './routes/public.js';

//  SETUP DO EXPRESS E OS MODULOS RESTANTES DO SERVIDOR
const app = new express;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use('/', publicRoutes);
app.use('/', privateRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
//  ROTAS DA APLICAÇÃO E SEUS COMPORTAMENTOS
/*
app.use('/', indexController.getRouter());
app.use('/', contatosController.getRouter());
app.use('/', cronogramasController.getRouter());
app.use('/', administracaoController.getRouter());
app.use('/', configuracoesController.getRouter());
*/

//  ATIVAÇÃO DO SERVIDOR

