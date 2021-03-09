'use strict'


const Link = use('App/Models/Link')
class LinkController {

    async create({ view }) {
        return view.render('link.create');
    }

    async store({ request, auth, response }) {
        // const { id } = auth.users;

        const dataToCreate = request.only(['url']);
        const link = await Link.create({ user_id: auth.user.id, ...dataToCreate });

        return link;
        return await Link.create(dataToCreate);
    }

    async storeFront({ request, auth, response }) {
        // const { id } = auth.users;

        const dataToCreate = request.only(['url']);
        const link = await Link.create({ user_id: auth.user.id, ...dataToCreate });
        
        return response.route('links.index');
        // return link;
        return await Link.create(dataToCreate);
    }

    async index({ view }) {
        const links = await Link.all();
        return view.render('link.index', {Links: links.toJSON()});
    };

    async indexConsole() {
        return await Link.query().with('user').fetch();
    }
    async show({ params }) {

        const link = await Link.findOrFail(params.id);
        return link;
    }
    async update({ params, request }) {

        const link = await Link.find(params.id);

        const dataToUpdate = request.only(['name', 'extension', 'size', 'directory', 'archives', 'fkUser']);

        link.merge(dataToUpdate);

        await link.save();

        return link;
    }
    async delete({ params, auth }) {

        const link = await Link.find(params.id);

        if (link.user_id != auth.user_id) {
            return response.status(401);
        }

        await link.delete();

        return {
            message: "Link excluído"
        };

    }



}

module.exports = LinkController
