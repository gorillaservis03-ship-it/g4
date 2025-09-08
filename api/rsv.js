import { allowCors, fetchJSON } from './_utils.js'

export default allowCors(async function handler(req, res) {
  const { vin } = req.query
  if (!vin) return res.status(400).json({ error: 'VIN is required' })

  const API_KEY = process.env.RSV_API_KEY
  if (!API_KEY) return res.status(500).json({ error: 'RSV_API_KEY is missing' })

  // TODO: замініть на реальний endpoint RSV
  const url = `https://api.rsv.example/vin/${encodeURIComponent(vin)}`

  try {
    const data = await fetchJSON(url, {
      headers: { 'x-api-key': API_KEY }
    })
    res.status(200).json(data)
  } catch (e) {
    res.status(502).json({ error: e.message })
  }
})
