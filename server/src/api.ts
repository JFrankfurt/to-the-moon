import {Express} from 'express'
import lightning from './lightning'

export default (server: Express) => {
    lightning(server)
    server.get('/', (_, res) => res.status(200).send('api access only'))
}
