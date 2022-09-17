import  React, {useState} from 'react';
import logo from '../Image/logos.png';
import './Navbar.css';
import {Link} from 'react-router-dom';
function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <>
<div className='navbar' id={show ? "hidden" : ""}>
<span class="material-icons md-48" onClick={() => setShow(!show)}>menu</span>  
<Link to="/"><img src={logo} className="logo" alt="logo"/></Link>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
</div>

    </>
  )
}

export default Navbar