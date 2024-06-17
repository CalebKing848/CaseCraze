// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from "@adonisjs/core/http";

export default class ProductsController {

    async index({ request }: HttpContext ) {
        return `Hello world from ${request.url()} endpoint`
    }
}