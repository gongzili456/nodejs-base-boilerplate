import Router from 'koa-router'
import RequireDir from 'require-dir'
import validator from 'koa-joi-validator'
import Joi from 'joi'
import Debug from 'debug'
import HttpError from 'standard-http-error'

const debug = new Debug('app:app:routers:index:')

const ROUTERS = new RequireDir()
const CONTROLLERS = new RequireDir('../controllers', {
    recurse: true,
})

debug('ROUTERS: ', ROUTERS)

export default () => { 
    const router = new Router({
        prefix: '/api/v1',
    })

    /**
     * Load other routers
     */
    Object.keys(ROUTERS).map(rkey => {
        const _router = ROUTERS[rkey](validator.validate, CONTROLLERS)
        return router.use('', _router.routes(), _router.allowedMethods())
    })

    /**
     * Man Router
     */
    router.get('/hello', async (ctx, next) => {
        ctx.body = {
            statusCode: 200,
            data: 'Hello World.',
        }
    })

    router.get('/error', async (ctx, next) => {
        throw new HttpError(400)
    })

    return router
}