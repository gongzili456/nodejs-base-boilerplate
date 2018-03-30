import Router from 'koa-router'
import Joi from 'joi'
import Debug from 'debug'

const debug = new Debug('app:app:routers:other:')

export default (validate, controllers) => {
  const router = new Router()

  router.get('/apps', controllers.apps.listApps)
  router.get('/apps/:app_id', controllers.apps.findOne)

  return router
}
