const express = require('express');

//  SETUP DO EXPRESS E OS MODULOS RESTANTES DO SERVIDOR
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const IndexController = require('./controllers/IndexController');
const ContatosController = require('./controllers/ContatosController');
const CronogramasController = require('./controllers/CronogramasController');
const AdministracaoController = require('./controllers/AdministracaoController');
const ConfiguracoesController = require('./controllers/ConfiguracoesController');
const ArtigosController = require('./controllers/ArtigosController');
const LoginController = require('./controllers/LoginController');
const CadastroCronogramasController = require('./controllers/CadastroCronogramasController');



const indexController = new IndexController();
const contatosController = new ContatosController();
const cronogramasController = new CronogramasController();
const administracaoController = new AdministracaoController();
const configuracoesController = new ConfiguracoesController();
const artigosController = new ArtigosController();
const loginController = new LoginController();
const cadastroCronogramasController = new CadastroCronogramasController();


//  ROTAS DA APLICAÇÃO E SEUS COMPORTAMENTOS
app.use('/', indexController.getRouter());
app.use('/', contatosController.getRouter());
app.use('/', cronogramasController.getRouter());
app.use('/', administracaoController.getRouter());
app.use('/', configuracoesController.getRouter());
app.use('/', artigosController.getRouter());
app.use('/', loginController.getRouter());
app.use('/', cadastroCronogramasController.getRouter());



//  ATIVAÇÃO DO SERVIDOR
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
