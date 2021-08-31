import React from 'react';

const About = () => {
    return(
        <div className="about wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="about-img">
                                <img src="img/projects/project9.jpeg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="section-header text-left">
                                <p>Welcome to Ashnold Interior & Exterior Services Ltd</p>
                                <h2>We Have The Experience To Do Your Job</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                Ashnold Interior & Exterior Services Ltd has fulfilled Ugandans needs through providing latest and trending paint colours, Gypsum ceiling designs among others in the real estate business for the past years.
                                </p>
                                <p>
                                Our main aim is to ensure quality and profesional workmanship in the real estate business.
                                </p>
                                {/* <a className="btn" href="/">Learn More</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About;