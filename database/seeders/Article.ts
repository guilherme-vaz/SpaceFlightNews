import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import axios from 'axios'

export default class ArticleSeeder extends BaseSeeder {
  public async run() {
    const result = await axios.get('https://api.spaceflightnewsapi.net/v3/articles')
    console.log(result)
    // Write your database queries inside the run method
  }
}
