import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div>
            <div className="footer wow fadeIn" data-wow-delay="0.3s">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-contact">
                                <h2>Office Contact</h2>
                                <p><i className="fa fa-map-marker-alt"></i>Kazo, Kampala, Uganda</p>
                                <p><i className="fa fa-phone-alt"></i>+256 704 761 457</p>
                                <p><i className="fa fa-envelope"></i>musiimebobanold@gmail.com</p>
                                <div className="footer-social">
                                    <a href="/"><i className="fab fa-twitter"></i></a>
                                    <a href="/"><i className="fab fa-facebook-f"></i></a>
                                    <a href="/"><i className="fab fa-youtube"></i></a>
                                    <a href="/"><i className="fab fa-instagram"></i></a>
                                    <a href="/"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-link">
                                <h2>Services Areas</h2>
                                <a href="/">Building Construction</a>
                                <a href="/">House Renovation</a>
                                <a href="/">Architecture Design</a>
                                <a href="/">Interior Design</a>
                                <a href="/">Painting</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-link">
                                <h2>Useful Pages</h2>
                                <Link to="/aboutus">About Us</Link>
                                <Link to="/contactus">Contact Us</Link>
                                <Link to="/team">Our Team</Link>
                                <Link to="/projects">Projects</Link>
                                <a href="#testimonials">Testimonial</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="newsletter">
                                <h2>Newsletter</h2>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu
                                </p>
                                <div className="form">
                                    <input className="form-control" placeholder="Email here"/>
                                    <button className="btn">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container footer-menu">
                    <div className="f-menu">
                        {/* <!-- <a href="">Terms of use</a> -->
                        <!-- <a href="">Privacy policy</a> -->
                        <!-- <a href="">Cookies</a> --> */}
                        <a href="//">Help</a>
                        <a href="/">FQAs</a>
                    </div>
                </div>
                <div className="container copyright">
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; <a href="/">Ashnold Interior & Exterior Services Ltd</a>, All Right Reserved.</p>
                        </div>
                        <div className="col-md-6">
                            <p>Designed By <a href="/">Future Kings</a></p>
                        </div>
                    </div>
                </div>
            </div>
            

            <a href="/" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
        </div>

    )
}

export default Footer;