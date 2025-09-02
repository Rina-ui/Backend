/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import BlogController from '#controllers/blog_controller'

router.on('/').render('pages/home')

router.get('/movie', async (ctx) => {
    ctx.view.share({movie: 'My Movie'})
    return ctx.view.render('pages/movie')
})


router.get('/blog', [BlogController, 'index']).as('home')