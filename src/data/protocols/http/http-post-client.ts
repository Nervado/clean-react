export type HttpPostParams = {
  url: string
  data?: any
  params?: any
}

export interface HttpPostClient {
  post: (params: HttpPostParams) => Promise<void>
}
