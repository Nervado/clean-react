import { HttpPostClient, HttpPostParams, HttpResponse } from '@/data/protocols/http'
import axios from 'axios'

// adapter pathern
export class AxiosHttpClient implements HttpPostClient<HttpPostParams<any>, HttpResponse<any>> {
  async post (params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const { url, body } = params
    const { status, data } = body ? await axios.post(url, body) : await axios.post(url)
    return {
      statusCode: status,
      body: data
    }
  }
}
