
exports.up = function(knex) {
    return knex.schema.createTable('teachers', function(table){
        table.increments();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.text('description').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('teachers');
};
