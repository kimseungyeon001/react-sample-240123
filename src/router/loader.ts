import { defer } from 'react-router-dom'
import { config } from '../config'

const baseUrl = config.baseUrl

export function fetchMain() {
  const responsePromise = fetch(`${baseUrl}/main`, { method: 'GET' }).then(
    (res) => res.json(),
  )
  return defer({
    response: responsePromise,
  })
}

export function updateMain() {}
