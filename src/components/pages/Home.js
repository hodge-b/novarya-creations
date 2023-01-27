import React from 'react';

import Hero from '../component/Hero';
import Shop from '../component/Shop';
import About from '../component/About';
import Contact from '../component/Contact';
import Footer from '../component/Footer';

export default function Home() {
    return(
        <div className="container">
            <Hero />
            <Shop />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}