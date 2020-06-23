import React from "react";
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Portfolio from '../../components/Portfolio/Portfolio';
import Contact from '../../components/Contact/Contact';

function Main() {
    return (
    <main>
        <Hero/>
        <About/>
        <Portfolio/>
        <Contact/>
    </main>)
}

export default Main