import { Router } from "express";

import { BairroController } from "../controllers/BairroController.js";
import { CronogramasController } from "../controllers/CronogramasController.js";
import { ArtigoController } from "../controllers/ArtigoController.js"; 

const router = new Router();

const bairroController = new BairroController();
const cronogramaController = new CronogramasController();
const artigoController = new ArtigoController();

router.post('/bairros', (req, res) => bairroController.inserir(req, res));
router.put('/bairros/:id', (req, res) => bairroController.alterar(req, res));
router.delete('/bairros/:id', (req, res) => bairroController.deletar(req, res));

//router.post('/cronogramas', (req, res) => cronogramasController.inserir(req, res));
router.post('/cronogramas', (req, res) => cronogramaController.inserir(req, res));
router.put('/cronogramas/:id', (req, res) => cronogramaController.alterar(req, res));
router.delete('/cronogramas/:id', (req, res) => cronogramaController.deletar(req, res));

router.post('/artigos', (req, res) => artigoController.inserir(req, res));
router.put('/artigos/:id', (req, res) => artigoController.alterar(req, res));
router.delete('/artigos/:id', (req, res) => artigoController.deletar(req, res));

export default router 