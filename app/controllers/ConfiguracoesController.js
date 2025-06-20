const express = require('express');
class ConfiguracoesController {
    getRouter() {
        const rotas = express.Router();
        rotas.get([
            '/',
            '/configuracoes'
            ], (req, res) => {
            this.configuracoes(req, res)
        });
        return rotas;
    }

    configuracoes(request, response) {
        response.render('configuracoes');
    }
}

module.exports = ConfiguracoesController;