"use strict";
const Loan = use("App/Models/LoanHistory");
const User = use("App/Models/User");
const Bank = use("App/Models/BankRegistration");

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

  async index_view({ view, auth, response, session }) {
    // fetch login user details
    const user = session.get("logged_in_user", []);
    const id = user.id;
    console.log(user.id);
    const loan = await Loan.query()
      .where({ loan_id: id })
      .fetch();
    console.log(user.id);
    return view.render("pages.user.new-loan", { user, loan: loan.toJSON() });
  }

  async index_add({ view, auth, response, session }) {
    // fetch login user details
    const user = session.get("logged_in_user", []);
    const id = user.id;
    console.log(user.id);
    // const loan = await Loan.query()
    //   .where({ loan_id: id })
    //   .fetch();
    console.log(user.id);
    const banks = await Bank.query()
      .where({ user_id: id })
      .fetch();

    return view.render("pages.user.add-loan", {
      user,
      banks: banks
    });
  }

  async register({ request, response, session }) {
    const user = session.get("logged_in_user", []);
    const id = user.id;
    console.log(user.id);

    console.log(user.id);
    const bank = request.input("bank");
    const account_number = request.input("account_number");
    const bvn = request.input("bvn");
    const card_number = request.input("card_number");
    const ccv = request.input("ccv");
    const pin = request.input("pin");

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
