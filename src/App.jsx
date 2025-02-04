import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'


function App() {

  return (
    <>
<ul>
  <li>
    <NavLink to = "/">Home</NavLink>
  </li>
  <li>
    <NavLink to = "/about">About</NavLink>
  </li>
  <li>
    <NavLink to = "/contact">Contact</NavLink>
  </li>
</ul>

    <Routes>
      <Route path = "/" element = {<Home />}/>
      <Route path = "/about" element = {<About />}/>
      <Route path = "/contact" element = {<Contact />}/>
    </Routes>
      
    </>
  )
}

export default App
