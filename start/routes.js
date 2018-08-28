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

Route.get("/", "AuthController.index").as("login");
Route.post("/login", "AuthController.login");
Route.get("/logout", "AuthController.logout").as("logout");
Route.post("/user/register", "AuthController.register");
Route.get("/register", "UserController.index").as("register");
Route.get("/dashboard", "DashboardController.index");


// Route.on("/").render("login");
