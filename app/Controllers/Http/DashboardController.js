"use strict";

class DashboardController {
  async index({ view, auth, response, session }) {
    // fetch login user details
    try {
      const user = session.get("logged_in_user", []);
      console.log(user.id);
      return view.render("dashboard", { user });
    }
    catch (e) {
      console.log(e.message);
      session.flash({ type: "danger", message: "Invalid email or password" });
      return response.redirect("/login");
    }
  }

  async auth({ view, response }) {
    return view.render("admin-dash");
  }
}

module.exports = DashboardController;
