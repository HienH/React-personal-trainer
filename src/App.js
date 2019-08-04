import React from 'react';
import './App.css';
import Header from './components/Header-Footer/Header'
import JumbotronImage from './components/Jumbotron/JumbotronImage';
import About from './components/About/About';
import Services from './components/Services/Services';
import CarouselImages from './components/Carousel/CarouselCarouselImages';
import Packages from './components/Packages/Packages';
import Contact from './components/Contact/Contact';
import ImageCollage from './components/ImageCollage/ImageCollage';
import Booking from './components/Booking/Booking';
import { Element } from 'react-scroll';


function App() {
    return (
        <div className="App">
            <Header />
            <Element name="Home" >
                <JumbotronImage />
            </Element>
            <Services />
            <Element name="About" >
                <About />
            </Element>
            <Element name="Services" >
                <ImageCollage />
            </Element>
            <Booking />

            <Element name="Packages" >
                <Packages />
            </Element>
            <Element name="Contact" >
                <Contact />
            </Element>
        </div>
    );
}

export default App;
