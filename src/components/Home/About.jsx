import React from 'react';

const About = () => {
    return(
        <div className="about wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="about-img">
                                <img src="img/about.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="section-header text-left">
                                <p>Welcome to Ashnold Interior & Exterior Services Ltd</p>
                                <h2>25 Years Experience</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                                </p>
                                <a className="btn" href="/">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About;