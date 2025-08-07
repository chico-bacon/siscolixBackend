import { prismaClient } from '../database/prismaClient.js';

export class ArtigoController {
    
    async artigos(req, res) {
        try {
            res.status(200).render('artigos');
        } catch(error) {
            res.status(500).json({message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async inserir(req, res) {
        try {
            const artigo = {
                dataPublicacao: req.body.dataPublicacao,
                manchete: req.body.manchete,
                conteudo: req.body.conteudo
            };

            await prismaClient.artigo.create({
                data:artigo
            });
            res.status(200).json(artigo);

        } catch(error) {
            res.status(500).json({message:"Erro no servidor!"});
            console.log(error);
        }
    }

    async listar(req, res) {
        try {
            const artigos = await prismaClient.artigo.findMany();
            res.status(200).json(artigos);

        } catch(error) {
            res.status(500).json({message:"Erro no servidor!"});
            console.log(error);
        }
    }

    async buscarPorId(req, res) {
        try {
            const artigo = await prismaClient.artigo.findUnique({
                where: {
                    id: parseInt(req.params.id)
                }
            })
            res.status(200).json(artigo);

        } catch(error) {
            res.status(500).json({message:"Erro no servidor!"});
            console.log(error);
        }
    }

    async alterar(req, res) {
        try {
            const artigoData = {
                dataPublicacao: req.body.dataPublicacao,
                manchete: req.body.manchete,
                conteudo: req.body.conteudo
            };
            const artigoAtualizado = await prismaClient.artigo.update({
                where: {
                    id: parseInt(req.params.id)
                },
                data: artigoData
            });
            res.status(200).json(artigoAtualizado);

        } catch(error) {
            res.status(500).json({message:"Erro no servidor!"});
            console.log(error);
        }
    }

    async deletar(req, res) {
        try {
            const artigoDeletado = await prismaClient.artigo.delete({
                where: {
                    id: parseInt(req.params.id)
                }
            })
            res.status(200).json(artigoDeletado);

        } catch(error) {
            res.status(500).json({message:"Erro no servidor!"});
            console.log(error);
        }
    }

}