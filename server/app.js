require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const next = require('next')
const api = require('./api')
const lightning = require('./lightning')

const dbUrl = process.env.MONGO_URL || 'some fallback mongodb url'
const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 8000

const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // give all Nextjs's request to Nextjs before anything else
  server.get('/_next/*', (req, res) => handle(req, res))
  server.get('/static/*', (req, res) => handle(req, res))
  server.use(express.json())
  try {
    mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useFindAndModify: false,
    })
  } catch (error) {
    console.error(error)
  }

  lightning(server)
  api(server)

  if (!dev) {
    server.set('trust proxy', 1) // sets req.hostname, req.ip
  }

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) {
      throw err
    }
    console.log(`> app server ready`)
  })
})
