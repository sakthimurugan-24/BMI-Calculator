import { useState } from 'react'
import './App.css'
import Bmiform from './Component/Bmiform'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Result from './Component/Result'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Bmiform/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
