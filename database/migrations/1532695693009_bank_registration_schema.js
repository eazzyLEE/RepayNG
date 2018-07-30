"use strict";

const Schema = use("Schema");

class BankRegistrationSchema extends Schema {
  up() {
    this.create("bank_registrations", table => {
      table.increments();
      table
        .integer("bank_id")
        .unsigned()
        .notNullable();
      table
        .foreign("bank_id")
        .references("bank")
        .on("banks")
        .onDelete("cascade");
      table
        .integer("account_number")
        .unsigned()
        .notNullable();
      table.string("account_name").notNullable();
      table
        .integer("bank_verification_number")
        .unsigned()
        .notNullable();
      table
        .foreign("bank_id")
        .references("account_type")
        .on("banks")
        .onDelete("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("bank_registrations");
  }
}

module.exports = BankRegistrationSchema;
