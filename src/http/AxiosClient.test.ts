
import axios from 'axios'
import { AxiosClient } from './AxiosClient'

vi.mock('axios')

describe('AxiosClient', () => {
  let client: AxiosClient

  beforeAll(() => {
    client = new AxiosClient(axios)
  })

  test('calls axios get method', async () => {
    await client.get('http://localhost:3000/transactions')

    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/transactions')
  })

  test('calls axios post method', async () => {
    const payload = {
      name: 'nathan',
      email: 'nathan@test.com'
    }

    await client.post('http://localhost:3000/transactions', payload)

    expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/transactions', {
      name: 'nathan',
      email: 'nathan@test.com'
    })
  })
})
