import express from 'express'
import next from 'next'
import mongoose from 'mongoose'
import api from './api'

import env from '../lib/env'

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 8000
const { PRODUCTION_URL_APP } = env
const ROOT_URL = dev ? `http://localhost:${port}` : PRODUCTION_URL_APP

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // give all Nextjs's request to Nextjs before anything else
  server.get('/_next/*', (req, res) => handle(req, res))
  server.get('/static/*', (req, res) => handle(req, res))

  server.use(express.json())

  mongoose.connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
    }
  )

  api(server)

  if (!dev) {
    server.set('trust proxy', 1) // sets req.hostname, req.ip
  }

  server.get('/', async (_, res) => res.redirect(`${ROOT_URL}/arcade`))

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err: any) => {
    if (err) {
      throw err
    }
    console.log(`> Ready on ${ROOT_URL}`)
  })
})
