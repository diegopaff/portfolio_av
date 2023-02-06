import NavBar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import './App.css'
import WorkContainer from './components/WorkContainer'
import { Route, Routes } from 'react-router-dom'
import Curriculum from './components/Curriculum'

function App() {

  return (
    <div>
      <header className='flex justify-center 
                        '>
        <NavBar/>
      </header>
      <Routes>
        <Route exact path='/' element={<Hero/>} />
        <Route exact path='/work' element={<WorkContainer/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/curriculum' element={<Curriculum/>} />
        
      </Routes> 
    </div>
  )
}

export default App
