import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
im

function App() {
  

  return (
    // We have to use BroweserRouter and Routes alsways for router and inside it we can keep our routes
    <BrowserRouter>  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
