"use strict";

class Auth {
  async handle({ auth, session, response }, next) {
    // call next to advance the request
    try {
      await auth.check();
      await next();
    } catch (error) {
      console.log(error.message);
      session.flash({ type: "danger", message: "You must log in first :)" });
      return response.redirect("/login");
    }
  }
}

module.exports = Auth;
