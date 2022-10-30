import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from 'scenes/login'
import Home from 'scenes/home'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Home />} />
        <Route path='/logout' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
