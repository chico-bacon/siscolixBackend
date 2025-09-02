import { prismaClient } from "../database/prismaClient.js";

export class ColetaController {

    async listar(req, res) {
        try {
            const coletas = await prismaClient.coleta.findMany()
            res.status(200).json(coletas);
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
            const novaColeta = await prismaClient.coleta.create({
                data: {
                    id_bairro: parseInt(req.body.id_bairro)
                }
            });
            res.status(200).json(novaColeta); 
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