import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Article } from 'App/Models'
import { StoreValidator, UpdateValidator } from 'App/Validators/Article'

export default class ArticlesController {
  public async index({}: HttpContextContract) {
    const articles = await Article.all()
    return articles
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const article = await Article.create(data)
    return article
  }

  public async show({ params }: HttpContextContract) {
    const article = await Article.findOrFail(params.id)
    return article
  }

  public async update({ params, request }: HttpContextContract) {
    const article = await Article.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)
    await article.merge(data).save()
    return article
  }

  public async destroy({ params }: HttpContextContract) {
    const article = await Article.findOrFail(params.id)
    article.delete()
    return JSON.stringify({ message: 'Article deleted successfully' })
  }
}
