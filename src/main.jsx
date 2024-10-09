import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Info from './pages/Info.jsx'
import Sel from './pages/Selector.jsx'
import Not from './pages/Notfound.jsx'
import './index.css'
import {BrowserRouter , Routes, Route, Link} from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/info' element={<Info/>}/>
      <Route path='/selt' element={<Sel/>}/>
      <Route path='*' element={<Not/>}/>
    </Routes>
    
    </BrowserRouter>
  </StrictMode>,
)
