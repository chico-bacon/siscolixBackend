import { prismaClient } from '../database/prismaClient.js'
import { Nivel } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class UsuarioController {

    cadastro(req, res) {
        res.render('standartPageCadastro');
    }

    async teste(req, res) {
        try {
            const usuarios = await prismaClient.usuario.findMany();
            console.log(usuarios);
            res.status(200).render('usuarios_teste.ejs', {usuarios});
        } catch(error) {
            console.log('Erro no servidor!');
            console.log(error);
        }
    }

    async formularioTeste(req, res) {
        try {
            res.status(200).render('');       
        } catch(error) {
            console.log('Erro no servidor!');
            console.log(error);
        }
    }

    async login(req, res) {
        try {
            const loginInfo = req.body;
            const usuario = await prismaClient.usuario.findUnique({
                where: {
                    email: loginInfo.email
                },
            });

            if (!loginInfo) {
                res.status(404).json({ message: "Usuario não existe!"});
            }

            const passwordMatch = await bcrypt.compare(loginInfo.senha, usuario.senha);

            if (!passwordMatch) {
                res.status(404).json({ message: "Senha incorreta!"});
            }
            const JWT_SECRET = process.env.JWT_SECRET
            const token = jwt.sign({ id: usuario.id, email:usuario.email, senha:usuario.senha, id_nivel: usuario.id_nivel }, JWT_SECRET, {expiresIn: '10m'})
            res.status(200).json(token);
        } catch(error) {
            res.status(500).json({message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async inserir(req, res) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashSenha = await bcrypt.hash(req.body.senha, salt);
            
            const usuario = {
                    nome: req.body.nome,
                    cpf: req.body.cpf, 
                    dataNascimento: req.body.dataNascimento,
                    email: req.body.email,         
                    telefone: req.body.telefone,
                    nivel: Nivel.USUARIO,   
                    senha: hashSenha
                }
            await prismaClient.usuario.create(
                {
                    data: usuario
                }
            )
            const JWT_SECRET = process.env.JWT_SECRET
            const token = jwt.sign({ id: usuario.id, email:usuario.email, senha:usuario.senha, nivel: usuario.nivel }, JWT_SECRET, {expiresIn: '1m'})
            res.status(200).json({usuario, token});

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
            const salt = await bcrypt.genSalt(10);
            const hashSenha = await bcrypt.hash(req.body.senha, salt);
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
                        senha: hashSenha,
                        situacao: req.body.situacao
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