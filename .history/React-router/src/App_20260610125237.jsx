import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import About from './About'
import Contact from './Contact'
import Home from './Home'
function App() {
  

  return (
    // We have to use BroweserRouter and Routes alsways for router and inside it we can keep our routes
    <BrowserRouter>  
    <h1>React router example</h1>

    <nav></nav>


    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
