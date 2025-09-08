export default function Loader({ text = 'Завантаження…' }) {
  return <div className="p-4 text-sm text-gray-500 animate-pulse">{text}</div>
}
