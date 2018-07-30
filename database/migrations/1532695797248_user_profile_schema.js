"use strict";

const Schema = use("Schema");

class UserProfileSchema extends Schema {
  up() {
    this.create("user_profiles", table => {
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
      table.string("title").notNullable();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.integer("date_of_birth").notNullable();
      table.string("marital_status").notNullable();
      table.string("gender").notNullable();
      table.string("contact_address").notNullable();
      table.string("l_g_a").notNullable();
      table.string("state").notNullable();
      table.string("phone").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("user_profiles");
  }
}

module.exports = UserProfileSchema;
