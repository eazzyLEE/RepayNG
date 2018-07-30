"use strict";

const Model = use("Model");

class UserProfile extends Model {
  static get table() {
    return "user_profiles";
  }

  static get primaryKey() {
    return "id";
  }
}

module.exports = UserProfile;
