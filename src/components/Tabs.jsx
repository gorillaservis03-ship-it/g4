import React from 'react'

export default function Tabs({ tabs, active, onChange }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {tabs.map((t) => (
        <button
          key={t.key}
          onClick={() => onChange(t.key)}
          className={`px-4 py-2 rounded-2xl border transition ${
            active === t.key ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}
