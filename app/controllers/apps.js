import HttpErrors from 'http-errors'
import _ from 'lodash'
import Debug from 'debug'
import { sequelize, App } from '../models'

export async function listApps(ctx) {
  const apps = await App.findAll()

  ctx.body = {
    status: 200,
    data: apps,
  }
}

export async function findOne(ctx) {
  const { app_id } = ctx.params

  const app = await App.findById(app_id)

  if (!app) {
    throw new HttpErrors(404, `Not found app that id is ${app_id}`)
  }

  ctx.body = {
    status: 200,
    data: app,
  }
}
