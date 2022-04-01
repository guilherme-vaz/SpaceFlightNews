import Route from '@ioc:Adonis/Core/Route'
import './articles'

Route.get('/', async () => {
  return { hello: 'world' }
})
