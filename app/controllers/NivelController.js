import { prismaClient } from "../database/prismaClient.js";

export class NivelController {

    cadastro(req, res) {
            const nomePagina = 'cadastro_niveis';
        res.render('administracao', {nomePagina});
    }

    async listar(req, res) {
        try {
            const niveis = await prismaClient.nivel.findMany();
            res.status(200).json(niveis);

        } catch(error) {
            res.status(500).json({message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async buscarPorId(req, res) {
        try {
            const nivel = await prismaClient.nivel.findUnique({
                where: {
                    id: parseInt(req.params.id)
                }
            });
            res.status(200).json(nivel)

        } catch(error) {
            res.status(500).json({message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async inserir(req, res) {
        try {
            const nivel = {
                nome: req.body.nome
            }
    
            await prismaClient.nivel.create({
                data: nivel
            });
            res.status(200).json({message: 'nivel registrado com sucesso!', data: nivel});
    
        } catch(error) {
            res.status(500).json({ message:"Erro no servidor!" });
            console.log(error);
    
        }
    }

    async alterar(req, res) {
        try {
            const id = parseInt(req.params.id);

            const nivelData = {
                nome: req.body.nome
            }

            const nivelAtualizado = await prismaClient.nivel.update({
                where: {
                    id: id
                },
                data: nivelData
            });
            res.status(200).json(nivelAtualizado)

        } catch(error) {
            res.status(500).json({message: 'Erro no servidor!'})
            console.log(error)
        }
    }

    async deletar(req, res) {
        try {
            const nivelDeletado = await prismaClient.nivel.delete({
                where: {
                    id: parseInt(req.params.id)
                }
            });
            res.status(200).json(nivelDeletado);

        } catch(error) {
            res.status(500).json({ messsage: 'Erro no servidor!'})
            console.log(error)
        }
    }

}
