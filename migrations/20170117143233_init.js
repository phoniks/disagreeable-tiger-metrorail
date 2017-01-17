exports.up = function(knex, Promise) {
  return knex.schema.createTable('people', table => {
    table.increments('id')
    .unsigned()
    .primary()

    table.string('name')

    table.specificType('tickets', 'integer[]')
    .unsigned()

    table.integer('station')
    .unsigned()
  })
  .createTable('stations', table => {
    table.increments('id')
    .unsigned()
    .primary()

    table.string('location')
    .notNull()

    table.integer('prevStation')
    .unsigned()

    table.integer('nextStation')
    .unsigned()

    table.specificType('passengers', 'integer[]')
    .unsigned()
  })
  .createTable('trains', table => {
    table.increments('id')
    .unsigned()
    .primary()

    table.decimal('capacity')
    .unsigned()
    .notNull()

    table.specificType('passengers', 'integer[]')
    .unsigned()

    table.decimal('station')
    .unsigned()
  })
}

exports.down = function(knex, Promise) {
  return  knex.schema.dropTableIfExists('people')
          .dropTableIfExists('stations')
          .dropTableIfExists('trains')
}
