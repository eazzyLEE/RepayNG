"use strict";

const Schema = use("Schema");

class BankRegistrationSchema extends Schema {
  up() {
    this.create("bank_registrations", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .notNullable();
      table
        .foreign("user_id")
        .references("id")
        .on("users")
        .onDelete("cascade");
      table.string("bank_id").notNullable();
      table
        .integer("account_number")
        .unsigned()
        .notNullable();
      table
        .integer("bvn")
        .unsigned()
        .notNullable();
      table
        .integer("card_number")
        .unsigned()
        .notNullable();
      table
        .integer("ccv")
        .unsigned()
        .notNullable();
      table
        .integer("pin")
        .unsigned()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("bank_registrations");
  }
}

module.exports = BankRegistrationSchema;
