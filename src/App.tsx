import 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import NotFound from './pages/notfound'
import Unsubscriber from './pages/unsubscriber'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='*' element={<NotFound />}/>
        <Route path='unsubscriber' element={<Unsubscriber />}/>
      </Routes>    
    </BrowserRouter>
    </>
  )
}

export default App
