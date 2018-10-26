"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use("Route");

//Route.get("/login", "AuthController.index");
Route.get("/login", ({ view }) => view.render("login")).as("login");
Route.post("/login", "AuthController.login");
Route.get("/register", "AuthController.register_view");
Route.post("/user/register", "AuthController.register").as("register");
//Route.get("/edit", ({ view }) => view.render("pages.user.edit"));
//Route.get("/user-edit/:user_id", "AuthController.edit").as("edit_user");
Route.get("/add-loan", "LoanHistoryController.index_add");
Route.get("/admin", ({ view }) => view.render("admin")).as("admin");
Route.post("/admin", "AuthController.auth");
Route.get("/admin_dash", "DashboardController.auth");
Route.get("/", ({ view }) => view.render("home")).as("home");
Route.get("/about-us", ({ view }) => view.render("about-us")).as("about");
Route.get("/support", ({ view }) => view.render("support")).as("support");

Route.group(() => {
  Route.get("/logout", "AuthController.logout").as("logout");
  //Route.get("/", "DashboardController.index");
  Route.get("/dashboard", "DashboardController.index");
  Route.post("/add-account", "BankRegistrationController.register");
  // Route.get("/banks/:id", "BankController.index").as("manage-banks");
  Route.get("/loans", "LoanHistoryController.index").as("loans");
  // Route.get("/loans", "LoanHistoryController.index").as("loans");
  Route.get("/apply", "SpecialLoanController.index").as("apply");
  Route.get("/referrals", "ReferralController.index").as("referrals");
  Route.get("/banks", "BankController.index").as("manage-banks");
  //Route.post("/add-account", "BankRegistrationController.register");
  Route.get("/user-edit", "AuthController.edit").as("edit_user");
  Route.get("/new-loan", "LoanTypeController.index");
  Route.get("/logout", "AuthController.logout");
  // Route.get("/add-loan", "LoanHistoryController.index_add");
  // Route.post("/new-loan", "LoanHistoryController.index_add");
  Route.post("/user/update", "AuthController.update");

  //Route.get("/new-loan", "CardController.index").as("manage-cards");
}).middleware(["protect"]);
