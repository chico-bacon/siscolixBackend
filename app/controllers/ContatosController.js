
export class ContatosController {
    /*
    getRouter() {
        const rotas = express.Router();
        rotas.get([
            '/',
            '/contatos'
            ], (req, res) => {
            this.contatos(req, res)
        });
        return rotas;
    }
*/
    contatos(request, response) {
        response.render('contatos');
    }
}
