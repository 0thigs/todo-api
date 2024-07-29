import { sql } from "./db.js"

export class databasePostgres {

    async list() {
        let todos = await sql`
            SELECT * FROM todos;
        `
        return todos
    }

    async post({todo, done}) {
        try {
            await sql`
                INSERT INTO todos (todo, done) VALUES (${todo}, ${done});
            `
        }
        catch (error) {
            console.log(error)
        }
    }

    async delete(id) {
        try {
            await sql`
                DELETE FROM todos WHERE id = ${id};
            `
        }
        catch(error) {
            console.log(error)
        }

    }
}