/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
// import IndexController from '#controllers/index_controller';

// router.on('/').render('pages/index')

router.get('/', async ({ response }) => {
    return response.redirect().toRoute('ordem_crescente')
  })


router.get('/ordem-crescente', async (ctx) => {
    return ctx.view.render('pages/site/ordem_crescente')
}).as('ordem_crescente')

router.get('/calculo-quadrado', async (ctx) => {
    return ctx.view.render('pages/site/calculo_quadrado')
}).as('calculo_quadrado')

router.get('/par-impar', async (ctx) => {
    return ctx.view.render('pages/site/par_impar')
}).as('par_impar')

router.get('/calcular-media', async (ctx) => {
    return ctx.view.render('pages/site/calculo_media')
}).as('calcular_media')

router.get('/quiz-banco-de-dados', async (ctx) => {
    return ctx.view.render('pages/site/quiz_db')
}).as('quiz_db')

router.get('/quiz-programacao-orientada-objeto', async (ctx) => {
    return ctx.view.render('pages/site/quiz_poo')
}).as('quiz_poo')

router.get('/quiz-html', async (ctx) => {
    return ctx.view.render('pages/site/quiz_html')
}).as('quiz_html')

router.get('/quiz-css', async (ctx) => {
    return ctx.view.render('pages/site/quiz_css')
}).as('quiz_css')

router.get('/quiz-javascript', async (ctx) => {
    return ctx.view.render('pages/site/quiz_js')
}).as('quiz_js')




