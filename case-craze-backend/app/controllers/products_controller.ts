import Category from '#models/category'
import Product from '#models/product'
import { createProductValidator } from '#validators/products'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
  async index({ view }: HttpContext) {
    const categories = await Category.all()
    const products = await Product.query().preload('category')

    return view.render('pages/products/list', {
      categories,
      products,
    })
    
  }

  async getAllProducts({ response }: HttpContext) {
    const products = await Product.all();
    return response.json(products);
  }

  async create({ view }: HttpContext) {
    const categories = await Category.all()
    return view.render('pages/products/create', { categories })
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createProductValidator)
    const category = await Category.findOrFail(payload.categoryId)

    await category.related('products').create({
      title: payload.title,
      amount: payload.amount,
      imageUrl: payload.imageUrl, 
    })

    response.redirect('/')
  }
}