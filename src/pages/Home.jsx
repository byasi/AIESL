import React from 'react';
import About from '../components/Home/About';
import Carousel from '../components/Home/Carousel';
import Fact from '../components/Home/Fact';
import Faq from '../components/Home/Faq';
import FeatureStart from '../components/Home/FeatureStart';
import Service from '../components/Home/Service';
import Header from '../components/Header/Header';
// import Team from './Team';
import Testimonial from '../components/Home/Testimonial';
import Footer from '../components/Footer';
// import Video from './Video';

const Home = () => {
    return(
        <div className="wrapper">
            <Header/>
            <Carousel/>
            <FeatureStart/>
            <About/>
            <Fact/>
            <Service/>
            {/* <Video/> */}
            {/* <Team/> */}
            <Testimonial/>
            <Faq/>
           <Footer/>
        </div>
    )
}

export default Home;