import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from "../assets/about.png"
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero-about"
        heroImg={AboutImg}
        title="Our Journey, Your Adventure"
      />

      <AboutUs/>

      <Footer/>


    </>
  )
}
