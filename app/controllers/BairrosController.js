import { prismaClient } from "../database/prismaClient.js";

export class BairroController {
    async inserir(request, response) {
        const bairro = {
            nome: request.body.nome
        }

        try {
            await prismaClient.bairro.create({
                data: bairro
            })
            response.status(201).json({
                message: `Bairro ${bairro.nome} registrado com sucesso`
            })

        } catch(error) {
            console.error(error);
            response.status(500).json({
                message: "Erro ao registrar bairro.",
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }
}