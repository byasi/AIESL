import React from 'react';
import { Link } from 'react-router-dom';
import About from './Home/About';
import Fact from './Home/Fact';
import Faq from './Home/Faq';

const AboutUs = () => {
    return(
        <div>
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
            

        </div>
        
    )
}
export default AboutUs;