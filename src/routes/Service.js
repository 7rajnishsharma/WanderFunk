import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import serviceImg from "../assets/service.png"
import Trip from '../components/Trip'
import Footer from '../components/Footer'

export default function Service() {
  return (
    <>
    <Navbar/>
    <Hero
        cName="hero-about"
        heroImg={serviceImg}
        title="Uncover Hidden Gems, Craft Memories"
      />

      <Trip/>
      <Footer/>
    
    </>
  )
}
