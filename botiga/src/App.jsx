import { useState } from 'react'
import Layout from './components/Layouts'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
function App() {
  
  

  return (
    
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
      <Route path='/' index element={<Home/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
