import { useState } from 'react'
import Auth from './Components/Login/LoginPage'
import Home from './Components/Home/Home'
import Profile from './Components/Profile/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


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
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
