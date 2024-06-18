import Category from '#models/category'
import Product from '#models/product'
import { createExpenseValidator } from '#validators/products'
import type { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon'

export default class ProductsController {
  async index({ view }: HttpContext) {
    const categories = await Category.all()
    const products = await Product.query().preload('category')

    return view.render('pages/products/list', {
      categories,
      products,
    })
  }

  async create({ view }: HttpContext) {
    const categories = await Category.all()
    return view.render('pages/products/create', { categories })
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createExpenseValidator)
    const category = await Category.findOrFail(payload.categoryId)

    await category.related('products').create({
      title: payload.title,
      amount: payload.amount,
      transactionDate: DateTime.fromJSDate(payload.transactionDate),
    })

    response.redirect('/')
  }
}