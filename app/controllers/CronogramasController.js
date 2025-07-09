import { prismaClient } from "../database/prismaClient.js";

export class CronogramasController {
    /*       
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
*/
    cronogramas(request, response) {
        response.render('cronogramas');
    }

    async inserir(request, response) {
        const cronograma = {
            id_bairro: request.body.id_bairro,  
            periodicidade: request.body.periodicidade,
            turno: request.body.turno,
        }
        try {
            await prismaClient.cronograma.create({
                data: cronograma 
            })
            response.status(201).json({
                message: `cronograma registrado com sucesso`
            })
        } catch(error) {
            console.error(error);
            response.status(500).json({
                message: "Erro ao registrar cronograma.",
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }

    async deletar(request, response) {
        const id = parseInt(request.params.id);

        try {
            await prismaClient.cronograma.delete({
                where: { id: id }
            });
            response.status(201).json({
                message: `Cronograma ${id} deletado com sucesso!` 
            })
        } catch (error) {
            console.error(error);
            response.status(500).json({
                message: "Erro ao buscar cronograma.",
                error: error instanceof Error ? error.message : String(error)
            });
        }

    }

}
