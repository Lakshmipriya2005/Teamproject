import { useState } from 'react'
import Auth from './Components/Login/LoginPage'
import Home from './Components/Home/Home'
import Profile from './Components/Profile/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ACServicePage from './Components/services/Acservice';
import FridgeService from './Components/services/FridgeService';
import WashingService from './Components/services/WashingService';

import AircoolerService from './Components/services/AircoolerService';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
    
    <Routes>
      <Route path="/Login" element={<Auth />} />
      <Route  path="/"   element={<Home/>} />
      {/* <Route  path="/Dashboard"   element={<Dashboard/>} /> */}
      {/* <Route  path="/ResetPassword"   element={<ResetPassword/>} /> */}
  
      {/* <Route  path="/About"   element={<About/>} /> */}
     
      <Route path='/Profile' element={<Profile/>}/>
      <Route path="/washing-service" element={<WashingService />} />
      <Route path="/fridge-service" element={<FridgeService />} />
      <Route path="/ac-service" element={<ACServicePage/>} />
      <Route path="/aircooler-service" element={<AircoolerService />} />

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
