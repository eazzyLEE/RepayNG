'use strict'

const Schema = use('Schema')

class LoanTypeSchema extends Schema {
  up () {
    this.create('loan_types', (table) => {
      table.increments()
      table
        .string("loan_type", 30)
        .notNullable()
        .defaultTo('');
      table.timestamps()
    })
  }

  down () {
    this.drop('loan_types')
  }
}

module.exports = LoanTypeSchema
