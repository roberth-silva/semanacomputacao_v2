
exports.up = function(knex) {
    return knex.schema.createTable('coursearea', function(table){
        table.increments();        
        table.text('description').notNullable();
        table.timestamps(true, true);
    });  
};

exports.down = function(knex) {
    return knex.schema.dropTable('coursearea');
};
