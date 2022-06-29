import React from 'react'
import Crypto from '../../assets/hero-img.png'
import './style.css'
const Hero = () => {
  return (
      <div className='hero'>
          <div className='container'>
              <div className='left'>
                  <p>
                    Buy & Sell Crypto 24/7 using 
                    your retirement acount  
                  </p>
                  <h1>Invest in Cryptocurreny with Your IRA</h1>
                  <div className='input-container'>
                      <input type='email' placeholder='Enter your email' />
                      <button className='btn'>Laern More</button>
                  </div>
              </div>
              <div className='right'>
                  <div className='img-container'>
                      <img src={Crypto} alt=''/>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Hero