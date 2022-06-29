import React from 'react'
import Navbar from '../Navbar'
import Featured from '../Featured'
import Hero from '../Hero'
import Signup from '../Signup'
import Footer from '../footer'
const Home = () => {
  return (
      <>
      <Navbar />
      <Hero/>
      <Featured />
      <Signup />
      <Footer/>
      </>
  )
}

export default Home