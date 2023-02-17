import 'whatwg-fetch'
import '@testing-library/jest-dom'
import {server} from './src/mockServer'

beforeAll(() => server.listen())
beforeEach(() => server.resetHandlers())
afterAll(() => server.close())
