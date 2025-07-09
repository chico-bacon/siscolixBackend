export class IndexController {
    /*
    getRouter() {
        const rotas = express.Router();
        rotas.get([
            '/',
            '/index'
            ], (req, res) => {
            this.index(req, res)
        });
        return rotas;
    }
*/
    index(request, response) {
        response.render('index');
    }
}
