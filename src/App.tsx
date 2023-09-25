import 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Newsletter from './pages/newsletter'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/newsletter" element={<Newsletter/>}/>
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
