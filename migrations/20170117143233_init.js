exports.up = function(knex, Promise) {
  return knex.schema.createTable('passengers', table => {
    table.increments('id')
    .unsigned()
    .primary()

    table.string('name')

    table.integer('ticket')
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
  .createTable('tickets', table => {
    table.increments('id')
    .unsigned()
    .primary()

    table.integer('purchasedFromStation')
    .unsigned()
    .notNull()

    table.integer('trainFor')
    .unsigned()
    .notNull()

    table.integer('destinationStation')
    .unsigned()
    .notNull
  })
}

exports.down = function(knex, Promise) {
  return  knex.schema.dropTableIfExists('passengers')
          .dropTableIfExists('stations')
          .dropTableIfExists('trains')
          .dropTableIfExists('people')
          .dropTableIfExists('tickets')
}
