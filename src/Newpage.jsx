
import React from 'react'
// import Pricing from './Pricing'
// import Footer from './Footer'
import { NavLink } from 'react-router-dom'
import Aos from 'aos'
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Viewer } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
import Footer from "./Footer"
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { useEffect } from 'react'

function Pricing2() {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <>
            <div className="navhead container">
                <span className="items col-md-11 mx-auto container" >

                    <NavLink className="navbar-brand" id="brandname" to="/" data-aos='flip-left' data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500"
                        data-aos-delay="500"><img src="glogo.png" alt="" id="wlogo" /></NavLink>

                    <li className="nav-item navbar-nav mt-1">
                        <NavLink className="nav-link" id="home" to="/" style={{color:'black'}} >Home</NavLink>
                    </li>
                    <li className="nav-item navbar-nav mt-1">
                        <NavLink className="nav-link" id="home1" to="/Sample" style={{color:'black'}}>Sample report</NavLink>
                    </li>
                    <li className="nav-item navbar-nav mt-1">
                        <NavLink className="nav-link" id="home2" to="/pricing"style={{color:'black'}} >Pricing</NavLink>
                    </li>
                    <li className="nav-item navbar-nav mt-1">
                        <NavLink className="nav-link" id="home3" to="/Login"style={{color:'black'}} >Customer Login</NavLink>
                    </li>
                </span>
                <span>
                    <label className="burger" htmlFor="burger "
                        type="checkbox"
                        data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample"
                        id="burger"
                    >
                        <input type='checkbox'>
                        </input>
                        <span style={{ backgroundColor: 'green', marginTop: '-3px' }}></span>
                        <span style={{ backgroundColor: 'green', marginTop: '-3px' }}></span>
                        <span style={{ backgroundColor: 'green', marginTop: '-3px' }}></span>
                    </label>
                </span>

            </div>
            {/* Phone navbar */}
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    {/* <h5 class="offcanvas-title" id="offcanvasExampleLabel">VINCHECK CENTRAL</h5> */}
                    
                    <NavLink className="navbar-brand" id="brandname" to="/" data-aos='flip-left' data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500"
                        data-aos-delay="500"><img src="glogo.png" alt="" id="wlogo" /></NavLink>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" id='canvasclose'></button>
                </div>
                <div class="offcanvas-body">
                    <div className='content'>
                        <ul id='ul'>
                            <a className='nav-link' href='/'>
                                <li id='li'>
                                    <img src="house.png" alt="" /> Home
                                </li>
                            </a>
                            <a className='nav-link' href='/Sample'>
                                <li id='li'>
                                    <img src="rep.png" alt="" /> Sample report
                                </li>
                            </a>
                            <a className='nav-link' href="/pricing" >
                                <li id='li'>
                                    <img src="p.png" alt="" /> Prices
                                </li>
                            </a>
                            <a className='nav-link' to="Login" href='Login' >
                                <li id='li'>
                                    <img src="login.png" alt="" />Customer login
                                </li>
                            </a>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="pdfhead">
                <div className="pdf mb-5 " style={{
                    height: '650px',
                    
                }}>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js" className="pb-1">
                        {/* <!-- The viewer component will be put here --> */}
                    <h3 className='text-center py-2' id="sr">Our Sample Report!</h3>
                        <Viewer fileUrl="s.pdf"  style={{width:'100%'}}/>
                    </Worker>
                    {/* <Viewer fileUrl="C:\Users\AU COMPUTERS\OneDrive\Desktop\S.pdf" />; */}

                </div>
            </div>
            <div className='mt-5'>

            <Footer/>
            </div>

        </>
    )
}

export default Pricing2
