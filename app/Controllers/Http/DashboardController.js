'use strict'

class DashboardController {
    async index({ view, auth, response }) {    
        return view.render("dashboard");
    }
}

module.exports = DashboardController
