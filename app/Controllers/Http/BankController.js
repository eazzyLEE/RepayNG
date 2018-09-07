"use strict";

class BankController {
  async index({ view, auth, response, session }) {
    // fetch login user details
    const user = session.get("logged_in_user", []);
    console.log(user);
    return view.render("pages.user.manage-banks", { user });
  }
}

module.exports = BankController;
