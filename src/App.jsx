import React from 'react'
import Home from './Components/Home'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Detail from './Components/Detail'

const App = () => {
  return (
    <div>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/detail' element={<Detail />}/>
      </Routes>
     </Router>
    </div>
  )
}

export default App