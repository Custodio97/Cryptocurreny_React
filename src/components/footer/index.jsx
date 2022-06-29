import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './style.css'
const Footer = () => {
  return (
      <div className='footer'>
          <div className='container'>
              <div className='col col-1'>
                  <h1>De<span className='primary'>Fi</span></h1>
            </div>
                  <div className='col'>
                      <h5>Support</h5>
                      <span className='bar'></span>
                      <a href="/">Contact Us</a>
                      <a href="/">Chat</a>
                      <a href="/">Help Center</a>
                      <a href="/">Faq</a>
                  </div>
                  <div className='col'>
                      <h5>Developers</h5>
                      <span className='bar'></span>
                      <a href="/">Cloud</a>
                      <a href="/">Commerce</a>
                      <a href="/">Pro</a>
                      <a href="/">Api</a>
                  </div>
                  <div className='col'>
                      <h5>Company</h5>
                      <span className='bar'></span>
                      <a href="/">About</a>
                      <a href="/">Information</a>
                      <a href="/">Leagl</a>
                      <a href="/">Privacy</a>
                  </div>
                  <div className='col'>
                      <h5>Social</h5>
                      <span className='bar'></span>
                      <a href="/">
                          <FaFacebook/>
                      </a>
                      <a href="/">
                          <FaTwitter/>
                      </a>
                      <a href="/">
                          <FaLinkedin/>
                      </a>
                      <a href="/">
                          <FaGithub/>
                      </a>
                  
              </div>
          </div>
    </div>
  )
}

export default Footer