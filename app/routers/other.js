import Router from 'koa-router'
import Joi from 'joi'
import Debug from 'debug'

const debug = new Debug('app:app:routers:other:')

export default (validate, controllers) => {
    const router = new Router()

    router.get('/other', async (ctx, next) => {
        ctx.body = {
            statusCode: 200,
            data: 'Other Router.'
        }
    })
    return router
}