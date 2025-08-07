import express from 'express';

export class CadastroUsuarioController {
    cadastro(request, response) {
        response.render('standartPageCadastro');
    }
}