import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Components/Navbar.css'

 function Topbar () {

  
  const[click,setClick]=useState(true);

  const navClick=()=>{
     setClick(!click);
  }

  return (
            
      <div className='Nav_bar'>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav" id="topbar">
        <li class="nav-item active">
        <Link to='/' className='nav-link' onClick={navClick}>Invoice</Link>
        </li>
        <li class="nav-item">
        <Link to='/Product' className='nav-link' onClick={navClick}>Product</Link>
        </li>
        <li class="nav-item">
        <Link to='/Report' className='nav-link' onClick={navClick}>Report</Link>
        </li>
        
      </ul>
    </div>
  </nav>
  </div>
  )
}
export default Topbar;