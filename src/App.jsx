// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Headerbar from "./Header/index"
import Headbar from "./Head/index"
import СlientsSection  from "./Clients/index"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Headerbar />
        <Headbar />
        <СlientsSection />
      </div>

    </>
  )
}

export default App
