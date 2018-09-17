"use strict";

const Bank = use("App/Models/BankRegistration");
const Database = use("Database");

class BankController {
  async index({ request, view, params, session }) {
    // fetch login user details
    const user_id = params.id;
    const user = session.get("logged_in_user", []);
    console.log(user);
    const bank = await Bank.query()
      .where({ user_id: params.id })
      .fetch();
    // const banks = await Database.from("bank_registrations").where({
    //   user_id: id
    // });

    return view.render("pages.user.manage-banks", { bank: bank.toJSON() });
  }
}

module.exports = BankController;
