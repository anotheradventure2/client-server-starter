import type {FastifyPluginAsync, FastifyPluginOptions, RawServerBase, RawServerDefault} from 'fastify'
import type {ZodTypeProvider} from 'fastify-type-provider-zod'

export type FastifyPluginAsyncZod<
  Options extends FastifyPluginOptions = Record<never, never>,
  Server extends RawServerBase = RawServerDefault
> = FastifyPluginAsync<Options, Server, ZodTypeProvider>
