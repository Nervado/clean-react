import { HttpPostParams } from '@/data/protocols/http'
import axios from 'axios'

export class AxiosHttpClient {
  async post (params: HttpPostParams<any>): Promise<void> {
    const { url, body } = params
    body ? await axios.post(url, body) : await axios.post(url)
  }
}
