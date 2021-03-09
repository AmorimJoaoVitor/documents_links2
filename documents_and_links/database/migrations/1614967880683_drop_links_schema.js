'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DropLinksSchema extends Schema {
  up () {
    this.table('links', (table) => {
    })
  }

  down () {
    this.drop('links')
  }
}

module.exports = DropLinksSchema
