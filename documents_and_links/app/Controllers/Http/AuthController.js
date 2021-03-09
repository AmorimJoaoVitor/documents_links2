'use strict'

const User = use('App/Models/User');

class AuthController {

    async register({ request, auth }) {
        const data = request.only(['username', 'email', 'password'])

        const user = await User.create(data);

        return user;

    }

    async authenticate({ request, auth, response }) {
        const { email, password } = request.all();

        const token = await auth.attempt(email, password);

        return token;
    }

    async show({ auth, params }) {

        if (auth.user.id != Number(params.id)) {
            return "Sem autorização"
        }
        return auth.user

    }

    
    async logout({ auth, response, request }) { 

        try {
            const isLogged = await auth.check();
            if (isLogged) {
                await auth.logout();
            }

            return response.status(403).send({ info:'Desconect' });
        } catch (error) {
            return response.status(403).send({ info: "Desconected" });
        }
    }

}

module.exports = AuthController
