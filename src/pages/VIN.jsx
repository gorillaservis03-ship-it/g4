import { useState } from 'react'
import VinForm from '../components/VinForm'
import ResultCard from '../components/ResultCard'
import Loader from '../components/Loader'
import { apiGet } from '../apiClient'

export default function VIN() {
  const [res, setRes] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSearch = async (vin) => {
    if (!vin) return
    try {
      setLoading(true); setError('')
      const data = await apiGet('/dataovozidlech', { vin })
      setRes(data)
    } catch (e) {
      setError(e.message)
    } finally { setLoading(false) }
  }

  return (
    <div className="space-y-4">
      <VinForm onSubmit={onSearch} />
      {loading && <Loader text="Шукаємо у dataovozidlech.cz…" />}
      {error && <div className="text-red-600">{error}</div>}
      {res && (
        <ResultCard
          title={`VIN: ${res?.vin || '—'}`}
          rows={Object.entries({
            značky: res?.make,
            модель: res?.model,
            рік: res?.year,
            паливо: res?.fuel,
            кубатура: res?.engine_capacity,
            потужність: res?.power_kw ? res.power_kw + ' kW' : undefined,
            колір: res?.color,
            дата_реєстрації: res?.first_registration,
            країна_походження: res?.origin_country
          }).filter(([,v]) => v != null)}
        />
      )}
    </div>
  )
}
