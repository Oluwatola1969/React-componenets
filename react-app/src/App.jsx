import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import Tube from './pages/Tube/Tube'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const[sidebar, setSidebar] = useState(true);
  const[subscription, setSubscription]=useState(true)
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} subscription={subscription} setSubscription={setSubscription}/>} />
        <Route path='/Tube' element={<Tube/>} />
      </Routes>
    </div>
  )
}

export default App