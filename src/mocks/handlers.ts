import { http, HttpResponse, delay } from 'msw'
import { config } from '../config'

const baseUrl = config.baseUrl

export function buildFetchMain() {
  return http.get(`${baseUrl}/main`, async () => {
    await delay(3000)
    return HttpResponse.json({ title: 'hello world!' })
  })
}

export function buildFetchMainLoading() {
  return http.get(`${baseUrl}/main`, async () => {
    await delay('infinite')
  })
}

export function buildFetchMainError() {
  return http.get(`${baseUrl}/main`, async () => {
    await delay(3000)
    return HttpResponse.error()
  })
}

export function buildUpdateMain() {
  return http.post(`${baseUrl}/main`, () => {
    console.log('updated main')
  })
}

export const handlers = [buildFetchMain(), buildUpdateMain()]
