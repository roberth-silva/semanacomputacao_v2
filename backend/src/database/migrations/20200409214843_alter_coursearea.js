
exports.up = function(knex) {
    return knex.schema.alterTable('coursearea', function(table) {
        table.string('initials').nullable().alter();
     })  
};

exports.down = function(knex) {
    return knex.schema.alterTable('coursearea', function(table) {
        table.dropColumn('initials');
     })  
};
