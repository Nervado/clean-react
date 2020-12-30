import { HttpPostClient, HttpPostParams } from 'data/protocols/http/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {
  public url?: string

  async post (params: HttpPostParams): Promise<void> {
    this.url = params.url
    return await Promise.resolve()
  }
}