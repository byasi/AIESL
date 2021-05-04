import React from 'react';
import About from './About';
import Carousel from './Carousel';
import Fact from './Fact';
import Faq from './Faq';
import FeatureStart from './FeatureStart';
import Service from './Service';
// import Team from './Team';
import Testimonial from './Testimonial';
// import Video from './Video';

const Home = () => {
    return(
        <div>
            <Carousel/>
            <FeatureStart/>
            <About/>
            <Fact/>
            <Service/>
            {/* <Video/> */}
            {/* <Team/> */}
            <Testimonial/>
            <Faq/>
           
        </div>
    )
}

export default Home;