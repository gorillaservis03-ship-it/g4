export const allowCors = (fn) => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  if (req.method === 'OPTIONS') return res.status(200).end()
  return await fn(req, res)
}

export async function fetchJSON(url, options = {}) {
  const r = await fetch(url, options)
  const text = await r.text()
  if (!r.ok) {
    throw new Error(`Upstream ${r.status}: ${text.slice(0,200)}`)
  }
  try { return JSON.parse(text) } catch { return { raw: text } }
}
