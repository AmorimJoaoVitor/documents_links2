'use strict'


const Document = use('App/Models/Document')
class DocumentController {

    async create({ view }) {
        return view.render('document.create');
    }

    async store({ request, auth, response }) {
        // const { id } = auth.users;

        const dataToCreate = request.only(['name', 'extension', 'size', 'directory', 'archives', 'fkUser']);
        const document = await Document.create({ user_id: auth.user.id, ...dataToCreate });

        return document;
        return await Document.create(dataToCreate);
    }

    async storeFront({ request, auth, response }) {
        // const { id } = auth.users;

        const dataToCreate = request.only(['name', 'extension', 'size', 'directory', 'archives', 'fkUser']);
        const document = await Document.create({ user_id: auth.user.id, ...dataToCreate });
        
        return response.route('documents.index');
        return document;
        return await Document.create(dataToCreate);
    }

    async index({ view }) {
        const documents = await Document.all();
        return view.render('document.index', {documents: documents.toJSON()});
    };

    async indexConsole() {
        return await Document.query().with('user').fetch();
    }
    async show({ params }) {

        const document = await Document.findOrFail(params.id);
        return document;
    }
    async update({ params, request }) {

        const document = await Document.find(params.id);

        const dataToUpdate = request.only(['name', 'extension', 'size', 'directory', 'archives', 'fkUser']);

        document.merge(dataToUpdate);

        await document.save();

        return document;
    }
    async delete({ params, auth }) {

        const document = await Document.find(params.id);

        if (document.user_id != auth.user_id) {
            return response.status(401);
        }

        await document.delete();

        return {
            message: "Documento excluído"
        };

    }



}

module.exports = DocumentController
