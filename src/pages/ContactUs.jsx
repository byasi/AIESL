import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';

const ContactUs = () => {
    return(
       
        <div className="wrapper">
             <Header/>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Contact Us</h2>
                        </div>
                        <div className="col-12">
                            <Link to="/">Home</Link>
                            <Link to="/contactus">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact wow fadeInUp">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Get In Touch</p>
                        <h2>For Any Query</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-info">
                                <div className="contact-item">
                                    <i className="flaticon-address"></i>
                                    <div className="contact-text">
                                        <h2>Location</h2>
                                        <p>Nakawa, Kampala, Uganda</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <i className="flaticon-call"></i>
                                    <div className="contact-text">
                                        <h2>Phone</h2>
                                        <p>+256 759 878 065</p>
                                        <p>+256 781 758 068</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <i className="flaticon-send-mail"></i>
                                    <div className="contact-text">
                                        <h2>Email</h2>
                                        <p>futurebuilderz@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    )
}

export default ContactUs;