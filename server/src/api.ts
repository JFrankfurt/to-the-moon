import {Express} from 'express'
import lightning from './lightning'

export default (server: Express) => {
    server.get('endpoint', (_, res) => res.status(200).send('api access only'))
    lightning(server)
}
