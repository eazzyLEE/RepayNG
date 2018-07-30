"use strict";

const Model = use("Model");

class BankRegistration extends Model {
  static get table() {
    return "bank_registrations";
  }

  static get primaryKey() {
    return "id";
  }
}

module.exports = BankRegistration;
