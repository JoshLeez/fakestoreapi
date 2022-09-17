import { useState } from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About"
import Products from "./Components/Products";
import Shopcard from "./Components/Shopcard";
import cart from  './Image/cart.png';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contact from "./Components/Contact";


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <Router>
    <Navbar/>
    <Shopcard/>
    <Routes>
     <Route exact path="/" element={<Products setCount={setCount} count={count} />}/>
     <Route  path="/about" element={<About />} />
     <Route  path="/contact" element={<Contact/>}/>
    </Routes>
    </Router>
    <img style={{padding:`5px`,width:`1.7cm` ,height:`2cm`,position: "fixed", bottom: 30, right: 30}} src={cart} alt="cart" />
    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{color:'white',padding:`5px`,width:`1cm` ,height:`1cm`,position: "fixed", bottom: 30, right: 30}}>{count}</div>
    </>
  );
}

export default App;
