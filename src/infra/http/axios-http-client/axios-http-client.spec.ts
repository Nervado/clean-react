import { AxiosHttpClient } from '.'
import axios from 'axios'
import faker from 'faker'
import { HttpPostParams } from '@/data/protocols/http'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

const mockedResult = {
  data: faker.random.objectElement(),
  status: faker.random.number()
}

mockedAxios.post.mockResolvedValue(mockedResult)

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL and verb', async () => {
    const { url } = mockPostRequest()
    const sut = makeSut()
    await sut.post({ url })
    expect(mockedAxios.post).toHaveBeenCalledWith(url)
  })

  test('Should call axios with correct body', async () => {
    const request = mockPostRequest()
    const sut = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should return correct statusCode and body', async () => {
    const sut = makeSut()
    const result = await sut.post(mockPostRequest())
    expect(result).toEqual({
      statusCode: mockedResult.status,
      body: mockedResult.data
    })
  })
})