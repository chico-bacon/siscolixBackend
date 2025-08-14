import { Router } from "express";

import { BairroController } from "../controllers/BairroController.js";
import { CronogramasController } from "../controllers/CronogramasController.js";
import { ArtigoController } from "../controllers/ArtigoController.js"; 
import { UsuarioController } from "../controllers/UruariosController.js";
import { NivelController } from "../controllers/NivelController.js";

const router = new Router();

const bairroController = new BairroController();
const cronogramaController = new CronogramasController();
const artigoController = new ArtigoController();
const usuarioController = new UsuarioController();
const nivelController = new NivelController();

router.post('/administracao/bairros', (req, res) => bairroController.inserir(req, res));
router.put('/administracao/bairros/:id', (req, res) => bairroController.alterar(req, res));
router.delete('/administracao/bairros/:id', (req, res) => bairroController.deletar(req, res));

//router.post('/cronogramas', (req, res) => cronogramasController.inserir(req, res));
router.post('/administracao/cronogramas', (req, res) => cronogramaController.inserir(req, res));
router.put('/administracao/cronogramas/:id', (req, res) => cronogramaController.alterar(req, res));
router.delete('/administracao/cronogramas/:id', (req, res) => cronogramaController.deletar(req, res));

router.get('/administracao/artigos', (req, res) => artigoController.artigosPrivado(req, res));
router.post('/administracao/artigos', (req, res) => artigoController.inserir(req, res));
router.get('/administracao/artigos/:id', (req, res) => artigoController.buscarPorId(req, res));
router.put('/administracao/artigos/:id', (req, res) => artigoController.alterar(req, res));
router.delete('/administracao/artigos/:id', (req, res) => artigoController.deletar(req, res));

router.get('/administracao/usuarios/cadastro', (req, res) => usuarioController.cadastro(req, res));
router.get('/administracao/usuarios', (req, res) => usuarioController.listar(req, res));
router.get('/administracao/usuarios/:id', (req, res) => usuarioController.buscarPorId(req, res))
router.put('/administracao/usuarios', (req, res) => usuarioController.alterar(req, res));
router.delete('/administracao/usuarios/:id', (req, res) => usuarioController.alterar(req, res));

router.get('/administracao/niveis', (req, res) => nivelController.listar(req, res))
router.post('/administracao/niveis', (req, res) => nivelController.inserir(req, res));
router.get('/administracao/niveis/:id', (req, res) => nivelController.buscarPorId(req, res))
router.put('/administracao/niveis/:id', (req, res) => nivelController.alterar(req, res));
router.delete('/administracao/niveis/:id', (req, res) => nivelController.deletar(req, res));

export default router 