"use strict";
const Loan = use("App/Models/LoanHistory");
const User = use("App/Models/User");

class LoanHistoryController {
  async index({ view, auth, response, session }) {
    // fetch login user details
    const user = session.get("logged_in_user", []);
    const id = user.id;
    console.log(user.id);
    const loan = await Loan.query()
      .where({ loan_id: id })
      .fetch();
    console.log(user.id);
    return view.render("pages.user.loans", { user, loan: loan.toJSON() });
  }

  async register({ request, response, session }) {
    const user = session.get("logged_in_user", []);
    const id = user.id;
    console.log(user.id);
    const loan = await Loan.query()
      .where({ loan_id: id })
      .fetch();
    console.log(user.id);

    user.loans().create({
      bank_id: bank,
      account_number,
      bvn,
      card_number,
      ccv,
      pin
    });
  }
}

module.exports = LoanHistoryController;
