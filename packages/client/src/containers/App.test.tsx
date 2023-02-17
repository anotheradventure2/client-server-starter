import {fireEvent, render} from '@testing-library/react'
import {GetRandomResponse} from 'common'
import {rest} from 'msw'

import {App} from '@/containers/App'
import {server} from '@/mockServer'

describe('App', () => {
  it('should display a random number on success', async () => {
    server.use(rest.get('/api/random', (req, res, ctx) => res(ctx.json({result: 7} satisfies GetRandomResponse))))
    const {findByText} = render(<App />)
    expect(await findByText('Random Number: 7')).not.toBeUndefined()
  })

  it('should refresh number', async () => {
    server.use(rest.get('/api/random', (req, res, ctx) => res(ctx.json({result: 7} satisfies GetRandomResponse))))
    const {findByText} = render(<App />)
    expect(await findByText('Random Number: 7')).not.toBeUndefined()

    server.use(rest.get('/api/random', (req, res, ctx) => res(ctx.json({result: 8} satisfies GetRandomResponse))))
    const refreshButton = await findByText('New Random Number')
    fireEvent.click(refreshButton)

    expect(await findByText('Random Number: 8')).not.toBeUndefined()
  })
})
