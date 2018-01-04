import Koa from 'koa'
import Boom from 'boom'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import Debug from 'debug'
import router from './routers'

const debug = new Debug('app:app:index:')

const APP = new Koa()

/**
 * Logger
 */
APP.use(logger())

/**
 * Error Handle
 */
APP.use(async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        debug(`Request handle process occurred error, status is ${error.status}`)
        debug(error)
        ctx.status = error.status || 500
        ctx.body = new Boom(error.message, {
            statusCode: ctx.status
        }).output.payload
    }
})

/**
 * Parse Request Body
 */
APP.use(bodyParser())

/**
 * Router
 */
APP.use(router().routes())
APP.use(router().allowedMethods())

/**
 * Start listen
 */
const PORT = process.env.PORT || 8000
APP.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})