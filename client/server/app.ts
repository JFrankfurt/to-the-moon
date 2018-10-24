import * as express from 'express'
import * as helmet from 'helmet'
import * as next from 'next'

import env from '../lib/env'

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const {PRODUCTION_URL_APP} = env
const ROOT_URL = dev ? `http://localhost:${port}` : PRODUCTION_URL_APP

const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    // give all Nextjs's request to Nextjs before anything else
    server.get('/_next/*', (req, res) => handle(req, res))
    server.get('/static/*', (req, res) => handle(req, res))

    server.use(helmet())
    server.use(express.json())

    if (!dev) {
        server.set('trust proxy', 1) // sets req.hostname, req.ip
    }

    server.get('/', async (req: any, res) => {
        console.log(req.headers)
        // send the user here to pay for their next game
        let redirectUrl = 'auth/game'
        // send the user here to play a game
        if (req.user) {
            redirectUrl = `game/${req.user.invoiceId}`
        }
        res.redirect(`${ROOT_URL}/${redirectUrl}`)
    })

    server.get('*', (req, res) => handle(req, res))

    server.listen(port, (err: any) => {
        if (err) {
            throw err
        }
        console.log(`> Ready on ${ROOT_URL}`)
    })
})
