'use strict'

const Schema = use('Schema')

class LoanApplicationSchema extends Schema {
  up () {
    this.create('loan_applications', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('loan_applications')
  }
}

module.exports = LoanApplicationSchema
