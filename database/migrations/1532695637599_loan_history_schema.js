"use strict";

const Schema = use("Schema");

class LoanHistorySchema extends Schema {
  up() {
    this.create("loan_histories", table => {
      table.increments();
      table
        .integer("loan_id")
        .unsigned()
        .notNullable();
      table.string("loan_type").notNullable();
      table
        .foreign("loan_type")
        .references("loan_type")
        .on("loan_types")
        .onDelete("cascade");
      table
        .integer("amount")
        .unsigned()
        .notNullable();
      table
        .boolean("loan_status")
        .notNullable()
        .defaultTo(false);
      table.string("remarks").notNullable();

      table.timestamps();
    });
  }

  down() {
    this.drop("loan_histories");
  }
}

module.exports = LoanHistorySchema;
