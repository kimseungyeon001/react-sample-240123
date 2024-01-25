import { http, HttpResponse, delay } from 'msw'
import { config } from '../config'

const baseUrl = config.baseUrl

function buildFetchMain() {
  return http.get(`${baseUrl}/main`, async () => {
    await delay(3000)
    return HttpResponse.json({
      title: 'hello world!',
    })
  })
}

function buildUpdateMain() {
  return http.post(`${baseUrl}/main`, () => {
    console.log('updated main')
  })
}

export const handlers = [buildFetchMain(), buildUpdateMain()]
