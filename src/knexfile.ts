import knex from "knex";

const db = knex({
    client: "pg",
    connection: {
        host: "localhost",
        port: 5432,
        user: "postgres",
        password: "3108",
        database: "employees",
    },
    migrations: {
        directory: "./src/migrations",
    },
    seeds: {
        directory: "./src/seeds",
    },
});

export default db;
