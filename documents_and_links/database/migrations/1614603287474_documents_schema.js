'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DocumentsSchema extends Schema {
  up () {
    this.create('documents', (table) => {
      table.increments()
      table.string('name', 100).notNullable()
      table.string('extension', 45).notNullable()
      table.integer('size').notNullable()
      table.string('directory', 45).notNullable()
      table.string('archives', 45).notNullable()
      table.integer('fkUser').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('documents')
  }
}

module.exports = DocumentsSchema
