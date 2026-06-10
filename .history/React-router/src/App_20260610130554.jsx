import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
function App() {
  return (
    // We have to use BroweserRouter and Routes alsways for router and inside it we can keep our routes
    <BrowserRouter>
      <h1>React router example</h1>

      <nav>
        <Link to="/">Home</Link>|  
        <Link to="/contact">Contact</Link>|  
        <Link to="/about">About</Link> 
        <Link to={"/user/:id"}></Link>
        
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Routes></Routes>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
