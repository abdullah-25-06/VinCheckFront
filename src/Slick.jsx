import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";


export default class Resizable extends Component {
    state = {
        display: true,
        // width: 900
    };
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 650,
            slidesToShow: 3,
            slidesToScroll: 1

        };
        return (
            <>
                {/* <h2> Resizable Collapsible </h2> */}
                <div className="alignment">

                    <div className="col-md-10 mx-auto cards-container"
                        style={{
                            // width: this.state.width + "px",
                            // display: this.state.display ? "block" : "none"
                        }}
                    >
                        <Slider {...settings}>
                            <div className="card1">
                                <h1>Sophia-Rose Butler</h1>
                                <h5>Medical Assistent</h5>
                                <h6>"Wow! Worth much more than I paid.This report is real deal!
                                    Thankyou.
                                </h6>
                            </div>
                            <div className="card1">
                                <h1>Diane-Hurst</h1>
                                <h5>IT-Sourcing Manager</h5>
                                <h6>"The very best. Found odometer
                                    rollbacks.Report impresed me on multiple levels
                                    Thankyou.
                                </h6>
                            </div>
                            <div className="card1">
                                <h1>Damien Couchran</h1>
                                <h5>Sales Associate</h5>
                                <h6>"It was very quick and easy to use. I would recommend it to others also.
                                </h6>
                            </div>
                            <div className="card1">
                                <h1>John Wilton</h1>
                                <h5>Operations Head</h5>
                                <h6>"Very much impressed by the report.Highly aprrieciated the efforts made by the team.Would surely recommend others
                                </h6>
                            </div>
                        </Slider>
                    </div>
                </div>
            </>
        );
    }
}