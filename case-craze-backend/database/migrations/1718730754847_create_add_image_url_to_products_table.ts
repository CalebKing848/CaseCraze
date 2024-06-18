import { BaseSchema } from '@adonisjs/lucid/schema'

export default class AddImageUrlToProducts extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('image_url').nullable()
      table.dropColumn('transaction_date')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('image_url')
    })
  }
}