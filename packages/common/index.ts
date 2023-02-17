import {z, ZodType} from 'zod'

export const getRandomResponse$ = z.object({result: z.number()})
export type GetRandomResponse = z.infer<typeof getRandomResponse$>

export const fetch$ = async <T>(
  opts: RequestInit & {url: string; type: ZodType<T>}
): Promise<Response & {parsed: T}> => {
  const response = await fetch(opts.url, opts)
  try {
    const parseResult = opts.type.safeParse(await response.json())
    if (!parseResult.success)
      throw new Error(`failed to parse request to \`${opts.url}\` with error \`${parseResult.error}\``)
    return {...response, parsed: parseResult.data}
  } catch (e) {
    throw new Error(`failed to parse request to \`${opts.url}\` with error \`${(e as Error)?.message}\``)
  }
}
