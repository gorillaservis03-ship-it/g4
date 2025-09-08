export default function ResultCard({ title, rows = [] }) {
  return (
    <div className="rounded-2xl p-4 bg-white shadow-sm border">
      <h3 className="font-semibold text-lg mb-3">{title}</h3>
      <div className="space-y-1 text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="grid grid-cols-3 gap-3">
            <div className="text-gray-500">{k}</div>
            <div className="col-span-2 break-words">{String(v ?? '—')}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
