import { HttpClient, HttpResponse } from 'http-client'

/* eslint-disable @typescript-eslint/no-useless-constructor */
export class ClientInMemory implements HttpClient {
  private readonly client: any

  constructor (baseURL?: string, options?: any) {

  }

  async get<T = any>(path: string): Promise<HttpResponse<T>> {
    let data: any
    const status: number = 200

    return Promise.resolve<HttpResponse>({ data, status })
  }

  async post<T = any>(path: string, payload = {}): Promise<HttpResponse<T>> {
    let data: any
    const status: number = 200

    return Promise.resolve<HttpResponse>({ data, status })
  }
}
