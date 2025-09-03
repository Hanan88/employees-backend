/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("employees", function (table) {
        table.increments("id").primary();
        table.string("name", 255).notNullable();
        table.string("email", 255).notNullable();
        table.string("phone", 20).notNullable();
        table.string("address", 255);
        table.timestamp("created_at").defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists("employees");
};
