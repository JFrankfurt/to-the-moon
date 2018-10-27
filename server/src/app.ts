import * as cors from 'cors'
import 'dotenv/config'
import * as express from 'express'
import * as helmet from 'helmet'
import * as mongoose from 'mongoose'
import api from './api'

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 8000
const {PRODUCTION_URL_APP, PRODUCTION_URL_API} = process.env
const ROOT_URL = dev ? `http://localhost:${port}` : PRODUCTION_URL_API

const server = express()
const appPort = process.env.APP_PORT || 3000
const origin = dev ? `http://localhost:${appPort}` : PRODUCTION_URL_APP
server.use(cors({origin, credentials: true}))

server.use(helmet())

server.use(express.json())

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
})

api(server)

server.get('*', (_, res) => res.sendStatus(403))

server.listen(port, err => {
    if (err) {
        throw err
    }
    console.log(`> Ready on ${ROOT_URL}`)
})
