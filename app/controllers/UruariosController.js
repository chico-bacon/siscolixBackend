import { prismaClient } from '../database/prismaClient.js';
import bcrypt from 'bcrypt';

export class UsuarioController {    
    async login(req, res) {
        try {
            const salt = bcrypt.genSalt(10);
            const hashSenha = bcrypt.hash(req.body.senha, salt);
            const usuarioLogado = await prismaClient.usuario.findUnique({
                where: {
                    email: req.body.email,
                    senha: hashSenha
                }
            });

            res.status(200).json(usuarioLogado);
        } catch(error) {
            res.status(500).json({message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async inserir(req, res) {
        try {
            const salt = bcrypt.genSalt(10);
            const hashSenha = bcrypt.hash(req.body.senha, salt);
            
            const usuario = {
                    nome: req.body.nome,
                    cpf: req.body.cpf, 
                    dataNascimento: req.body.dataNascimento,
                    email: req.body.email,         
                    telefone: req.body.telefone,
                    id_nivel: req.body.id_nivel,   
                    senha: hashSenha
                }
            await prismaClient.usuario.create(
                {
                    data: usuario
                }
            )
            res.status(200).json(usuario);

        } catch(error) {
            res.status(500).json({message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async buscarPorId(req, res) {
        try {
            const id = req.params.id;
            const usuario = await prismaClient.usuario.findUnique({
                where: {
                    id: id
                }
            });

            res.status(200).json(usuario);
        } catch(error) {
            res.status(500).json({message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async listar(req, res) {
        try {
            const listaUsuarios = await prismaClient.usuario.findMany();

            res.status(200).json(listaUsuarios);
        } catch(error) {
            res.status(500).json({message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async alterar(req, res) {
        try {
            const id = req.params.id;
            const salt = bcrypt.genSalt(10);
            const hashSenha = bcrypt.hash(req.body.senha, salt);
            const usuarioAtualizado = await prismaClient.usuario.update(
                {
                    where: {
                        id: id
                    }, 
                    data: {
                        nome: req.body.nome,
                        cpf: req.body.cpf, 
                        dataNascimento: req.body.dataNascimento,
                        email: req.body.email,         
                        telefone: req.body.telefone,
                        id_nivel: req.body.id_nivel,   
                        senha: hashSenha
                    }
                }
                );
            res.status(200).json(usuarioAtualizado);

        } catch(error) {
            res.status(500).json({message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async deletar(req, res) {
        try {
            const id = req.params.id;
            const usuarioDeletado = await prismaClient.usuario.delete({
                where: {
                    id: id
                }
            });
            res.status(200).json(usuarioDeletado);
        } catch(error) {
            res.status(500).json({message: "Erro no servidor!"});
            console.log(error);
        }
    }

}