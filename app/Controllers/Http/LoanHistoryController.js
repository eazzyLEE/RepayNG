"use strict";

class LoanHistoryController {
  async index({ view, auth, response, session }) {
    // fetch login user details
    const user = session.get("logged_in_user", []);
    console.log(user);
    return view.render("pages.user.loans", { user });
  }
}

module.exports = LoanHistoryController;
