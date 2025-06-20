const express = require('express');
class CronogramasController {
    getRouter() {
        const rotas = express.Router();
        rotas.get([
            '/',
            '/cronogramas'
            ], (req, res) => {
            this.cronogramas(req, res)
        });
        return rotas;
    }

    cronogramas(request, response) {
        response.render('cronogramas');
    }
}

module.exports = CronogramasController;