import { Plus, EllipsisVertical } from 'lucide-react'
import { useEffect, useState } from 'react'
import weatherApi from './api/weather'
import './App.css'
import Menu from './components/menu'
import WeatherInfo from './components/weatherInfo'

export default function App() {

  const [weather, setWeather]:[any, Function] = useState({})
  const [menu, setMenu] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    weatherApi('perm', setWeather, setLoading)
  }, [])

  

  return (
    loading ? 
    <div className='text-black text-xl' >Загрузка...</div>
    : 
    <div className='h-dvh w-full flex flex-col items- border-3 border-pink-400 p-3 bg-gradient-to-b from-blue-300 to-blue-500' >
      <header className='flex justify-between items-center' >
        <button onClick={() => setMenu(true)} className='' >
          <Plus color='white' size={25} />
        </button>
        <span className='flex flex-grow justify-center text-xl font-medium ' >{weather.name}</span>
        <button>
          <EllipsisVertical color='white' size={25} />
        </button>
      </header>

      <WeatherInfo weather={weather} />

      {menu && <Menu setMenu={setMenu} />}
    </div>
  )
}

