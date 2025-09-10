import { prismaClient } from "../database/prismaClient.js";

export class ColetaController {

    async cadastro(req, res) {
        const ListaCronogramas = await prismaClient.rota.findMany();
        res.render('cadastro_cronogramas', {ListaCronogramas});
    }

    async listar(req, res) {
        try {
            const rotas = await prismaClient.rota.findMany({include: {bairro: true}})
            console.log(rotas[0].bairro);
            res.status(200).json(rotas);
        } catch(error) {
            res.status(500).json({ message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async buscarPorId(req, res) {
        try {
            const id = parseInt(req.params.id);
            const coleta = await prismaClient.coleta.findUnique({where: {
                id: id
            }
        });
            res.status(200).json(coleta) 
        } catch(error) {
            res.status(500).json({ message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async inserir(req, res) {
        try {
            const novaRota = await prismaClient.rota.create({
                data: {
                    id_bairro: parseInt(req.body.id_bairro),
                    dias: req.body.dias,
                    turnos: req.body.turnos
                }
            });
            res.status(200).json(novaRota); 
        } catch(error) {
            res.status(500).json({ message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async alterar(req, res) {
        try {
            const id = parseInt(req.params.id);
            const coletaAtualizada = await prismaClient.coleta.update({where: {
                id: id
            },
            data: {
                id_bairro: parseInt(req.body.id_bairro)
            }
        });
            res.status(200).json(coletaAtualizada); 
        } catch(error) {
            res.status(500).json({ message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async deletar(req, res) {
        try {
            const id = parseInt(req.params.id)
            const coletaDeletada = await prismaClient.coleta.delete({
                where: {
                    id: id
                }
            });
            res.status(200).json(coletaDeletada); 
        } catch(error) {
            res.status(500).json({ message: "Erro no servidor!"});
            console.log(error);
        }
    }
}