
import Route from '@ioc:Adonis/Core/Route'
Route.get('/que', 'DataStructuresController.introduction')
Route.any('', async () => {
  return { error: 'Page Not Found' }
})
