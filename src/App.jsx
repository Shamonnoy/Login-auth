import React from 'react'
import Signup from './Signup'
import Login from './Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Register" element={<Signup/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App