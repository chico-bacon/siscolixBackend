const express = require('express');
class AdministracaoController {
    getRouter() {
        const rotas = express.Router();
        rotas.get([
            '/',
            '/administracao'
            ], (req, res) => {
            this.administracao(req, res)
        });
        return rotas;
    }

    administracao(request, response) {
        response.render('administracao');
    }
}

module.exports = AdministracaoController;