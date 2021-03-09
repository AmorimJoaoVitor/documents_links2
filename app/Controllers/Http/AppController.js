'use strict'

class AppController {
    // index() {
    //     return "Hello world";
    // }

    indexLoginFront({ view }) {
        return view.render('home.login');
    }


}

module.exports = AppController
