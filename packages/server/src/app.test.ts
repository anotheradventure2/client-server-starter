import {describe, it, expect} from '@jest/globals'

import {createApp} from './app.js'

describe('/api/random', () => {
  const app = createApp({})

  it('should return number within bounds', async () => {
    const response = await app.inject({method: 'GET', url: '/api/random?min=5&max=10'})
    const result = JSON.parse(response.body).result

    expect(result).toBeGreaterThanOrEqual(5)
    expect(result).toBeLessThanOrEqual(10)
  })
})
