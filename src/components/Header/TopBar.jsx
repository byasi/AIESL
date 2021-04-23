import React from 'react';

const TopBar = () => {
    return(            
<div className="top-bar">
    <div className="container-fluid">
        <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
                <div className="logo">
                    <a href="index.html">
                        <h1>AIESL </h1>
                         {/* <img src="img/logo.jpg" alt="Logo">  */}
                    </a>
                </div>
            </div>
            <div className="col-lg-8 col-md-7 d-none d-lg-block">
                <div className="row">
                    <div className="col-4">
                        <div className="top-bar-item">
                            <div className="top-bar-icon">
                                <i className="flaticon-calendar"></i>
                            </div>
                            <div className="top-bar-text">
                                <h3>Opening Hour</h3>
                                <p>Mon - Fri, 8:00 - 9:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="top-bar-item">
                            <div className="top-bar-icon">
                                <i className="flaticon-call"></i>
                            </div>
                            <div className="top-bar-text">
                                <h3>Call Us</h3>
                                <p>+256 704 761 457</p>
                                <p>+256 784 664 540</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="top-bar-item">
                            <div className="top-bar-icon">
                                <i className="flaticon-send-mail"></i>
                            </div>
                            <div className="top-bar-text">
                                <h3>Email Us</h3>
                                <p>musiimebobanold@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>

    )
}

export default TopBar;
