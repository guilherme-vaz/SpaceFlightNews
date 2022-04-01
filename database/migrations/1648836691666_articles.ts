import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Articles extends BaseSchema {
  protected tableName = 'articles'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.boolean('featured')
      table.string('title').notNullable()
      table.string('url')
      table.string('image_url')
      table.string('news_site')
      table.string('summary')
      table.string('published_at')
      table.timestamps(true)
      // Implements Launches and Events
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
