/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosInstance, AxiosResponse } from 'axios'

import { IHttpClient } from './IHttpClient'

export class AxiosClient implements IHttpClient {
  private readonly client: AxiosInstance

  constructor (client: AxiosInstance) {
    this.client = client
  }

  async get<AxiosResponse>(path: string): Promise<AxiosResponse> {
    return this.client.get(path)
  }

  async post<AxiosResponse>(path: string, payload = {}): Promise<AxiosResponse> {
    return this.client.post(path, payload)
  }
}
