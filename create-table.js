import { sql } from "./db.js";

// sql`
//     drop table todos;
// `.then("Dropado!")

sql`
    CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    todo TEXT NOT NULL,
    done BOOLEAN NOT NULL DEFAULT FALSE
);
`.then(() => {
    console.log("finalizado")
})