// import * as cors from 'cors'
import 'dotenv/config'
import * as express from 'express'
import * as helmet from 'helmet'
import * as mongoose from 'mongoose'
import api from './api';
// import api from './api'

const port = process.env.PORT || 8000
const ROOT_URL = `http://localhost:${port}`
const server = express()

// server.use(cors())

server.use(helmet())

server.use(express.json())

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
})


api(server)

server.get('*', (_, res) => {
    res.sendStatus(403)
})

server.listen(port as number, '0.0.0.0', err => {
    if (err) {
        throw err
    }
    console.log(`> Ready on ${ROOT_URL}`)
})
