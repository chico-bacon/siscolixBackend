const express = require('express');
class CadastroCronogramasController {
    getRouter() {
        const rotas = express.Router();
        rotas.get([
            '/',
            '/cadastro_cronogramas'
            ], (req, res) => {
            this.cadastro_cronogramas(req, res)
        });
        return rotas;
    }

    cadastro_cronogramas(request, response) {
        response.render('cadastro_cronogramas');
    }
}

module.exports = CadastroCronogramasController;