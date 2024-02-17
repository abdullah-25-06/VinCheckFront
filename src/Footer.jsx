import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

function Footer() {
    const navigate=useNavigate()
    const contact=()=>{
        navigate('/contact')

    }
    return (
        <>
            {/* <!-- Footer --> */}
            <footer className="footer text-center text-lg-start  text-muted" >
                <section className="links pt-3" data-aos='fade-right'>
                    <div className="container  text-md-start mt-5">
                        {/* <!-- Grid row --> */}
                        <div className="row mt-3">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* <!-- Content --> */}
                                <h6 className="text-uppercase fw-bold mb-4" id='endhead'>
                                    <i className="fas fa-gem me-3" ></i>VINCHECK CENTRAL
                                </h6>
                                <p>
                                    {/* Your gateway to tech excellence. Unleash innovation with our expert team, delivering cutting-edge tech solutions, Transform your digital landscape with us. */}
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="products col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style={{ color: "black" }}>
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Services
                                </h6>
                                <p>
                                    <a  className="text-reset" id="textdec" href='https://threadzapparel.netlify.app/' target='blank'>VIN Lookup</a>
                                </p>
                                <p>
                                    <a href="https://shawlinkenterprise.netlify.app/" className="text-reset" id="textdec" target='blank'>Sample Report</a>
                                </p>
                                
                                <p>
                                    <a href="https://aesthetic-gelato-6ac4b5.netlify.app/" className="text-reset" id="textdec" target='blank'>Customer Login</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="products col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    IMPORTANTS
                                </h6>
                                <p>
                                    <NavLink href="#!" className="text-reset" id="textdec" to="/contact">Pricing</NavLink>
                                </p>
                                <p>
                                    <NavLink href="#!" className="text-reset" id="textdec" to="/contact">Delivery Policy</NavLink>
                            
                                </p>
                                <p>
                                    <NavLink href="#!" className="text-reset" id="textdec" to="/contact">Privacy Policy</NavLink>
                                    
                                </p>
                                <p>
        
                                    <NavLink href="#!" className="text-reset" id="textdec" to="/contact">Terms and condition</NavLink>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4" id='fotcon' >Contact</h6>
                                <p id="textdec"><i className="fas fa-home me-3"></i> VinccheckCentral@gmail.com</p>
                                <p id="textdec">
                                    <i className="fas fa-envelope me-3"></i>
                                    Owner@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> +9234-12345678</p>
                                <p><i className="fas fa-print me-3"></i> +9231-12345678</p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                <div className="footend text-center p-4" >
                    © 2023 Copyright:
                    <a className="text-reset fw-bold"id="textdec" >VINCHECK CENTRAL.COM</a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
            {/* <!-- Footer --> */}
        </>
    )
}

export default Footer
