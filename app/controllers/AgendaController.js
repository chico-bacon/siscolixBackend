import { prismaClient } from "../database/prismaClient.js";

export class AgendaController {
    async listar(req, res) {
        try {
            const agendas = await prismaClient.agenda.findMany()
            res.status(200).json(agendas);
        } catch(error) {
            res.status(500).json({ message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async buscarPorId(req, res) {
        try {
            const id = parseInt(req.params.id);
            const agenda = await prismaClient.agenda.findUnique({where: {
                id: id
            }
        });
            res.status(200).json(agenda) 
        } catch(error) {
            res.status(500).json({ message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async inserir(req, res) {
        try {
            const novaAgenda = await prismaClient.agenda.create({
                data: {
                    id_coleta: parseInt(req.body.id_coleta),
                    dia: req.body.dia,
                    horario: req.body.horario
                }
            });
            res.status(200).json(novaAgenda); 
        } catch(error) {
            res.status(500).json({ message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async alterar(req, res) {
        try {
            const id = parseInt(req.params.id);
            const agendaAtualizada = await prismaClient.agenda.update({where: {
                id: id
            },
            data: {
                id_coleta: parseInt(req.body.id_coleta),
                dia: req.body.dia,
                horario: req.body.horario
            }
        });
            res.status(200).json(agendaAtualizada); 
        } catch(error) {
            res.status(500).json({ message: "Erro no servidor!"});
            console.log(error);
        }
    }

    async deletar(req, res) {
        try {
            const id = parent(req.params.id)
            const agendaDeletada = await prismaClient.agenda.delete({
                where: {
                    id: id
                }
            });
            res.status(200).json(agendaDeletada); 
        } catch(error) {
            res.status(500).json({ message: "Erro no servidor!"});
            console.log(error);
        }
    }
}