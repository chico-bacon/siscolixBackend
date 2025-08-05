import { Router } from "express";

const router = new Router();

import { IndexController } from '../controllers/IndexController.js';
import { ContatosController } from '../controllers/ContatosController.js';
import { CronogramasController } from '../controllers/CronogramasController.js';
import { AdministracaoController } from '../controllers/AdministracaoController.js';
import { ArtigoController } from "../controllers/ArtigoController.js";
//import { ConfiguracoesController } from './controllers/ConfiguracoesController.js';
//import { BairroController } from "../controllers/BairrosController.js";

const indexController = new IndexController();
const contatosController = new ContatosController();
const cronogramasController = new CronogramasController();
const administracaoController = new AdministracaoController();
const artigoController = new ArtigoController();
//const configuracoesController = new ConfiguracoesController();
//const bairroController = new BairroController()


router.get(['/', '/index'], (req, res) => indexController.index(req, res));
router.get('/contatos', (req, res) => contatosController.contatos(req, res))
router.get('/administracao', (req, res) => administracaoController.administracao(req, res));

router.post('/login', (req, res) => {});
router.post('/cadastro', (req, res) => {});

router.get('/cronogramas', (req, res) => cronogramasController.listar(req, res));
router.get('/cronogramas/:id', (req, res) => cronogramasController.buscarPorId(req, res));

router.get('/bairros', (req, res) => bairroController.listar(req, res));
router.get('/bairros/:id', (req, res) => bairroController.buscarPorId(req, res));

router.get('/artigos', (req, res) => artigoController.listar(req, res));
router.get('/artigos/:id', (req, res) => artigoController.buscarPorId(req, res));

//router.post('/bairros', (req, res, next) => bairroController.inserir(req, res, next));
//router.get('/bairros', (req, res, next) => bairroController.inserir(req, res, next));*/

export default router 