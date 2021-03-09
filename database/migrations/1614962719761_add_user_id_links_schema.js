'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddUserIdLinksSchema extends Schema {
  up () {
    this.table('links', (table) => {
      table.integer('user_id').references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    })
  }

  down () {
    this.table('links', (table) => {
      table.dropColumn('user_id');
    });
  }
}

module.exports = AddUserIdLinksSchema
