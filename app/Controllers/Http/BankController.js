"use strict";

const Bank = use("App/Models/BankRegistration");
const Database = use("Database");

class BankController {
  async index({ request, view, params, session }) {
    // fetch login user details
    const user = session.get("logged_in_user", []);
    const id = user.id;
    console.log(user.id);
    const banks = await Bank.query()
      .where({ user_id: id })
      .fetch();

    return view.render("pages.user.manage-banks", {
      user,
      banks: banks
    });
  }
}

module.exports = BankController;
