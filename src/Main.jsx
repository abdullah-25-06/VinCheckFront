import React from 'react'
import { useEffect } from 'react';
import Aos from 'aos'
import Resizable from './Slick'
import Pricing from './Pricing'
import Faqs from './Faqs'
import Details from './Details';
import Footer from './Footer'
import Navbar from './Navbar';
import Form from './Form';
import Automation from './Automation';
import Source from './Source';
function Main() {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <>
            <Navbar />
            <div className="hero">
                <div className="wrapper col-md-11 mx-auto">
                    <div className="col-md-6 col-sm-6 col1">
                        <img id='carimg' src="c5r.png" alt="" srcset="" />
                        <div className="phone">
                            <img src="pr.png" alt="" />
                        </div>
                    </div>
                    <Form />
                </div>
                <Details />
                <Source/>
                <Automation />
                <div className="col-md-11 mx-auto coments" data-aos="fade-right">
                    <img src="q2.png" id="qimg" alt="" srcset="" />
                    <h2 >What our customers have to say
                        <br />
                        about Us</h2>
                </div>
                <div className="testimonials" >
                    <Resizable />
                </div>
                <div className=" pricingdiv" id='pricing' data-aos="zoom-in-up">
                    <Pricing />
                </div>
                <div className="col-md-11 mx-auto questions">
                    <Faqs />
                </div>
                <div className="end">
                    <Footer />
                </div>
            </div>

        </>
    )
}

export default Main
