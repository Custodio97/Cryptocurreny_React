import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaBars,FaTimes} from  'react-icons/fa'
import './style.css'
const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick=()=> setClick(!click)
  return (
      <div className='header'>
          <div className='container'>
              <h1>De<span className='primary'>Fi</span></h1>
          
          <ul className={click ? 'nav-menu active':'nav-menu'}>
              <li>
                  <Link to='/'>
                      Home
                  </Link>
              </li>
              <li>
                  <Link to='/featured'>
                      Featured
                  </Link>
              </li>
              <li>
                  <Link to='/earn'>
                      Earn
                  </Link>
              </li>
              <li>
                  <Link to='/featured'>
                      Contact
                  </Link>
              </li>
          </ul>
          <div className='btn-gruop'>
              <button className='btn'>Connect Wallet</button>
          </div>
          <div className='hamburger' onClick={handleClick}>
              {click ? (<FaTimes size={20} style={{ color: "#333" }} />) : (<FaBars size={20} style={{color:"#333"}} />)}
              </div>
          </div>
    </div>
  )
}

export default Navbar