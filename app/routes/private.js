import { Router } from "express";

import { AgendaController } from "../controllers/AgendaController.js";
import { ArtigoController } from "../controllers/ArtigoController.js"; 
import { BairroController } from "../controllers/BairroController.js";
import { ChamadoController } from "../controllers/ChamadoController.js";
import { ColetaController } from "../controllers/ColetaController.js";
import { FluxoChamadoController } from "../controllers/FluxoChamadoController.js"; 
import { UsuarioController } from "../controllers/UruariosController.js";

const router = new Router();

const agendaController = new AgendaController();
const artigoController = new ArtigoController();
const bairroController = new BairroController();
const chamadoController = new ChamadoController();
const coletaController = new ColetaController();
const fluxoChamadoController = new FluxoChamadoController();
const usuarioController = new UsuarioController();

//ROTAS PRIVADAS DE GERENCIAMENTO DE AGENDAS
router.post('/administracao/agendas', (req, res) => agendaController.inserir(req, res));
router.put('/administracao/agendas/:id', (req, res) => agendaController.alterar(req, res));
router.delete('/administracao/agendas/:id', (req, res) => agendaController.deletar(req, res));

//ROTAS PRIVADAS DE GERENCIAMENTO DE ARTIGOS
router.get('/administracao/artigos/cadastro', (req, res) => artigoController.artigosPrivado(req, res));
router.get('/administracao/artigos', (req, res) => artigoController.listar(req, res));
router.post('/administracao/artigos', (req, res) => artigoController.inserir(req, res));
router.get('/administracao/artigos/:id', (req, res) => artigoController.buscarPorId(req, res));
router.put('/administracao/artigos/:id', (req, res) => artigoController.alterar(req, res));
router.delete('/administracao/artigos/:id', (req, res) => artigoController.deletar(req, res));

//ROTAS PRIVADAS DE GERENCIAMENTO DE BAIRROS
router.get('/administracao/bairros/cadastro', (req, res) => bairroController.cadastro(req, res));
router.post('/administracao/bairros', (req, res) => bairroController.inserir(req, res));
router.put('/administracao/bairros/:id', (req, res) => bairroController.alterar(req, res));
router.delete('/administracao/bairros/:id', (req, res) => bairroController.deletar(req, res));
// router.post('/administracao/bairros', (req, res) => bairroController.inserir(req, res));
// router.put('/administracao/bairros/:id', (req, res) => bairroController.alterar(req, res));
// router.delete('/administracao/bairros/:id', (req, res) => bairroController.deletar(req, res));

// CHAMADOS
router.post('/administracao/chamados', (req, res) => chamadoController.inserir(req, res));
router.get('/administracao/chamados', (req, res) => chamadoController.listar(req, res));
router.get('/administracao/chamados/:id', (req, res) => chamadoController.buscarPorId(req, res));
router.delete('/administracao/chamados/:id', (req, res) => chamadoController.deletar(req, res));

//ROTAS PRIVADAS DE GERENCIAMENTO DE COLETAS
router.get('/administracao/coletas/cadastro', (req, res) => coletaController.cadastro(req, res));
router.post('/administracao/coletas', (req, res) => coletaController.inserir(req, res));
router.put('/administracao/coletas/:id', (req, res) => coletaController.alterar(req, res));
router.delete('/administracao/coletas/:id', (req, res) => coletaController.deletar(req, res));

// FLUXO DE CHAMADOS
router.get('/administracao/fluxo-chamados', (req, res) => fluxoChamadoController.listar(req, res));
router.post('/administracao/fluxo-chamados', (req, res) => fluxoChamadoController.inserir(req, res));
router.get('/administracao/fluxo-chamados/:id', (req, res) => fluxoChamadoController.buscarPorId(req, res));
router.put('/administracao/fluxo-chamados/:id', (req, res) => fluxoChamadoController.alterar(req, res));
router.delete('/administracao/fluxo-chamados/:id', (req, res) => fluxoChamadoController.deletar(req, res));

// router.get('/administracao/cronogramas/cadastro', (req, res) => cronogramaController.cadastro(req, res));
// router.post('/administracao/cronogramas', (req, res) => cronogramaController.inserir(req, res));
// router.put('/administracao/cronogramas/:id', (req, res) => cronogramaController.alterar(req, res));
// router.delete('/administracao/cronogramas/:id', (req, res) => cronogramaController.deletar(req, res));

router.get('/administracao/niveis/Cadastro', (req, res) => nivelController.cadastro(req, res));
router.get('/administracao/niveis', (req, res) => nivelController.listar(req, res));
router.post('/administracao/niveis', (req, res) => nivelController.inserir(req, res));
router.get('/administracao/niveis/:id', (req, res) => nivelController.buscarPorId(req, res));
router.put('/administracao/niveis/:id', (req, res) => nivelController.alterar(req, res));
router.delete('/administracao/niveis/:id', (req, res) => nivelController.deletar(req, res));

//USUARIOS
router.get('/administracao/usuarios/cadastro', (req, res) => usuarioController.cadastro(req, res));
router.get('/administracao/usuarios', (req, res) => usuarioController.listar(req, res));
router.get('/administracao/usuarios/:id', (req, res) => usuarioController.buscarPorId(req, res));
router.put('/administracao/usuarios/:id', (req, res) => usuarioController.alterar(req, res));
router.delete('/administracao/usuarios/:id', (req, res) => usuarioController.deletar(req, res));

export default router 