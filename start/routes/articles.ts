/* eslint-disable prettier/prettier */
import Route from '@ioc:Adonis/Core/Route'

Route.get('/articles', 'Article/main.index')
Route.post('/articles', 'Article/main.store')
Route.get('/articles/:id', 'Article/main.show')
Route.put('/articles/:id', 'Article/main.update')
Route.delete('/articles/:id', 'Article/main.destroy')