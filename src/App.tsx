import { useEffect, useState } from 'react'
import weatherApi from './api/weather'
import './App.css'

export default function App() {

  const [weather, setWeather] = useState({})

  weatherApi('perm', setWeather)

  return (
    <div className='h-dvh p-3 bg-gradient-to-b from-blue-300 to-blue-500' >
      <header className='flex justify-between items-center' >
        <button className='' >
          <svg fill="none" viewBox="0 0 24 24" className="h-6 w-6 stroke-2 stroke-white">
            <path d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
        <span className='flex flex-grow justify-center text-xl font-medium ' >{weather.name}</span>
        <button>
          <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-2 stroke-white">
            <path d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
        </button>
      </header>

      <main></main>
    </div>
  )
}

