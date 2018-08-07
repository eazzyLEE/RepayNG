"use strict";

const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.table("users", table => {
      // alter table
      table.string("title").notNullable();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.string("date_of_birth", 120).notNullable();
      table.string("marital_status").notNullable();
      table.string("gender").notNullable();
      table.string("l_g_a").notNullable();
      table.string("address", 80).notNullable();
      table.string("state").notNullable();
    });
  }

  down() {
    this.table("users", table => {
      // reverse alternations
    });
  }
}

module.exports = UserSchema;
