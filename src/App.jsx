import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './componentes/nav/nav'
import Menu from './componentes/menuplay/mnplay'
import Footer from './componentes/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Nav></Nav>
      </div>
      <div>
        <Menu></Menu>
      </div>
      <Footer></Footer>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
