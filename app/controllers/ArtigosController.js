const express = require('express');
class ArtigosController {
    getRouter() {
        const rotas = express.Router();
        rotas.get('/artigos', (req, res) => {
            this.artigos(req, res)
        });
        return rotas;
    }

    artigos(request, response) {
        response.render('artigos');
    }
}

module.exports = ArtigosController;