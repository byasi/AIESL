import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';

const Projects = () => {
    return (
        <div className="wrapper">
            <Header/>
             <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Our Projects</h2>
                        </div>
                        <div className="col-12">
                            <Link to="/">Home</Link>
                            <Link to="/projects">Our Projects</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Our Projects</p>
                        <h2>Visit Our Projects</h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".first">Complete</li>
                                <li data-filter=".second">Running</li>
                                <li data-filter=".third">More</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row portfolio-container">
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                            <div className="portfolio-warp">
                                <div className="portfolio-img">
                                    <img src="img/projects/project1.jpeg" alt=""/>
                                    <div className="portfolio-overlay">
                                        <p>
                                            These are some of the projects FutureBuilderz has been contracted.
                                        </p>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <h3>Project Name</h3>
                                    <a className="btn" href="img/projects/project6.jpeg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item second wow fadeInUp" data-wow-delay="0.2s">
                            <div className="portfolio-warp">
                                <div className="portfolio-img">
                                    <img src="img/projects/project7.jpeg" alt="I"/>
                                    <div className="portfolio-overlay">
                                        <p>
                                        These are some of the projects FutureBuilderz has been contracted.
                                        </p>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <h3>Project Name</h3>
                                    <a className="btn" href="img/projects/project8.jpeg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item third wow fadeInUp" data-wow-delay="0.3s">
                            <div className="portfolio-warp">
                                <div className="portfolio-img">
                                    <img src="img/projects/project3.jpeg" alt=""/>
                                    <div className="portfolio-overlay">
                                        <p>
                                        These are some of the projects FutureBuilderz has been contracted.
                                        </p>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <h3>Project Name</h3>
                                    <a className="btn" href="img/projects/project3.jpeg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item first wow fadeInUp" data-wow-delay="0.4s">
                            <div className="portfolio-warp">
                                <div className="portfolio-img">
                                    <img src="img/projects/project4.jpeg" alt=""/>
                                    <div className="portfolio-overlay">
                                        <p>
                                        These are some of the projects FutureBuilderz has been contracted.
                                        </p>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <h3>Project Name</h3>
                                    <a className="btn" href="img/projects/project5.jpeg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
                            <div className="portfolio-warp">
                                <div className="portfolio-img">
                                    <img src="img/projects/project16.jpeg" alt=""/>
                                    <div className="portfolio-overlay">
                                        <p>
                                        These are some of the projects FutureBuilderz has been contracted.
                                        </p>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <h3>Project Name</h3>
                                    <a className="btn" href="img/projects/project15.jpeg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item third wow fadeInUp" data-wow-delay="0.6s">
                            <div className="portfolio-warp">
                                <div className="portfolio-img">
                                    <img src="img/projects/project9.jpeg" alt=""/>
                                    <div className="portfolio-overlay">
                                        <p>
                                        These are some of the projects FutureBuilderz has been contracted.
                                        </p>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <h3>Project Name</h3>
                                    <a className="btn" href="img/projects/project12.jpeg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 load-more">
                            {/* <a className="btn" href>Load More</a> */}
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    )
}

export default Projects;