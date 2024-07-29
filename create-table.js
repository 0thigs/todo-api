import { sql } from "./db.js";

sql`
    CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    todo TEXT NOT NULL,
    done BOOLEAN NOT NULL DEFAULT FALSE
);
`.then(() => {
    console.log("finalizado")
})