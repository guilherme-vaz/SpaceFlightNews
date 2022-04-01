import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Article extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public featured: boolean

  @column()
  public title: string

  @column()
  public url: string

  @column()
  public imageUrl: string

  @column()
  public newsSite: string

  @column()
  public summary: string

  @column()
  public publishedAt: string
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
