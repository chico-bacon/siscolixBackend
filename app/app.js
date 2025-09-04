import express from 'express';
import privateRoutes  from './routes/private.js';
import publicRoutes  from './routes/public.js';
import auth from './middlewares/autenticacao.js';

//  SETUP DO EXPRESS E OS MODULOS RESTANTES DO SERVIDOR
const app = new express;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use('/', publicRoutes);
// app.use('/', auth, privateRoutes);
app.use('/', privateRoutes);

/*
import { IndexController } from './controllers/IndexController.js';
import { ContatosController } from './controllers/ContatosController.js';
import { CronogramasController } from './controllers/CronogramasController.js';
import { AdministracaoController } from './controllers/AdministracaoController.js';
import { ConfiguracoesController } from './controllers/ConfiguracoesController.js';
import { ArtigoController } from './controllers/ArtigoController.js';
import { LoginController } from './controllers/LoginController.js';
import { CadastroCronogramasController } from './controllers/CadastroCronogramasController.js';

const indexController = new IndexController();
const contatosController = new ContatosController();
const cronogramasController = new CronogramasController();
const administracaoController = new AdministracaoController();
const configuracoesController = new ConfiguracoesController();
const artigoController = new ArtigoController();
const loginController = new LoginController();
const cadastroCronogramasController = new CadastroCronogramasController();
*/

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});