/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ProductsController from '#controllers/products_controller'
import router from '@adonisjs/core/services/router'

// router.on('/').render('pages/home')

router.get('/', [ProductsController, 'index'])
