/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import ProductsController from '#controllers/products_controller'
import SessionController from '#controllers/session_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.get('/', [ProductsController, 'index']).use(middleware.auth())

router.on('/login').render('pages/login')
router.post('/login', [SessionController, 'store'])