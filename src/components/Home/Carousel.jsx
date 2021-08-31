import React from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
    return(
        <div>
             <div id="carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/projects/project14.jpeg" alt=""/>
                        <div className="carousel-caption">
                            <p className="animated fadeInRight">We Are Professional</p>
                            <h1 className="animated fadeInLeft">For Your Dream Project</h1>
                            <Link className="btn animated fadeInUp" to="/contactus">Contact Us</Link>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="img/projects/project16.jpeg" alt=""/>
                        <div className="carousel-caption">
                            <p className="animated fadeInRight">Professional Builder</p>
                            <h1 className="animated fadeInLeft">We Build Your Home</h1>
                            <Link className="btn animated fadeInUp" to="/contactus">Get In Touch</Link>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="img/projects/project12.jpeg" alt=""/>
                        <div className="carousel-caption">
                            <p className="animated fadeInRight">We Are Trusted</p>
                            <h1 className="animated fadeInLeft">For Your Dream Home</h1>
                            <Link className="btn animated fadeInUp" to="./contactus">Support Us</Link>
                        </div>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carousel;