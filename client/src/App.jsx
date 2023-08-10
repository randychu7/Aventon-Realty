import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import './App.css'
import Navbar from './pages/navbar';
function App() {

  return (
   
      <div>
        <Router>
          <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
         </Routes>
        </Router>
     
      </div>
  )
}

export default App
