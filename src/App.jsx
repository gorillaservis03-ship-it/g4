import { useState } from 'react'
import Tabs from './components/Tabs'
import Cars from './pages/Cars'
import VIN from './pages/VIN'
import RSV from './pages/RSV'
import About from './pages/About'

const TABS = [
  { key: 'cars', label: 'Cars' },
  { key: 'vin', label: 'VIN Decoder' },
  { key: 'rsv', label: 'RSV' },
  { key: 'about', label: 'About' }
]

export default function App() {
  const [tab, setTab] = useState('cars')
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Gorilla Servis CRM V3</h1>
      <Tabs tabs={TABS} active={tab} onChange={setTab} />
      {tab === 'cars' && <Cars />}
      {tab === 'vin' && <VIN />}
      {tab === 'rsv' && <RSV />}
      {tab === 'about' && <About />}
    </div>
  )
}
