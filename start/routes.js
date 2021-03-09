'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager');

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

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home.home');

// Take login page

Route.get('/app', 'AppController.indexLoginFront').as('app.indexLoginFront');

// Show documents on front

Route.get('/documents', 'DocumentController.index').as('documents.index');

// Show links on front

Route.get('/links', 'LinkController.index').as('links.index');

// Authentication anyone

Route.post('/register', 'AuthController.register').middleware('guest')

Route.post('/authenticate', 'AuthController.authenticate').middleware('guest');

// Authentication somente logged

Route.get('/user/:id?', 'AuthController.show').middleware('auth');

Route.get('/logout', 'AuthController.logout').middleware('auth');

// Route.post('/register', 'AuthController.register').middleware('auth');

// Route.post('/authenticate', 'AuthController.authenticate').middleware('auth');

// Route.get('/app' , 'AppController.index')
// .middleware(['auth']);

// CRUD Documents

// Route.group(() => {
//     Route.resource('documents', 'DocumentController').middleware('auth');
// });

Route.get('/documents', 'DocumentController.indexConsole')
// .middleware(['auth']);

Route.get('/documents/:id', 'DocumentController.show')
// .middleware(['auth']);

// Show create page on front

Route.get('/documents/create', 'DocumentController.create').as('documents.create');

// -----------------------------------------------------------------------------

//
Route.post('/documents', 'DocumentController.storeFront').as('documents.storeFront')
//
Route.post('/documents', 'DocumentController.store').as('documents.store')
// .middleware(['auth']);

Route.put('/documents/:id', 'DocumentController.update').middleware(['auth']);

Route.delete('/documents/:id', 'DocumentController.delete').middleware(['auth']);

// CRUD Links

Route.get('/links', 'LinkController.indexConsole')
.middleware(['auth']);

Route.get('/links/:id', 'LinkController.show')
// .middleware(['auth']);

// Show create page on front

Route.get('/links/create', 'LinkController.create').as('links.create');

// -----------------------------------------------------------------------------

//
 Route.post('/links', 'LinkController.storeFront').as('links.storeFront')
//
Route.post('/links', 'LinkController.store').as('links.store')
//  .middleware(['auth']);

Route.put('/links/:id', 'LinkController.update').middleware(['auth']);

Route.delete('/links/:id', 'LinkController.delete').middleware(['auth']);







