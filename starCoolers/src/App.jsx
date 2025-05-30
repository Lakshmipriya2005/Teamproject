import { useState } from 'react'
import Page from './Components/Login/LoginPage'
import Home from './Components/Home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Page/> */}
      <Home/>
    </>
  )
}

export default App
