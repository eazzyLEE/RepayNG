"use strict";

const Model = use("Model");

class LoanType extends Model {
  static get table() {
    return "loan_types";
  }

  static get primaryKey() {
    return "id";
  }
}

module.exports = LoanType;
