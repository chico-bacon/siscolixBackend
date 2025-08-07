import { prismaClient } from "../database/prismaClient.js";

export class CronogramasController {

    async cronogramas(req, res) {
        try {
            res.status(200).render('cronogramas');
        } catch(error) {
            res.status(500).json({message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async listar(req, res) {
        try {
            const cronogramas = await prismaClient.cronograma.findMany();
            res.status(200).json(cronogramas);

        } catch(error) {
            res.status(500).json({message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async buscarPorId(req, res) {
        try {
            const cronograma = await prismaClient.cronograma.findUnique({
                where: {
                    id: parseInt(req.params.id)
                }
            });

        } catch(error) {
            res.status(500).json({message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async inserir(req, res) {
        try {
            const cronograma = {
                id: req.body.id,
                id_bairro: req.body.id_bairro,
                periodicidade: req.body.periodicidade,
                turnos: req.body.turnos
            }
    
            await prismaClient.cronograma.create({
                data: cronograma
            });
            res.status(200).json({message: 'cronograma registrado com sucesso!', data: cronograma});
    
        } catch(error) {
            res.status(500).json({ message:"Erro no servidor!" });
            console.log(error);
    
        }
    }

    async alterar(req, res) {
        try {
            const id = parseInt(req.params.id);

            const cronogramaData = {
                id: req.body.id,
                id_bairro: req.body.id_bairro,
                periodicidade: req.body.periodicidade,
                turnos: req.body.turnos
            }

            const cronogramaAtualizado = await prismaClient.cronograma.update({
                data: cronogramaData
            });
            res.status(200).json(cronogramaAtualizado)

        } catch(error) {
            res.status(500).json({message: 'Erro no servidor!'})
            console.log(error)
        }
    }

    async deletar(req, res) {
        try {
            const cronogramaDeletado = await prismaClient.cronograma.delete({
                where: {
                    id: parseInt(req.params.id)
                }
            });
            res.status(200).json(cronogramaDeletado);

        } catch(error) {
            res.status(500).json({ messsage: 'Erro no servidor!'})
            console.log(error)
        }
    }

}
