import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import { HttpClient, HttpResponse } from './http'

export class AxiosClient implements HttpClient {
  private readonly client: AxiosInstance

  constructor (baseURL?: string, options?: AxiosRequestConfig) {
    this.client = axios.create({
      baseURL,
      ...options
    })
  }

  async get<T = any>(path: string): Promise<HttpResponse<T>> {
    try {
      const { data, status } = await this.client.get<T>(path)

      return Promise.resolve<HttpResponse>({ data, status })
    } catch (error: any) {
      return Promise.reject(new Error(error.message))
    }
  }

  async post<T = any>(path: string, payload = {}): Promise<HttpResponse<T>> {
    try {
      const { data, status } = await this.client.post(path, payload)

      return Promise.resolve<HttpResponse>({ data, status })
    } catch (error: any) {
      return Promise.reject(new Error(error.message))
    }
  }
}
