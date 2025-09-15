import { Router } from "express";

const router = new Router();

import { IndexController } from '../controllers/IndexController.js';
import { ContatosController } from '../controllers/ContatosController.js';
import { ColetaController } from "../controllers/ColetaController.js";
import { AgendaController } from "../controllers/AgendaController.js";
// import { CronogramaController } from '../controllers/CronogramaController.js';
import { AdministracaoController } from '../controllers/AdministracaoController.js';
import { ArtigoController } from "../controllers/ArtigoController.js";
import { UsuarioController } from "../controllers/UruariosController.js";
import { LoginController } from "../controllers/LoginController.js";
import { BairroController } from "../controllers/BairroController.js";
import { ChamadoController } from "../controllers/ChamadoController.js";
import { FluxoChamadoController } from "../controllers/FluxoChamadoController.js";

const indexController = new IndexController();
const contatosController = new ContatosController();
const coletaController = new ColetaController();
const agendaController = new AgendaController();
// import { AdministracaoController } from '../controllers/AdministracaoController.js';

//import { ConfiguracoesController } from './controllers/ConfiguracoesController.js';
//import { BairroController } from "../controllers/BairrosController.js";

//const indexController = new IndexController();
//const contatosController = new ContatosController();
// const cronogramaController = new CronogramaController();
const administracaoController = new AdministracaoController();
const artigoController = new ArtigoController();
const usuarioController = new UsuarioController();
const loginController = new LoginController();
const bairroController = new BairroController();
const chamadoController = new ChamadoController() ;
const fluxoChamadoController = new FluxoChamadoController();

router.get(['/', '/index'], (req, res) => indexController.index(req, res));
router.get('/contatos', (req, res) => contatosController.contatos(req, res))
router.get('/administracao', (req, res) => administracaoController.administracao(req, res));
// router.get('/administracaoCadastroCronogramas', (req, res) => administracaoController.administracao(req, res));
// router.get('/administracaoCadastroArtigos', (req, res) => administracaoController.administracao(req, res));


// router.get('/administracaoCadastroArtigos', (req, res) => administracaoController.administracaoCadastroArtigos(req, res));

// router.get('/cronogramas', (req, res) => cronogramaController.cronogramas(req, res));
// router.get('/cronogramas', (req, res) => cronogramaController.listar(req, res));
// router.get('/cronogramas/:id', (req, res) => cronogramaController.buscarPorId(req, res));

router.get('/bairros', (req, res) => bairroController.listar(req, res));
router.get('/bairros/:id', (req, res) => bairroController.buscarPorId(req, res));

router.get('/coletas', (req, res) => coletaController.listar(req, res));
router.get('/coletas/:id', (req, res) => coletaController.buscarPorId(req, res));

router.get('/agendas', (req, res) => agendaController.listar(req, res));
router.get('/agendas/:id', (req, res) => agendaController.buscarPorId(req, res));

router.get('/artigos', (req, res) => artigoController.artigosPublico(req, res));   
router.get('/artigos', (req, res) => artigoController.listar(req, res));
router.get('/artigos/:id', (req, res) => artigoController.buscarPorId(req, res));

router.post('/contribuinte/:id/chamados', (req, res) => chamadoController.inserir(req, res));
router.get('/contribuinte/:id/chamados', (req, res) => chamadoController.buscarPorIdUsuario(req, res));
router.get('/contribuinte/:id/chamados/:id_chamado', (req, res) => chamadoController.buscarPorId(req, res));
router.get('/contribuinte/:id/chamados/:id_chamado', (req, res) => fluxoChamadoController.buscarPorIdChamado(req, res));

router.get('/cadastro', (req, res) => usuarioController.cadastro(req, res));
router.post('/usuarios', (req, res) => usuarioController.inserir(req, res));
router.get('/login', (req, res) => loginController.login(req, res));
router.post('/login', (req, res) => usuarioController.login(req, res));

router.get('/usuarios/teste', (req, res) => usuarioController.teste(req, res));

//router.post('/bairros', (req, res, next) => bairroController.inserir(req, res, next));
//router.get('/bairros', (req, res, next) => bairroController.inserir(req, res, next));*/

export default router 