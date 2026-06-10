import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Products from "./Products";
import Phone from "./Phone";
import laptop from "./Laptop";

function App() {

  function User(){  // we can make other component for this just for learning we made here and other compnent also
    console.log(useParams);
    const {id} = useParams();
    return <h2>User profile for ID: {id}</h2>
    
  }
  function Notfound(){
    return <h2>404 Page not found</h2>

  }
  return (
    // We have to use BroweserRouter and Routes alsways for router and inside it we can keep our routes
    // why we use * in path because it is a universal path we can use it for give a msg to user if he try to go on path
    // which not exist so we use *
    <BrowserRouter>
      <h1>React router example</h1>

      <nav>
        <Link to="/">Home</Link> |   
        <Link to="/contact">Contact</Link> |  
        <Link to="/about">About</Link> |
        <Link to={"/user/10"}>User</Link> | 
        <Link to={"/products"}>Products</Link>
        
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User/>}/>
        <Route path="/products" element={<Products/>}>
        <Route path="/phone" element></Route>
        </Route>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
