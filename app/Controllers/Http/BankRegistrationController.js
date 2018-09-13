'use strict'

const Bank = use("App/Models/BankRegistration");

class BankRegistrationController {
  /**
   * Register a bank account
   * @param request Request
   * @param view View
   * @param response Resonse
   */
  async register({ request, response, session }) {
    
    const bank = request.input("bank");
    const account_number = request.input("account_number");
    const bvn = request.input("bvn");
    const card_number = request.input("card_number");
    const ccv = request.input("ccv");
    const pin = request.input("pin");
    //const status = request.input("status") || 1; // status is optional, default is 1
    
    if (
      !bank ||
      !account_number ||
      !bvn ||
      !card_number ||
      !ccv ||
      !pin
    ) {
      return response.send({
        status: "error",
        message: "Some fields are missing"
      });
    }

    // // check for valid email
    // if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.exec(email)) {
    //   return response.send({
    //     status: "error",
    //     message:
    //       "Invalid email address. Please provide a valid email to proceed."
    //   });
    // }

    // // check for strong password
    // if (!/^(.*(?=[A-Z]+).*){6,}$/.exec(password)) {
    //   return response.send({
    //     status: "error",
    //     message:
    //       "Password provided is not strong enough. Password must contain a capital letter and be more than 6 character."
    //   });
    // }

    // // check if email exists
    // if (await User.findBy({ email })) {
    //   return response.send({
    //     status: "error",
    //     message: "A user with that email already exists"
    //   });
    // }

    // check if username exists
    if (await Bank.findBy({ account_number })) {
      return response.send({
        status: "error",
        message: "A bank account with this account number already exists"
      });
    }

    const banks = new Bank();
    
    banks.bank = bank;
    banks.account_number = account_number;
    banks.bvn = bvn;
    banks.card_number = card_number;
    banks.ccv = ccv;
    banks.pin = pin;

    await banks.save();
    // save bank record...
    // BankRegistration.create({
    //   bank_id: 'bank_id',
    //   account_number,
    //   account_name: "account_name",
    //   bvn,
    //   card_number,
    //   ccv,
    //   pin,
    // });

    //await user.roles().attach([role_id])

    if (banks) {
      // return response.send({
      //   status: "success",
      //   message: "User created successfully"
      session.put("logged_in_user", user.toJSON());
      return response.redirect("/dashboard");
      
    }

    response.send({ status: "error", message: "Failed to create account" });
  }

  async edit({ request, response, view, params, session }) {
    const user_id = params.user_id;

    const user = await User.find(user_id);

    if (user) {
      return view.render("pages.user.edit", { user: user.toJSON() });
    }

    // flash error
    session.flash({ type: "info", message: "User not found" });

    return response.redirect("/dashboard");
  }
}

module.exports = BankRegistrationController
