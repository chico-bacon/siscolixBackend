import { prismaClient } from "../database/prismaClient.js";

export class ChamadoController {
    async listar(req, res) {
        try {
            const chamados = await prismaClient.chamado.findMany()
            res.status(200).json(chamados);
        } catch(error) {
            res.status(500).json({ message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async buscarPorId(req, res) {
        try {
            const id = parseInt(req.params.id_chamado);
            const chamado = await prismaClient.chamado.findUnique({where: {
                id: id
            }
        });
            res.status(200).json(chamado) 
        } catch(error) {
            res.status(500).json({ message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async buscarPorIdUsuario(req, res) {
        try {
            const idUsuario = req.params.usuario_id;
            const chamados = await prismaClient.chamado.findMany({where: {
                usuario_id: idUsuario
            }
        });
        res.status(200).json(chamados) 
        } catch(error) {
            res.status(500).json({ message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async inserir(req, res) {
        try {
            const novaChamado = await prismaClient.chamado.create({
                data: {
                    usuario_id: req.body.usuario_id,
                    tipoChamado: req.body.tipoChamado,
                    bairro_id: req.body.bairro_id,
                    logradouro: req.body.logradouro,
                    ponto_referencia: req.body.ponto_referencia
                }
            });
            res.status(200).json(novaChamado); 
        } catch(error) {
            res.status(500).json({ message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async alterar(req, res) {
        try {
            const id = parseInt(req.params.id);
            const chamadoAtualizada = await prismaClient.chamado.update({where: {
                id: id
            },
            data: {
                usuario_id: req.body.usuario_id,
                tipoChamado: req.body.tipoChamado,
                bairro_id: req.body.bairro_id,
                logradouro: req.body.logradouro,
                ponto_referencia: req.body.ponto_referencia
            }
        });
            res.status(200).json(chamadoAtualizada); 
        } catch(error) {
            res.status(500).json({ message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async deletar(req, res) {
        try {
            const id = parseInt(req.params.id)
            const chamadoDeletada = await prismaClient.chamado.delete({
                where: {
                    id: id
                }
            });
            res.status(200).json(chamadoDeletada); 
        } catch(error) {
            res.status(500).json({ message: "Erro no servidor!"});
            console.log(error);
        }
    }
}