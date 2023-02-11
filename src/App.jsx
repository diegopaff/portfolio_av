import NavBar from './components/Navbar'
import Hero from './routes/Hero'
import About from './routes/About'
import WorkDetail from './routes/WorkDetail'
import Contact from './routes/Contact'
import Footer from './components/Footer'
import './App.css'
import WorkContainer from './components/WorkContainer'
import { Route, Routes } from 'react-router-dom'
import Curriculum from './components/Curriculum'

function App() {

  return (
    <div className='bg-white dark:bg-[#171717]'>
      <header className='flex justify-center'>
        <NavBar/>
      </header>
      <Routes>
        <Route exact path='/' element={<WorkContainer/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/curriculum' element={<Curriculum/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/work/:workId' element={<WorkDetail/>} /> 
      </Routes> 
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
