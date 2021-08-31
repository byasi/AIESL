import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import About from '../components/Home/About';
import Fact from '../components/Home/Fact';
import Faq from '../components/Home/Faq';

const AboutUs = () => {
    return(
        <div className="wrapper">
            <Header/>
             <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>About Us</h2>
                        </div>
                        <div className="col-12">
                            <Link to="/">Home</Link>
                            <Link to="/aboutus">About Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <About/>
            <Fact/>
            <Faq/>
            <Footer/>

        </div>
        
    )
}
export default AboutUs;