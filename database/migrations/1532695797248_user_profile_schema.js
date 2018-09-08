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
      table.string("profile_image").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("user_profiles");
  }
}

module.exports = UserProfileSchema;
