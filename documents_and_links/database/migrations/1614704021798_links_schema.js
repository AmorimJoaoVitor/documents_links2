'use strict'

const { url } = require('@adonisjs/framework/src/Route/Manager')

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LinksSchema extends Schema {
  up () {
    this.create('links', (table) => {
      table.increments()
      table.string('url', 200);
      table.timestamps()
    })
  }

  down () {
    this.drop('links')
  }
}

module.exports = LinksSchema
