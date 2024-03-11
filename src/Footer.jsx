import React from 'react'
// import { NavLink } from 'react-router-dom'


function Footer() {
    
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
                                <img src="wlogo.png" alt="" id="wlogo2" />
                                {/* <h6 className="text-uppercase fw-bold mb-4" id='endhead'>
                                    <i className="fas fa-gem me-3" ></i>VINCHECK CENTRAL
                                </h6> */}
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
                                    <a  className="text-reset" id="textdec" href='/' >VIN Lookup</a>
                                </p>
                                <p>
                                    <a href="/Sample" className="text-reset" id="textdec" >Sample Report</a>
                                </p>
                                
                                <p>
                                    <a href="/Login" className="text-reset" id="textdec" >Customer Login</a>
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
                                    <a href="/pricing" className="text-reset" id="textdec" to="">Pricing</a>
                                </p>
                                <p>
                                    <a href="/Delivery" className="text-reset" id="textdec" >Delivery Policy</a>
                            
                                </p>
                                <p>
                                    <a href="/Privacy" className="text-reset" id="textdec" >Refund Policy</a>
                                    
                                </p>
                                <p>
        
                                    <a href="/Terms" className="text-reset" id="textdec" >Terms and condition</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4" id='fotcon' >Contact</h6>
                                <p id="textdec"><i className="fas fa-home me-3"></i> Info@vincheckcentral.com</p>
                                
                                <p><i className="fas fa-phone me-3"></i> +1 801 697 6810</p>
                                {/* <p><i className="fas fa-print me-3"></i> +9231-12345678</p> */}
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                <div className="footend text-center p-4" >
                    © 2023 Copyright | 
                    <a className="text-reset fw-bold" href="/"  style={{cursor:'pointer'}}  > VIN CHECK CENTRAL</a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
            {/* <!-- Footer --> */}
        </>
    )
}

export default Footer
