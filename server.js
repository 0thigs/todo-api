import { fastify } from "fastify";
import { databasePostgres } from "./database-postgres.js";

const server = fastify()

const database = new databasePostgres()

//VISUALIZAR TODOS✅
server.get('/todos', async (request, response) => {
    const todos = await database.list()
    console.log(todos)
    return todos
})

//POSTAR TODOS
server.post('/todos', async (request, response) => {
    const { todo, done } = request.body
    await database.post({
        todo,
        done
    })
    return response.status(204).send()
})

//DELETAR TODOS
server.delete('/todos', async (request, response) => {
    const { id } = request.body
    await database.delete(id)
})

//ALTERAR TODOS
server.put('/todos', (request, response) => {
    //MAKE IT
})

server.listen({
    port: process.env.PORT ?? 3333,
})