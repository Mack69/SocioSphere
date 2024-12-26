import './App.css'
import { Routes,Route } from 'react-router-dom'
import LoginAuth from './components/LoginAuth'

function App() {
  return (
    <>
    <nav>
      <Routes>
        <Route path ='/' element={LoginAuth}/>
      </Routes>
    </nav>
    </>
  )
}

export default App
