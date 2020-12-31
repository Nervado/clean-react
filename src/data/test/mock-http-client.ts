import { HttpPostClient, HttpPostParams } from '@/data/protocols/http/http-post-client'
import { HttpResponse, HttpStatusCode } from '../protocols/http/http-response'

export class HttpPostClientSpy implements HttpPostClient {
  public url?: string
  public body?: object

  public response: HttpResponse = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url
    this.body = params.body
    return await Promise.resolve(this.response)
  }
}
