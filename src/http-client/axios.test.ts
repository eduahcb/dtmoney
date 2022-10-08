
import axios from 'axios'
import { AxiosClient } from './axios'

vi.mock('axios')

describe('AxiosClient', () => {
  let client: AxiosClient

  afterEach(() => {
    vi.mocked(axios.create).mockClear()
    vi.spyOn(axios, 'get').mockClear()
    vi.spyOn(axios, 'post').mockClear()
  })

  test('should call axios create instance', () => {
    vi.mocked(axios.create).mockReturnThis()

    client = new AxiosClient()
    expect(axios.create).toHaveBeenCalledTimes(1)
  })

  test('should call axios get method', async () => {
    vi.mocked(axios.create).mockReturnThis()
    vi.spyOn(axios, 'get').mockResolvedValue({})

    client = new AxiosClient()

    await client.get('http://localhost:3000/transactions')

    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/transactions')
  })

  test('should reject axios get method', async () => {
    vi.mocked(axios.create).mockReturnThis()
    vi.spyOn(axios, 'get').mockRejectedValue({})

    client = new AxiosClient()

    const handle = async (): Promise<any> => client.get('http://localhost:3000/transactions')

    await expect(handle).rejects.toThrow()
  })

  test('should axios post method', async () => {
    vi.mocked(axios.create).mockReturnThis()
    vi.spyOn(axios, 'post').mockResolvedValue({})

    const payload = {
      name: 'nathan',
      email: 'nathan@test.com'
    }

    client = new AxiosClient()

    await client.post('http://localhost:3000/transactions', payload)

    expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/transactions', {
      name: 'nathan',
      email: 'nathan@test.com'
    })
  })

  test('should reject axios post method', async () => {
    vi.mocked(axios.create).mockReturnThis()
    vi.spyOn(axios, 'post').mockRejectedValue({})

    const payload = {
      name: 'nathan',
      email: 'nathan@test.com'
    }

    client = new AxiosClient()

    const handle = async (): Promise<any> => client.post('http://localhost:3000/transactions', payload)

    await expect(handle).rejects.toThrow()
  })
})
