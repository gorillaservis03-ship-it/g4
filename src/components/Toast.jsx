import { useEffect, useState } from 'react'

export default function Toast({ message }) {
  const [open, setOpen] = useState(Boolean(message))
  useEffect(() => setOpen(Boolean(message)), [message])
  if (!open || !message) return null
  return (
    <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-xl shadow-lg">
      {message}
    </div>
  )
}
