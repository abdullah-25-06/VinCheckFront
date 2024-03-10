import React from 'react'

import { NavLink } from 'react-router-dom'
import Aos from 'aos'

import { useEffect } from 'react'
import Footer from './Footer'


function Delivery() {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <>
            <div className="navhead container">
                <span className="items col-md-11 mx-auto container" >

                    <NavLink className="navbar-brand" id="brandname" to="/" >
                        <NavLink className="navbar-brand" id="brandname" to="/" data-aos='flip-left' data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500"
                            data-aos-delay="500"><img src="glogo.png" alt="" id="wlogo" /></NavLink></NavLink>

                    <li className="nav-item navbar-nav mt-1">
                        <NavLink className="nav-link" id="home" to="/" >Home</NavLink>
                    </li>
                    <li className="nav-item navbar-nav mt-1">
                        <NavLink className="nav-link" id="home1" to="/Sample" >Sample report</NavLink>
                    </li>
                    <li className="nav-item navbar-nav mt-1">
                        <NavLink className="nav-link" id="home2" to="/pricing" >Prices</NavLink>
                    </li>
                    <li className="nav-item navbar-nav mt-1">
                        <NavLink className="nav-link" id="home3" to="/Login" >Customer Login</NavLink>
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
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">VINCHECK CENTRAL</h5>
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
            <h3 id='pr' className='text-center mt-3'>Delivery Policy!</h3>
            <div className="delivery">
                <div className='dt'>
                    <p>

                        At Vincheck Central, we understand the importance of timely delivery of vehicle inspection reports to our customers. Our delivery policy outlines our commitment to providing accurate and efficient delivery of inspection reports.
                    </p>
                </div>

            </div>
            <div className="delivery">
                <div className="dt" id='ds'>
                    <h3 >Inspection Report Timeline</h3>
                </div>
                <div className="dt">
                    <p>
                        Our aim is to deliver inspection reports instantly or within 24-48 hours of payment. The inspection report will be made available to the customer via the website or email. In the event of any unexpected delays, the customer will be notified as soon as possible.

                    </p>
                </div>
                <div className="dt" id='ds'>
                    <h3 >Inspection Report Format</h3>
                </div>
                <div className="dt">
                    <p>All inspection reports will be delivered in a digital format, easily accessible and readable through any device with an internet connection. The report will include an evaluation of the vehicle gathered from different resources.

                    </p>
                </div>
                <div className="dt" id='ds'>
                    <h3 >Inspection Report Accuracy</h3>
                </div>
                <div className="dt">
                    <p>
                        We take great care in ensuring the accuracy of our inspection reports, if the customer finds any inaccuracies in the inspection report, they may contact us to request a refund.

                    </p>
                </div>

                <div className="dt" id='ds'>
                    <h3 >Revisions and Feedback</h3>
                </div>

                <div className="dt">
                    <p>

                        We welcome feedback and suggestions from our customers to help us continuously improve our services. If the customer is not satisfied with the inspection report, they may request revisions until they are completely satisfied with the results.
                    </p>
                </div>

                <div className="dt" id='ds'>
                    <h3 >Acceptance of Deliverables</h3>
                </div>
                <div className="dt"
                ><p>
                        Upon delivery of the final inspection report, the customer will have a reasonable period of time to review and accept the report. Once the report has been accepted, we will consider the inspection to be complete, and payment for services rendered will be due in accordance with our payment terms.
                    </p>
                </div>

                <div className="dt" id='ds'>
                    <h3 >Contact Us</h3>
                </div>
                <div className="dt">
                    <p>

                        If you have any questions or concerns about our delivery policy, please contact us at info@VincheckCentral.com.
                    </p>
                </div>
            </div>
            <div className='mt-4'>

                <Footer />
            </div>
        </>
    )
}

export default Delivery
