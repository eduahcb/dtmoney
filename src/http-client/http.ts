export type HttpResponse<T = any> = {
  data: T
  status: number
}

export interface HttpClient {
  get: <T = any > (path: string) => Promise<HttpResponse<T>>
  post: <T = any> (path: string, payload: any) => Promise<HttpResponse<T>>
}
