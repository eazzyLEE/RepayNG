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

Route.get("/login", "AuthController.index");
Route.post("/login", "AuthController.login");
Route.get("/register", ({view}) => view.render('pages.register') );
Route.post("/register", "AuthController.register").as("register");

Route.group(() => {
    Route.get("/logout", "AuthController.logout").as("logout");
    Route.get("/", "DashboardController.index");
    Route.get("/dashboard", "DashboardController.index");
})
.middleware(["protect"]);