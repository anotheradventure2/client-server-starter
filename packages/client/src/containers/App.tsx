import {fetch$, getRandomResponse$} from 'common'
import {useAsync} from 'react-async-hook'
import {RecoilRoot} from 'recoil'

import {RandomNumber} from '@/components/RandomNumber'
import {randomNumberSelector, useRecoilQuery} from '@/state'

export const App: React.FC = () => (
  <RecoilRoot>
    <AppContents />
  </RecoilRoot>
)

const AppContents: React.FC = () => {
  // const {loading, result, error, execute} = useAsync(
  //   () => fetch$({url: '/api/random?min=1&max=100', type: getRandomResponse$}),
  //   []
  // )
  const {loading, result, error, refresh} = useRecoilQuery(randomNumberSelector)

  return <RandomNumber loading={loading} randomNumber={result} error={error} onRefreshClicked={refresh} />
}
