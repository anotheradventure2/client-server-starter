import {createApp} from './app.js'

const server = createApp({
  logger: {
    transport: {
      options: {
        translateTime: 'HH:MM:ss.l Z',
        ignore: 'pid,hostname',
      },
      target: 'pino-pretty',
    },
  },
})

server.listen({port: 3000}, (err: Error | null) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})
