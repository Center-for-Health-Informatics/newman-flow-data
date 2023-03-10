import { env } from 'node:process'
import Server from './lib/server.js'

console.log(`NODE_ENV is ${env.NODE_ENV}`)

const server = new Server({
  host: '::1',
  port: 3569
})
server.on('listening', (address, port) => console.log(`listening on ${address}:${port}`))
