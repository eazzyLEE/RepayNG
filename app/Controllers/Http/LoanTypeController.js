"use strict";

class LoanTypeController {
  async index({ view, auth, response, session }) {
    // fetch login user details
    const user = session.get("logged_in_user", []);
    console.log(user);
    return view.render("pages.user.new-loan", { user });
  }
}

module.exports = LoanTypeController;
