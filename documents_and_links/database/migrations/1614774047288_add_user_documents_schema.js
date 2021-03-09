'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddUserDocumentsSchema extends Schema {
  up () {
    this.table('documents', (table) => {
      table.integer('user_id').references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    })
  }

  down () {
    this.table('documents', (table) =>{
      table.dropColumn('user_id');
    });
  }
}

module.exports = AddUserDocumentsSchema
