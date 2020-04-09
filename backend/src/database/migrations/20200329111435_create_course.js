
exports.up = function(knex) {
    return knex.schema.createTable('courses', function(table){
        table.increments();
        table.string('name').notNullable();
        table.text('description').notNullable();
        table.date('init_date').notNullable();
        table.date('end_date').notNullable();
        table.string('local').notNullable();
        table.string('hour').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
        table.timestamps(true, true);

        table.integer('teacher_id').notNullable();

        table.foreign('teacher_id').references('id').inTable('teachers');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('courses');  
};
