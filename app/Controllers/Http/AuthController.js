"use strict";

const User = use("App/Models/User");
const Hash = use("Hash");
const Bank = use("App/Models/BankRegistration");
const Banks = use("App/Models/Bank");

class AuthController {
  async index({ view, auth, response }) {
    try {
      await auth.check();
      return response.redirect("/");
    } catch (error) {
      return view.render("login");
    }

    return view.render("pages.auth.index");
  }

  async token({ auth, request, response }) {
    const email = request.input("email");
    const password = request.input("password");

    if (!email || !password) {
      return response.send({
        status: "error",
        message: "email and password required"
      });
    }

    try {
      return await auth.authenticator("jwt").attempt(email, password);
    } catch (e) {
      return { status: "error", message: e.message };
    }
  }

  async login({ request, response, auth, session }) {
    const email = request.input("email");
    const password = request.input("password");

    try {
      const user = await auth.remember(true).attempt(email, password);

      session.put("logged_in_user", user.toJSON());
      return response.redirect("/dashboard");
    } catch (e) {
      console.log(e.message);
      session.flash({ type: "danger", message: "Invalid email or password" });
      return response.redirect("/");
    }
  }

  async logout({ auth, response }) {
    await auth.logout();

    return response.redirect("/");
  }

  async register_view({ view }) {
    const banks = await Banks.all();

    return view.render("pages.register", { banks: banks.toJSON() });
  }
  /**
   * Register a user
   * @param request Request
   * @param view View
   * @param response Resonse
   */
  async register({ request, response, session }) {
    const email = request.input("email");
    const password = request.input("password");
    const username = request.input("username") || email;
    const title = request.input("title");
    const first_name = request.input("first_name");
    const last_name = request.input("last_name");
    const date_of_birth = request.input("date_of_birth");
    const marital_status = request.input("status");
    const gender = request.input("gender");
    const address = request.input("address");
    const lga = request.input("lga");
    const state = request.input("state");

    const bank = request.input("bank");
    const account_number = request.input("account_number");
    const bvn = request.input("bvn");
    const card_number = request.input("card_number");
    const ccv = request.input("ccv");
    const pin = request.input("pin");
    //const status = request.input("status") || 1; // status is optional, default is 1
    const phone = request.input("phone");
    //const role_id = await UserHelper.getUserRoleId(user_type) || 3 // if no user type is provided, default to normal user
    if (
      !email ||
      !password ||
      // !username ||
      !title ||
      !first_name ||
      !last_name ||
      !date_of_birth ||
      !marital_status ||
      !gender ||
      !address ||
      !lga ||
      !state ||
      !phone
    ) {
      return response.send({
        status: "error",
        message: "Some fields are missing"
      });
    }

    // check for valid email
    if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.exec(email)) {
      return response.send({
        status: "error",
        message:
          "Invalid email address. Please provide a valid email to proceed."
      });
    }

    // check for strong password
    if (!/^(.*(?=[A-Z]+).*){6,}$/.exec(password)) {
      return response.send({
        status: "error",
        message:
          "Password provided is not strong enough. Password must contain a capital letter and be more than 6 character."
      });
    }

    // check if email exists
    if (await User.findBy({ email })) {
      return response.send({
        status: "error",
        message: "A user with that email already exists"
      });
    }

    // check if username exists
    if (await User.findBy({ username })) {
      return response.send({
        status: "error",
        message: "A user with that username already exists"
      });
    }

    // create a new user
    const user = new User();
    user.username = username;
    user.password = password;
    user.email = email;
    user.title = title;
    user.first_name = first_name;
    user.last_name = last_name;
    user.date_of_birth = date_of_birth;
    user.marital_status = marital_status;
    user.gender = gender;
    user.address = address;
    user.lga = lga;
    user.state = state;
    user.phone = phone;
    await user.save();

    user.bankAccounts().create({
      bank_id: bank,
      account_number,
      bvn,
      card_number,
      ccv,
      pin
    });

    if (user) {
      session.put("logged_in_user", user.toJSON());
      return response.redirect("/dashboard");
    }

    return response.send({ status: "error", message: "Failed to create user" });
  }

  async edit({ request, response, view, params, session }) {
    // fetch login user details
    const user = session.get("logged_in_user", []);
    const id = user.id;
    console.log(user.id);

    if (user) {
      return view.render("pages.user.edit", { user: user.toJSON() });
    }

    // flash error
    session.flash({ type: "info", message: "User not found" });

    return response.redirect("/dashboard");
  }

  /**
   * update user
   * @param request Request
   * @param response Response
   */
  async update({ request, response }) {
    const newUsername = request.input("new_username");
    const newPassword = request.input("new_password");
    const phone = request.input("phone");
    const title = request.input("title");
    const first_name = request.input("first_name");
    const last_name = request.input("last_name");
    const date_of_birth = request.input("date_of_birth");
    const marital_status = request.input("marital_status");
    const gender = request.input("gender");
    const address = request.input("address");
    const l_g_a = request.input("l_g_a");
    const state = request.input("state");
    const profile_image = request.input("profile_image");
    const email = request.input("email");
    //const user_type = request.input("user_type");

    let user = await User.findBy("email", email);

    if (!user) {
      response.send({ status: "error", message: "User not found" });
    }

    if (newUsername) {
      user.username = newUsername;
    }

    if (newPassword) {
      user.password = await Hash.make(newPassword);
    }

    if (phone) {
      user.phone = phone;
    }
    if (title) {
      user.title = title;
    }
    if (first_name) {
      user.first_name = first_name;
    }
    if (last_name) {
      user.last_name = last_name;
    }
    if (date_of_birth) {
      user.date_of_birth = date_of_birth;
    }
    if (marital_status) {
      user.marital_status = marital_status;
    }
    if (gender) {
      user.gender = gender;
    }
    if (contact_address) {
      user.contact_address = contact_address;
    }
    if (l_g_a) {
      user.l_g_a = l_g_a;
    }
    if (state) {
      user.state = state;
    }
    if (profile_image) {
      user.profile_image = profile_image;
    }
    if (address) {
      user.address = address;
    }

    await user.save();

    // if (user_type) {
    //     const role_id = await UserHelper.getUserRoleId(user_type)
    //     if (role_id) {

    //     await Database.table('role_user')
    //       .where('user_id', user.id)
    //       .update({role_id: role_id})

    //     }
    // }

    response.send({ status: "success", data: user });
    return response.redirect("/dashboard");
  }
}

module.exports = AuthController;
