import {fastify, FastifyServerOptions} from 'fastify'
import {serializerCompiler, validatorCompiler, ZodTypeProvider} from 'fastify-type-provider-zod'

import {routes} from './routes/routes.js'

export const createApp = (opts: FastifyServerOptions) => {
  const app = fastify(opts).withTypeProvider<ZodTypeProvider>()
  app.setValidatorCompiler(validatorCompiler)
  app.setSerializerCompiler(serializerCompiler)
  app.register(routes)
  return app
}
