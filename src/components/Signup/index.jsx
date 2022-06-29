import React from 'react'
import Crypto from '../../assets/trade.png'
import './style.css'
const Signup = () => {
  return (
      <div className='signup'>
          <div className='container'>
              <div className='left'>
                  <img src={Crypto} alt='' />
              </div>

              <div className='right'>
                  <h2>Earn passive income with
                     crypto. 
                  </h2>
                  <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora aut nam expedita harum! Fugit quos, dolor, voluptates, repellat natus aliquid at deserunt culpa eveniet doloremque numquam delectus ducimus voluptate molestiae!
                  </p>
                  <div className='right'>
                      <input type='email' placeholder='Enter your email' />
                      <button className='btn'>Learn More</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Signup