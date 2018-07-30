"use strict";

const Model = use("Model");

class LoanHistory extends Model {
  static get table() {
    return "loan_histories";
  }

  static get primaryKey() {
    return "id";
  }
}

module.exports = LoanHistory;
