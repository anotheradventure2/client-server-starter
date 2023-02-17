import {fetch$, getRandomResponse$} from 'common'
import {RecoilValue, selector, useRecoilRefresher_UNSTABLE, useRecoilValueLoadable} from 'recoil'

export const useRecoilQuery = <T>(
  query: RecoilValue<T>
): {loading: boolean; result: T | undefined; error: Error | undefined; refresh: () => void} => {
  const {state, contents} = useRecoilValueLoadable(query)
  const refresh = useRecoilRefresher_UNSTABLE(query)

  return {
    loading: state === 'loading',
    result: state === 'hasValue' ? contents : undefined,
    error: state === 'hasError' ? contents : undefined,
    refresh,
  }
}

export const randomNumberSelector = selector({
  key: 'randomNumber',
  get: async () => {
    const response = await fetch$({url: '/api/random?min=1&max=100', type: getRandomResponse$})
    return response.parsed.result
  },
})
