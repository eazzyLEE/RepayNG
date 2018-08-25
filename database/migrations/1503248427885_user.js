"use strict";

const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.dropIfExists("users");
    this.create("users", table => {
      table.increments();
      table.string("username", 80).notNullable().unique();
      table.string("email", 254).notNullable().unique();
      table.string("password", 60).notNullable();
      table.string("phone", 80).notNullable();
      table.string("title").notNullable();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.integer("date_of_birth").notNullable();
      table.string("marital_status").notNullable();
      table.string("gender").notNullable();
      table.string("lga").notNullable();
      table.string("address", 180).notNullable();
      table.string("state").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
