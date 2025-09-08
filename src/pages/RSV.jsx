import { useState } from 'react'
import VinForm from '../components/VinForm'
import ResultCard from '../components/ResultCard'
import Loader from '../components/Loader'
import { apiGet } from '../apiClient'

export default function RSV() {
  const [res, setRes] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSearch = async (vin) => {
    if (!vin) return
    try {
      setLoading(true); setError('')
      const data = await apiGet('/rsv', { vin })
      setRes(data)
    } catch (e) {
      setError(e.message)
    } finally { setLoading(false) }
  }

  return (
    <div className="space-y-4">
      <VinForm onSubmit={onSearch} placeholder="VIN для RSV…" />
      {loading && <Loader text="Запит до RSV…" />}
      {error && <div className="text-red-600">{error}</div>}
      {res && <ResultCard title="RSV Відповідь" rows={Object.entries(res)} />}
    </div>
  )
}
