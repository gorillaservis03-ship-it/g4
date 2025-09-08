import { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import ResultCard from '../components/ResultCard'
import { apiGet } from '../apiClient'

export default function Cars() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const data = await apiGet('/health')
        setItems([data])
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  if (loading) return <Loader />
  if (error) return <div className="text-red-600">{error}</div>

  return (
    <div className="space-y-3">
      {items.map((it, idx) => (
        <ResultCard key={idx} title="Стан серверних функцій" rows={Object.entries(it)} />
      ))}
    </div>
  )
}
