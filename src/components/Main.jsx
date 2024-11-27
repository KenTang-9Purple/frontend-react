import React from 'react'
import Nav from '../components/Nav';
import Hero from '../components/Hero'
import About from '../components/About';
import Values from '../components/Values';
import Pillars from '../components/Pillars';
import Footer from '../components/Footer';
function Main() {
    return (
    <>
        <Nav />
        <Hero />
    {/* <!-- about -->*/}
        <About />
    {/* <!-- values --> */}
        <Values />
        <Pillars />
        <Footer />
    </>
    )
}

export default Main