import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import contactImg from "../assets/contact.png"
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div>
      <Navbar/>
      <Hero
      cName="hero-about"
      heroImg={contactImg}
      title="Connect with Us, Plan Your Next Adventure"
      />
    <ContactForm/>
    <Footer/>
    </div>
  )
}
