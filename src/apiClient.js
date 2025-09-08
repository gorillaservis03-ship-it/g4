import axios from 'axios'

const api = axios.create({ baseURL: '/api', timeout: 15000 })

api.interceptors.response.use(
  (r) => r,
  (err) => {
    const msg = err?.response?.data?.error || err.message || 'Request failed'
    return Promise.reject(new Error(msg))
  }
)

export async function apiGet(path, params) {
  const { data } = await api.get(path, { params })
  return data
}

export async function apiPost(path, body) {
  const { data } = await api.post(path, body)
  return data
}

// Shared labels so 'margin' is rendered simply as '%' everywhere
export const LABELS = {
  PERCENT: '%'
}
