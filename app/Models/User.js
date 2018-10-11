"use strict";

const Hash = use("Hash");
const Model = use("Model");

class User extends Model {
  static boot() {
    super.boot();

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook("beforeSave", async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password);
      }
    });
  }

  /**
   * Role and Permision trait
   */
  static get traits () {
    return [
      '@provider:Adonis/Acl/HasRole',
      '@provider:Adonis/Acl/HasPermission'
    ]
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens() {
    return this.hasMany("App/Models/Token");
  }

  profile() {
    return this.hasOne("App/Models/UserProfile");
  }

  bankAccounts() {
    return this.hasMany("App/Models/BankRegistration");
  }

  loans() {
    return this.hasMany("App/Models/LoanHistory")
  }
}

module.exports = User;
