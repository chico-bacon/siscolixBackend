import { Router } from "express";

import { BairroController } from "../controllers/BairroController.js";
import { ColetaController } from "../controllers/ColetaController.js";
import { AgendaController } from "../controllers/AgendaController.js";
import { ArtigoController } from "../controllers/ArtigoController.js"; 
import { UsuarioController } from "../controllers/UruariosController.js";
import { ChamadoController } from "../controllers/ChamadoController.js";
import { FluxoChamadoController } from "../controllers/FluxoChamadoController.js"; 

const router = new Router();

const bairroController = new BairroController();
const coletaController = new ColetaController();
const agendaController = new AgendaController();
const artigoController = new ArtigoController();
const usuarioController = new UsuarioController();
const chamadoController = new ChamadoController();
const fluxoChamadoController = new FluxoChamadoController();

//ROTAS PRIVADAS DE GERENCIAMENTO DE BAIRROS
router.post('/administracao/bairros', (req, res) => bairroController.inserir(req, res));
router.put('/administracao/bairros/:id', (req, res) => bairroController.alterar(req, res));
router.delete('/administracao/bairros/:id', (req, res) => bairroController.deletar(req, res));

//ROTAS PRIVADAS DE GERENCIAMENTO DE COLETAS
router.post('/administracao/coletas', (req, res) => coletaController.inserir(req, res));
router.put('/administracao/coletas/:id', (req, res) => scoletaController.alterar(req, res));
router.delete('/administracao/coletas/:id', (req, res) => coletaController.deletar(req, res));

//ROTAS PRIVADAS DE GERENCIAMENTO DE AGENDAS
router.post('/administracao/agendas', (req, res) => agendaController.inserir(req, res));
router.put('/administracao/agendas/:id', (req, res) => agendaController.alterar(req, res));
router.delete('/administracao/agendas/:id', (req, res) => agendaController.deletar(req, res));

//ROTAS PRIVADAS DE GERENCIAMENTO DE ARTIGOS
router.get('/administracao/artigos', (req, res) => artigoController.artigosPrivado(req, res));
router.post('/administracao/artigos', (req, res) => artigoController.inserir(req, res));
router.get('/administracao/artigos/:id', (req, res) => artigoController.buscarPorId(req, res));
router.put('/administracao/artigos/:id', (req, res) => artigoController.alterar(req, res));
router.delete('/administracao/artigos/:id', (req, res) => artigoController.deletar(req, res));

//ROTAS PRIVADAS DE GERENCIAMENTO DE USUARIOS
router.get('/administracao/usuarios/cadastro', (req, res) => usuarioController.cadastro(req, res));
router.get('/administracao/usuarios', (req, res) => usuarioController.listar(req, res));
router.get('/administracao/usuarios/:id', (req, res) => usuarioController.buscarPorId(req, res))
router.put('/administracao/usuarios/:id', (req, res) => usuarioController.alterar(req, res));
router.delete('/administracao/usuarios/:id', (req, res) => usuarioController.deletar(req, res));

router.post('/administracao/chamados', (req, res) => chamadoController.inserir(req, res));
router.get('/administracao/chamados', (req, res) => chamadoController.listar(req, res));
router.get('/administracao/chamados/:id', (req, res) => chamadoController.buscarPorId(req, res));
router.delete('/administracao/chamados/:id', (req, res) => chamadoController.deletar(req, res));


router.get('/administracao/fluxo-chamados', (req, res) => fluxoChamadoController.listar(req, res));
router.post('/administracao/fluxo-chamados', (req, res) => fluxoChamadoController.inserir(req, res));
router.get('/administracao/fluxo-chamados/:id', (req, res) => fluxoChamadoController.buscarPorId(req, res));
router.put('/administracao/fluxo-chamados/:id', (req, res) => fluxoChamadoController.alterar(req, res));
router.delete('/administracao/fluxo-chamados/:id', (req, res) => fluxoChamadoController.deletar(req, res));

export default router 