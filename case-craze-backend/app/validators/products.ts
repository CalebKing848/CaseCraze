import vine from '@vinejs/vine'

export const createProductValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(4),
    amount: vine.number().positive(),
    imageUrl: vine.string().url(),
    categoryId: vine.number(),
  })
)
