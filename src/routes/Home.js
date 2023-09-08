import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Footer from '../components/Footer'
import HomeImg from "../assets/home.png"


export default function Home() {
    return (
        <>
            <Navbar />

            <Hero
                cName="hero"
                heroImg={HomeImg}
                title="Embark on a Journey to Discover India's Timeless Beauty"
                text="Immerse in Rich Heritage, Diverse Cultures, and Unforgettable Adventures."
                url="/"
                btnClass="show"
                buttonText=""
            />

            <Destination/>



            <Footer/>

        </>
    )
}
