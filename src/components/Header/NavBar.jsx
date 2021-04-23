import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const path = window.location.pathname;
    // console.log(path)
    return(
        <div className="nav-bar">
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <a href="/" className="navbar-brand">MENU</a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav mr-auto">
                        <Link to ="/" className={`nav-item nav-link ${path === '/' ? ' active' : null} `}>Home</Link>
                        <Link to ="/aboutus" className={`nav-item nav-link ${path === '/aboutus' ? ' active' : null} `}>About</Link>
                        <Link to ="/services" className={`nav-item nav-link ${path === '/services' ? ' active' : null} `}>Service</Link>
                        <Link to ="/team" className={`nav-item nav-link ${path === '/team' ? ' active' : null} `}>Team</Link>
                        <Link to ="/projects" className={`nav-item nav-link ${path === '/projects' ? ' active' : null} `}>Project</Link>
                        <Link to="/contactus" className={`nav-item nav-link ${path === '/contactus' ? ' active' : null} `}>Contact</Link>
                    </div>
                    <div className="ml-auto">
                        {/* <a className="btn" href="/">Admin</a> */}
                    </div>
                </div>
            </nav>
        </div>
    </div>
    )
}

export default NavBar;