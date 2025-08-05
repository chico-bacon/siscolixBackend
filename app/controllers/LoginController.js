const express = require('express');
class LoginController {
    getRouter() {
        const rotas = express.Router();
        rotas.get('/login', (req, res) => {
            this.login(req, res)
        });
        return rotas;
    }

    login(request, response) {
        response.render('login');
    }
}

module.exports = LoginController;