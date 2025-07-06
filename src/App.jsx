import './css/App.css'
import NavBar from './Components/NavBar'
import Favorites from './Pages/Favorites'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </div>
  )
}

export default App