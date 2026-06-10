import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    // We have to use BroweserRouter and Routes alsways for router and inside it we can keep our routes
    <BrowserRouter>  
    <Routes>
      <Route path='/aboutUs' element={}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
