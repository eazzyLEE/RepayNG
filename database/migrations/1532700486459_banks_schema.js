"use strict";

const Schema = use("Schema");

class BanksSchema extends Schema {
  up() {
    this.create("banks", table => {
      table.increments();
      table
        .string("bank", 30)
        .notNullable()
        .defaultTo("");
      table
        .string("account_type", 30)
        .notNullable()
        .defaultTo("");
      table.timestamps();
    });
  }

  down() {
    this.drop("banks");
  }
}

module.exports = BanksSchema;
