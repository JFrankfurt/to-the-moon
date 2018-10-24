import {Express} from 'express'

export default (server: Express) => {
    server.get('endpoint', (_, res) => res.status(200).send('api access only'))
}
