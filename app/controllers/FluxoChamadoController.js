import { prismaClient } from "../database/prismaClient.js";

export class FluxoChamadoController {
    async listar(req, res) {
        try {
            const fluxoChamados = await prismaClient.fluxoChamado.findMany()
            res.status(200).json(fluxoChamados);
        } catch(error) {
            res.status(500).json({ message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async buscarPorId(req, res) {
        try {
            const id = parseInt(req.params.id);
            const fluxoChamado = await prismaClient.fluxoChamado.findUnique({where: {
                id: id
            }
        });
            res.status(200).json(fluxoChamado) 
        } catch(error) {
            res.status(500).json({ message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async buscarPorIdChamado(req, res) {
        try {
            const id_chamado = parseInt(req.params.id_chamado);
            const fluxoChamado = await prismaClient.fluxoChamado.findUnique({where: {
                id_chamado: id_chamado
            }
        });
            res.status(200).json(fluxoChamado) 
        } catch(error) {
            res.status(500).json({ message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async inserir(req, res) {
        try {
            const novofluxoChamado = await prismaClient.fluxoChamado.create({
                data: {}
            });
            res.status(200).json(novofluxoChamado); 
        } catch(error) {
            res.status(500).json({ message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async alterar(req, res) {
        try {
            const id = parseInt(req.params.id);
            const fluxoChamadoAtualizada = await prismaClient.fluxoChamado.update({where: {
                id: id
            },
            data: {}
        });
            res.status(200).json(fluxoChamadoAtualizada); 
        } catch(error) {
            res.status(500).json({ message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async deletar(req, res) {
        try {
            const id = parseInt(req.params.id)
            const fluxoChamadoDeletada = await prismaClient.fluxoChamado.delete({
                where: {
                    id: id
                }
            });
            res.status(200).json(fluxoChamadoDeletada); 
        } catch(error) {
            res.status(500).json({ message: "Erro no servidor!"});
            console.log(error);
        }
    }
}