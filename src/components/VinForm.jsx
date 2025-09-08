import { useState } from 'react'

export default function VinForm({ onSubmit, placeholder = 'Введіть VIN…' }) {
  const [vin, setVin] = useState('')
  const submit = (e) => {
    e.preventDefault()
    onSubmit?.(vin.trim())
  }
  return (
    <form onSubmit={submit} className="flex gap-2">
      <input
        className="border rounded-xl px-3 py-2 w-full"
        placeholder={placeholder}
        value={vin}
        onChange={(e) => setVin(e.target.value)}
      />
      <button className="px-4 py-2 rounded-xl bg-black text-white" type="submit">
        Пошук
      </button>
    </form>
  )
}
