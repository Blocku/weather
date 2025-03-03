import { Plus, EllipsisVertical } from 'lucide-react'
import { useEffect, useState } from 'react'
import weatherApi from './api/weather'
import './App.css'
import Menu from './components/menu'

export default function App() {

  const [weather, setWeather]:[any, Function] = useState({})
  const [menu, setMenu] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    weatherApi('london', setWeather, setLoading)
  }, [])

  

  return (
    loading ? 
    <div className='text-black text-xl' >Загрузка...</div>
    : 
    <div className='h-dvh p-3 bg-gradient-to-b from-blue-300 to-blue-500' >
      <header className='flex justify-between items-center' >
        <button onClick={() => setMenu(true)} className='' >
          <Plus color='white' size={25} />
        </button>
        <span className='flex flex-grow justify-center text-xl font-medium ' >{weather.name}</span>
        <button>
          <EllipsisVertical color='white' size={25} />
        </button>
      </header>

      <main>
        <span>{weather.main.temp}</span>
        {menu && <Menu setMenu={setMenu} />}
      </main>
    </div>
  )
}

