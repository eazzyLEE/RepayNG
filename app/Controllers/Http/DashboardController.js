"use strict";

class DashboardController {
  async index({ view, auth, response, session }) {
    // fetch login user details
    const user = session.get("logged_in_user", []);
    console.log(user.id);
    return view.render("dashboard", { user });
  }
}

module.exports = DashboardController;
