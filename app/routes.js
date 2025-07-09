import { Router } from "express";

const router = new Router();

import { IndexController } from './controllers/IndexController.js';
import { ContatosController } from './controllers/ContatosController.js';
import { CronogramasController } from './controllers/CronogramasController.js';
import { AdministracaoController } from './controllers/AdministracaoController.js';
//import { ConfiguracoesController } from './controllers/ConfiguracoesController.js';
import { BairroController } from "./controllers/BairrosController.js";

const indexController = new IndexController();
const contatosController = new ContatosController();
const cronogramasController = new CronogramasController();
const administracaoController = new AdministracaoController();
//const configuracoesController = new ConfiguracoesController();
const bairroController = new BairroController()

router.get(['/', '/index'], (req, res, next) => indexController.index(req, res, next));

router.get('/cronogramas', (req, res, next) => cronogramasController.cronogramas(req, res, next));
router.post('/cronogramas', (req, res, next) => cronogramasController.inserir(req, res, next));
router.delete('/cronogramas/:id', (req, res, next) => cronogramasController.deletar(req, res, next));

router.get('/contatos', (req, res, next) => contatosController.contatos(req, res, next))

router.get('/administracao', (req, res, next) => administracaoController.administracao(req, res, next));

router.post('/bairros', (req, res, next) => bairroController.inserir(req, res, next));
//router.get('/bairros', (req, res, next) => bairroController.inserir(req, res, next));



export { router }