'use strict'

class UserController {
  async index ({ request, view }) {

    /** rendering view */
    return view.render('pages.register')
  }
  
}

module.exports = UserController
