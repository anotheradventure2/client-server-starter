import type {GetRandomResponse} from 'common'
import {z} from 'zod'

import type {FastifyPluginAsyncZod} from '../util.js'

export const routes: FastifyPluginAsyncZod = async fastify => {
  fastify.route({
    method: 'GET',
    url: '/api/random',
    schema: {
      querystring: z.object({
        min: z.string(),
        max: z.string(),
      }),
    },
    handler: (req, res) => {
      setTimeout(
        () =>
          res.code(200).send({
            result: Math.floor(
              Math.random() * (Number(req.query.max) - Number(req.query.min) + 1) + Number(req.query.min)
            ),
          } satisfies GetRandomResponse),
        250
      )
    },
  })
}
