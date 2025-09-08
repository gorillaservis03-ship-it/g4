import { allowCors, fetchJSON } from './_utils.js'

export default allowCors(async function handler(req, res) {
  const { vin } = req.query
  if (!vin) return res.status(400).json({ error: 'VIN is required' })

  const API_KEY = process.env.DATAOVOZIDLECH_API_KEY
  if (!API_KEY) return res.status(500).json({ error: 'DATAOVOZIDLECH_API_KEY is missing' })

  // TODO: замініть на реальний endpoint dataovozidlech.cz (за їхньою документацією)
  const url = `https://api.dataovozidlech.cz/v1/vin?vin=${encodeURIComponent(vin)}`

  try {
    const data = await fetchJSON(url, {
      headers: { Authorization: `Bearer ${API_KEY}` }
    })

    const normalized = {
      vin: vin,
      make: data?.make || data?.znacka || null,
      model: data?.model || null,
      year: data?.rok_vyroby || data?.year || null,
      fuel: data?.palivo || data?.fuel || null,
      engine_capacity: data?.objem || data?.engine_capacity || null,
      power_kw: data?.vykon_kw || data?.power_kw || null,
      color: data?.barva || data?.color || null,
      first_registration: data?.prvni_registrace || data?.first_registration || null,
      origin_country: data?.zeme_puvodu || data?.origin_country || null,
      raw: data
    }
    res.status(200).json(normalized)
  } catch (e) {
    res.status(502).json({ error: e.message })
  }
})
