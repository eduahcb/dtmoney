/* eslint-disable @typescript-eslint/no-invalid-void-type */
export interface IHttpClient {
  get: <T = any > (path: string) => Promise<T>
  post: <T = any> (path: string, payload: any) => Promise<T>
}
