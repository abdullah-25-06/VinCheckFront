import React from 'react'
import Loginform from './Loginform'

import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg " id='navs'>
                <div className="col-md-10 mx-auto container">
                    <NavLink className="navbar-brand" id="brandname" to="/" data-aos="flip-left" data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500"
                        data-aos-delay="500">Vincheck Central</NavLink>
                    <label className="burger" htmlFor="burger"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <input type="checkbox" id="burger"></input>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0" data-aos="zoom-in" data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500"
                            data-aos-delay="500">
                            <li className="nav-item">
                                <NavLink className="nav-link" id="home" to="/" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" id="home1" to="" >Sample report</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#pricing' id="home2" to="pricing" >Prices</a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" id="home3" to="Login" >Customer Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" id="home3" to="Dashboard" >Dashboard</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
