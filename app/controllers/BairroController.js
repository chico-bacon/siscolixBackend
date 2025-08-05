import { prismaClient } from "../database/prismaClient.js";

export class BairroController {
    async listar(req, res) {
        try {
            const bairros = await prismaClient.bairro.findMany();
            res.status(200).json(bairros);
    
        } catch(error) {
            res.status(500).json({ message: 'Erro no servidor!'});
            console.log(error);
        }
    }

    async buscarPorId(req, res) {
        try {
            const bairro = await prismaClient.bairro.findUnique({
                where: {
                    id: parseInt(req.params.id)
                }
            });
    
            res.status(200).json(bairro);
        } catch(error) {
            res.status(500).json({ message: 'Erro no servidor'});
            console.log(error)
        }
    }

    async inserir(req, res) {
        try {
            const bairro = {
                nome: req.body.nome
            }
    
            await prismaClient.bairro.create({
                data: bairro
            })
    
            res.status(200).json(bairro)
    
        } catch(error) {
            res.status(500).json({ message: 'Erro no servidor!'});
            console.log(error)
    
        }
    }

    async alterar(req, res) {
        try {
            const id = parseInt(req.params.id);
            const bairroData = {
                nome: req.body.nome
            }
    
            const bairroAtualizado = await prismaClient.bairro.update({
                where: {
                    id: id
                },
                data: bairroData
            });
    
            res.status(200).json(bairroAtualizado);
    
        } catch(error) {
            res.status(500).json({message: 'Erro no servidor!'});
            console.log(error);
    
        }
    }

    async deletar(req, res) {
        try {
            const id = parseInt(req.params.id);
    
            const bairroDeletado = await prismaClient.bairro.delete({
                where: {id: id}
            });
    
            res.status(200).json(bairroDeletado);
    
        } catch(error) {
            res.status(500).json({ message: 'Erro no servidor!'});
            console.log(error);
    
        }
    }

}