import { HttpContext } from "@adonisjs/core/http";

export default class ProductsController {
    async index({ view }: HttpContext ) {
        return view.render('pages/products/list')
    }
}