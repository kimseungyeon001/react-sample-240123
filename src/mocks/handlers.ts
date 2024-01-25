import { http, HttpResponse, delay } from 'msw'
import { config } from '../config'

const baseUrl = config.baseUrl

export function buildFetchMain() {
  return http.get(`${baseUrl}/main`, async () => {
    return HttpResponse.json({ title: 'hello world!' }, { status: 200 })
  })
}

export function buildFetchMainLoading() {
  return http.get(`${baseUrl}/main`, async () => {
    await delay(3000)
  })
}

export function buildFetchMainError() {
  return http.get(`${baseUrl}/main`, async () => {
    return HttpResponse.error()
  })
}

export function buildUpdateMain() {
  return http.post(`${baseUrl}/main`, () => {
    console.log('updated main')
  })
}

export const handlers = [buildFetchMainError(), buildUpdateMain()]
