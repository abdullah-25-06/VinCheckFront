import React from "react";

function Details() {
  return (
    <>
      <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 mx-auto details">
        {/* data-aos="fade-right" */}
        <div className="detailtext" data-aos-offset="10" data-aos="fade-right">
          <h2>Vital information to consider before buying</h2>
          <h5>Vehicle history report will reveal</h5>
        </div>
        <div className="col-xxl-10 col-xl-12 col-lg-12 col-md-12 col-sm-10 mx-auto details2">
          <div
            className="col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-sm-5 mx-auto cola"
            data-aos-offset="10"
            data-aos="fade-up"
          >
            <img src="topcar.png" alt="" />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-6 mx-auto colb">
            <div className="mainbox">
              <div className="row1">
                <div class="tooltip-container">
                  <div className="box1">
                    <div className="boxtop">
                      <div className="borders">
                        <div className="boxa"></div>
                      </div>
                    </div>
                    <div className="boxbottom">
                      <img src="tick.png" alt="" />
                      <span class="tooltip" id="tooltext">
                        The <b>certificate of title </b> for a vehicle is a
                        legal form, establishing a person or business as the
                        legal owner of a vehicle. Vehicle titles in the U.S. are
                        commonly issued by the Secretary of State in the state
                        the vehicle was purchased by the Department of Motor
                        Vehicles (DMV).
                      </span>

                      <p>Title records</p>
                    </div>
                  </div>
                </div>
                <div class="tooltip-container">
                  <div className="box1">
                    <div className="boxtop">
                      <div className="borders">
                        <div className="boxb"></div>
                      </div>
                    </div>
                    <div className="boxbottom">
                      <img src="tick.png" alt="" />
                      <span class="tooltip" id="tooltext">
                        This section emphasizes any historical or practical
                        reports of theft and theft recoveries using information
                        from the <b> National Insurance Crime Bureau</b> as well
                        as other reputable industry sources. Consumer
                        precaution: those who are deceived into buying a stolen
                        car often lose money and the car if it is found by the
                        police.
                      </span>

                      <p>Theft report</p>
                    </div>
                  </div>
                </div>

                <div className="tooltip-container">
                  <div className="box1">
                    <div className="boxtop">
                      <div className="borders">
                        <div className="boxc"></div>
                      </div>
                    </div>
                    <div className="boxbottom">
                      <img src="tick.png" alt="" />
                      <span class="tooltip" id="tooltext">
                        An accident record identifies car accidents both small
                        and large usually in cases where there is a police
                        report accompanying the accident event. Note that, like
                        other car history providers and <b>Vincheckcentral</b>{" "}
                        covers risks from a combination of police departments,
                        state agencies, and industry sources.
                      </span>

                      <p className="acc">Accidents record</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row1">
                <div className="tooltip-container">
                  <div className="box1">
                    <div className="boxtop">
                      <div className="borders">
                        <div className="boxd"></div>
                      </div>
                    </div>
                    <div className="boxbottom">
                      <img src="tick.png" alt="" />
                      <span className="pt-4 tooltip" id="tooltext">
                        Cars proclaimed as totally lost by the insurance
                        company, vehicles registered with a trash/scrap yard,
                        and vehicles sold at a salvage auction{" "}
                        <b>(perhaps to be restored and resold)</b> are all
                        included in the salvage, junk, and insurance category.
                      </span>
                      <p>JSI records</p>
                    </div>
                  </div>
                </div>
                <div className="tooltip-container">
                  <div className="box1">
                    <div className="boxtop">
                      <div className="borders">
                        <div className="boxe"></div>
                      </div>
                    </div>
                    <div className="boxbottom">
                      <img src="tick.png" alt="" />
                      <span className="pt-4 tooltip" id="tooltext">
                        This section displays the listings history of the car
                        for sale,{" "}
                        <b>
                          either by a private company or by a car dealership
                        </b>
                        . In some cases, this may give you an idea of when the
                        car was previously sold and the price at which the car
                        was sold at.
                      </span>

                      <p>Sales history</p>
                    </div>
                  </div>
                </div>
                <div className="tooltip-container">
                  <div className="box1">
                    <div className="boxtop">
                      <div className="borders">
                        <div className="boxf"></div>
                      </div>
                    </div>
                    <div className="boxbottom">
                      <img src="tick.png" alt="" />
                      <span className="tooltip" id="tooltext">
                        A recall is issued when a manufacturer/NHTSA determines
                        that a vehicle, equipment, car seat, or tire creates an{" "}
                        <b>
                          unreasonable safety risk or fails to meet minimum
                          safety standards
                        </b>
                        . Most decisions to conduct a recall and remedy a safety
                        defect are made voluntarily by manufacturers prior to
                        any involvement by NHTSA
                      </span>
                      <p id="space"> Manufacturer recalls</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row1">
                <div className="tooltip-container">
                  <div className="box1">
                    <div className="boxtop">
                      <div className="borders">
                        <div className="boxg"></div>
                      </div>
                    </div>
                    <div className="boxbottom">
                      <img src="tick.png" alt="" />
                      <span className="pt-4 tooltip" id="tooltext">
                        The previous{" "}
                        <b>
                          salvage auction listings are provided in this section
                        </b>
                        . This suggests that the vehicle was so heavily damaged
                        that the insurance company declared it a total loss and
                        auctioned it..
                      </span>
                      <p id="space">Auction Information</p>
                    </div>
                  </div>
                </div>
                <div className="tooltip-container">
                  <div className="box1">
                    <div className="boxtop">
                      <div className="borders">
                        <div className="boxh"></div>
                      </div>
                    </div>
                    <div className="boxbottom">
                      <img src="tick.png" alt="" />
                      <span className="pt-4 tooltip" id="tooltext">
                        The <b>vehicle identification number</b> provided can be
                        decoded into the vehicles specifications as well as
                        details about the vehicle. These details include fuel
                        efficiency, brake control, handling, aerodynamics, and
                        the calculated size of the vehicle.
                      </span>
                      <p id="space">Technical data</p>
                    </div>
                  </div>
                </div>
                <div className="tooltip-container">
                  <div className="box1">
                    <div className="boxtop">
                      <div className="borders">
                        <div className="boxi"></div>
                      </div>
                    </div>
                    <div className="boxbottom">
                      <img src="tick.png" alt="" />
                      <span className="pt-4 tooltip" id="tooltext">
                        This section displays our checks{" "}
                        <b>for all possible title brands </b> published by state
                        DMVs against the title. The “branded” title - unlike the
                        “clean” title - indicates that the state has permanently
                        connected a potential problem to this vehicle.
                      </span>
                      <p id="space"> Title brand information</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 col-md-11 mx-auto  btext">
                <p>
                  ... and additional information on the vehicle that may or may
                  not be related to the it's history.
                </p>
              </div>
              <div className="searchbtn">
                <div className="parabutton ">
                  <button id="pbtn" className="mb-4 ">
                    <span>SAMPLE REPORT</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
