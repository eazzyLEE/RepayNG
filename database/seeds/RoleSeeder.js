"use strict";

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use("Factory");
const Role = use("Role");
const Database = use("Database");
const User = use("App/Models/User")

class RoleSeeder {
  async run() {
    await Database.raw("SET FOREIGN_KEY_CHECKS = 0;");

    await Role.truncate();

    const roleAdmin = new Role();
    roleAdmin.name = "Administrator";
    roleAdmin.slug = "administrator";
    roleAdmin.description = "manage administration privileges";
    await roleAdmin.save();

    const roleUser = new Role();
    roleUser.name = "User";
    roleUser.slug = "user";
    roleUser.description = "user";
    await roleUser.save();

    const user = await User.find(1);
    await user.roles().attach([roleAdmin.id, roleUser.id]);
    await Database.raw("SET FOREIGN_KEY_CHECKS = 1;");
  }
}

module.exports = RoleSeeder;
