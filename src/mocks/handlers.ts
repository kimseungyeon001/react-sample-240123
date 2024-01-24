import { http } from 'msw'

export const handlers = [
  http.get('/fetch', () => {
    console.log('test')
  }),
]
