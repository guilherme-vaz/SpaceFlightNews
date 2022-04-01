import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    featured: schema.boolean(),
    title: schema.string({ trim: true }),
    url: schema.string({ trim: true }),
    imageUrl: schema.string({ trim: true }),
    newsSite: schema.string({ trim: true }),
    summary: schema.string({ trim: true }),
    publishedAt: schema.string({ trim: true }),
  })

  public messages = {}
}
