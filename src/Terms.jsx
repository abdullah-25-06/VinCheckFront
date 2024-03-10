import React from 'react'

import { NavLink } from 'react-router-dom'
import Aos from 'aos'

import { useEffect } from 'react'
import Footer from './Footer'


function Terms() {

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
            <h3 id='pr' className='text-center mt-3'>Our Terms & Conditions!</h3>
            <div className="delivery">
                <div className='dt'>
                    <p>
                        Welcome to https://digitalvinautomation.com, which Digital VIN Automation (“we”, “us”, “our”) owns. To remain on this site and access its features, we ask that you agree to comply with our Terms of Service. Along with the NMVTIS Disclaimer and Privacy Policy , our Terms of Service define your interactions with this website.
                    </p>
                </div>

            </div>
            <div className="delivery">
                <div className="dt" id='ds'>
                    <h6 >1. AGREEMENT TO BE BOUND - CHANGES TO TERMS

                    </h6>
                </div>
                <div className="dt">
                    <p style={{ fontSize: '15px' }}>
                        This document is a legal agreement between you and Digital VIN Automation that outlines the rules dictating how you may use our products and services, (“Services,”) which are made available through our Website, https://digitalvinautomation.com. Any use of the Website, products, or services constitutes an acceptance by you to be bound by these Terms.
                        <br />
                        We may update these Terms at our discretion and from time to time, which may include future terms, licenses, and other policies or procedures. In such an event we will notify you through email and by prominently posting a notice to the Website. Do not use our Services if you do not agree to such changes. If you continue to use https://digitalvinautomation.com after any posted changes your use will indicate your agreement to the modified Terms.
                        <br />
                        We reserve the right to refuse access to any Service for any reason or no reason, including non-compliance with these Terms.
                    </p>
                </div>
                <div className="dt" id='ds'>
                    <h6 >2. DESCRIPTION OF Digital VIN Automation SERVICE

                    </h6>
                </div>
                <div className="dt">
                    <p style={{ fontSize: '15px' }}>We provide critical, real-time data through Vehicle History Reports and Auto Auction Records Reports to automotive dealers and consumers who are interested in purchasing used vehicles. Additionally, we offer Vehicle Inspection Reports and complementary services that include a VIN Decoder and Vehicle Recalls Check. Our Vehicle History Reports contain data that the National Motor Vehicle Title Information System (NMVTIS) provides and both lien and theft information that NMVTIS does not provide. Our Vehicle History Reports may contain information from the auto auction database if the vehicle has ever been sold via auction. This includes photos and details that the public has access to on the auto auction website when the vehicle was available for sale. We also offer this information in Digital VIN Automation Auto Auction Records Reports. Digital VIN Automation Vehicle Inspection Reports are made up of data from our representatives that perform the vehicle inspections
                        <br />We do not warrant that the information we provide in these reports is always accurate, timely, or complete. It is provided for informational purposes only and should not be relied upon as the sole source of information when purchasing a used vehicle. Any reliance is at the user’s own risk. We cannot be held liable for any purchases you make in reliance on our reports.
                    </p>
                </div>
                <div className="dt" id='ds'>
                    <h6 >3. AGE REQUIREMENTS FOR USE OF SERVICE
                    </h6>
                </div>
                <div className="dt">
                    <p style={{ fontSize: '15px' }}>Digital VIN Automation's services are accessible to those who are age 13 and older, but those who are under the age of 18 must obtain and hereby warrant that they so they have obtained parental or guardian consent where the parent or guardian agrees to be also bound by these same Terms.
                    </p>
                </div>
                <div className="dt" id='ds'>
                    <h6 >4. SOFTWARE AND HARDWARE REQUIREMENTS
                    </h6>
                </div>
                <div className="dt">
                    <p style={{ fontSize: '15px' }}>To use Digital VIN Automation's services, you do need Internet access and certain software that you may be responsible to pay for. Additionally, upgrades and updates are likely to be needed occasionally. We recommend high speed Internet to access our site because performance may be hindered otherwise. We do not warrant that your computer or device will be compatible with the Services. We shall not be responsible for your failure to access the site or our Services, and no refunds shall be granted in such an event.
                    </p>
                </div>
                <div className="dt" id='ds'>
                    <h6 >5. WHAT YOU SHOULD AND SHOULD NOT EXPECT FROM Digital VIN Automation
                    </h6>
                </div>
                <div className="dt">
                    <p style={{ fontSize: '15px' }} >
                        <b>
                        QUALITY AND DELIVERY</b> : While we endeavor to provide uninterrupted service, we cannot guarantee that you will never experience disruptions, omissions, inaccuracies, or delays. As you may be accessing Digital VIN Automation's services on a cellular system, Internet lines, or a public switched telephone network, power outages or other interruptions may occur that are out of our control
                        <br />
                        <b>TECHNICAL IMPROVEMENT AND MAINTENANCE</b> : We may, at any time, change our Service offerings to ensure regulation compliance and to make certain our offerings are up-to-date. Repairs or updates to our system may necessitate that we limit or even suspend services
                        <br />
                        <b>CONTENT OF COMMUNICATIONS </b>: We do not have the ability to control any content that is disseminated by the use of our Services. Content is the sole responsibility of the entity that originates it. Because of this, there is the possibility that content you encounter may be offensive, illegal, or otherwise questionable or it may be inaccurate, untimely, or erroneous
                        <br />
                        <b>
                        GENERAL PRACTICES REGARDING USE AND STORAGE </b>: We do not accept liability for any content that we maintain. Additionally, we do not accept responsibility for information that is deleted or transmitted from the system. We have the right to limit use of our Services at any time
                        <br />
                        <b>CONTENT OF THE SERVICE</b>: We may, at any time, delete or refuse to disseminate any content that appears via our Services. This may result in errors and inaccuracies in reports or the untimeliness of the same. Digital VIN Automation is not responsible for any third-party content and may access and/or disclose information it believes needed to:
                        <br />
                        <b>1. meet any legal requirements</b>
                        <br />
                        <b>2. enforce these terms of service</b>
                        <br />
                        <b>3. protect from cyber threats and technical problems</b>
                        <br />
                        <b>4. answer user concerns</b>
                        <br />
                        <b>5. secure the integrity of Digital VIN Automation, its users, and the public</b>
                        <br />
                        <b>TERMINATION</b>: In addition to altering these Terms at any time, Digital VIN Automation also may terminate its Services at any time and/or your use thereof, with or without cause
                    </p>
                </div>
                <div className="dt" id='ds'>
                    <h6 >6. WHAT Digital VIN Automation EXPECTS FROM YOU
                    </h6>
                </div>
                <div className="dt">
                    <p style={{ fontSize: '15px' }}>1. You are required to have an Digital VIN Automation account to use our Services. We generally limit registrations to unique individuals, and account transfers are typically not granted.
                        <br />
                        2. Account information must be the same as information an individual uses for his or her identification method. Single individuals or legal entities may use an account. Should you create an additional account, you may have to pay additional fees. You must also obtain our written permission to transfer your account to any third party. It is not our policy to withhold consent to the transfer of an account in good standing
                        <br />
                        3. We may suspend or terminate your account at any time for any reason without notification. Should we do so, you will not receive a refund or be compensated in any way for remaining subscription time or anything else
                        <br />
                        4. Remedial actions may be taken against delinquent accounts
                        <br />
                        5. If you breach the Terms of Service or are late on a payment, resulting in your account being suspended or terminated, Digital VIN Automation reserves the right to suspend or terminate any account that you or anyone associated with your organization have
                        <br />
                        6. To retain access and maintain your electronic records, you may need to have specific hardware and software. By submitting data to https://digitalvinautomation.com, you acknowledge your agreement to abide by our terms of service and pay for transactions you agree to take part in on our website. This includes notices of cancellation, contacts, applications, and policies
                        <br />
                        7. You will not rely on an https://digitalvinautomation.com report as the sole basis for a vehicle purchasing decision
                        <br />
                    </p>
                </div>
                <div className="dt" id='ds'>
                    <h6 >7. PAID SERVICES/AGREEMENT TO PAY
                    </h6>
                </div>
                <div className="dt">
                    <p style={{ fontSize: '15px' }}>1. We reserve that right to change prices and the availability of our Services at any time
                        <br />
                        2. We require you to have an account to use our Services, which requires payment of a fee. Visit the Services section of our website for information about fees
                        <br />
                        3. We may change our billing methods or fees at any time. Clients with a monthly subscription for Digital VIN Automation services will be given 30 days’ notice via our Terms of Service posted on https://digitalvinautomation.com
                        <br />
                        4. Should you elect to cancel your subscription, you may do so at any time. Any fees that are on your account will not be refunded or prorated. Additionally, we may charge you for any applicable sales tax
                        <br />
                        5. Account holders are solely responsible for any incurred charges. This includes all purchases and applicable taxes, even purchases that are made unlawfully, fraudulently, and without your authorization. If you believe your account has been compromised you should immediately contact us
                        <br />
                        6. Charges or fees of any sort that you incur via a third-party linked to on https://digitalvinautomation.com are your responsibility
                        <br />
                    </p>
                </div>
                <div className="dt" id='ds'>
                    <h6 >8. INTELLECTUAL PROPERTY RIGHTS

                    </h6>
                </div>
                <div className="dt">
                    <p style={{ fontSize: '15px' }}>U.S. and international intellectual property laws protect Digital VIN Automation Rights, made up of the Services that we offer and own all right, title, and interest to. As a user of our Services, you agree not to copy, modify, or create derivative works based off of our offerings. Additionally, you will not use any automated or manual process to copy or monitor our content.
                        <br />
                        You are not allowed to use our Service marks, logos, trademarks, trade names, or any other brand features without written permission from us. Third-party content that appears in our Services is not included in Digital VIN Automation Rights. Conversely, we are not responsible for any content that you post to our website directly or via a third party. As such, you are responsible for protecting your intellectual property. Your posting of content on our Services constitutes your intent to allow Digital VIN Automation a worldwide, non-exclusive, royalty-free license to use such content as we deem appropriate. Content posted via our Services remains posted at our discretion.
                        <br />Information that you self-report, personal or otherwise, is authorized for us to use as outlined in our Privacy Policy. We may also share this information with third parties and call centers for their use. Additionally, your submission of this information authorizes us, third parties, and call centers to use your phone number to contact you. Do not submit your information if you do not wish to be contacted via telephone.
                    </p>
                </div>
                <div className="dt" id='ds'>
                    <h6 >9. GENERAL COMPLIANCE WITH LAWS

                    </h6>
                </div>
                <div className="dt">
                    <p style={{ fontSize: '15px' }}>Digital VIN Automation operates its services from offices located in the United States. Your use of our Services affirms that you comply with all applicable laws, statutes, ordinances, and regulations.
                    </p>
                </div>
                <div className="dt" id='ds'>
                    <h6 >10. ENFORCEMENT OF THESE TERMS

                    </h6>
                </div>
                <div className="dt">
                    <p style={{ fontSize: '15px' }}>We may use any means we feel necessary to enact all terms of service in this agreement. This includes Digital VIN Automation's need to comply with all related legal processes. Your use of Digital VIN Automation's services means you submit to us the right to disclose any volunteered information to law enforcement authorities, municipal entities, or others reasonably necessary for compliance purposes without liability to you.
                    </p>
                </div>
                <div className="dt" id='ds'>
                    <h6 >11. NO RESPONSIBILITY FOR THIRD-PARTY MATERIALS OR WEB SITES

                    </h6>
                </div>
                <div className="dt">
                    <p style={{ fontSize: '15px' }}>Third-party content that appears on https://digitalvinautomation.com and third-party websites that we link to are not the responsibility of Digital VIN Automation. We do not make any representations regarding the accuracy, timeliness, or completeness of any report. Additionally, we will not have any liability or responsibility for third-party collected data or the accuracy, timeliness, or completeness of any report. This includes information that is related to the condition, safety, marketability, merchantability, quality, ownership history, and accident history of any passenger motor vehicle or data contained in or omitted from a passenger motor vehicle ownership or registration document that any state in the United States issues, including the District of Columbia, or any Canadian province. We are in no way responsible for your use of any third-party materials or any purchase decision you make in reliance on the same.
                    </p>
                </div>
                <div className="dt" id='ds'>
                    <h6 >12. Digital VIN Automation vehicle inspection services terms and conditions


                    </h6>
                </div>
                <div className="dt">
                    <p style={{ fontSize: '15px' }}>1. Not Experts, No Authentication. Digital VIN Automation affiliates who perform vehicle inspections are not experts in any field. They do not have or apply special or specific skills, knowledge, or expertise to provide vehicle inspections. Reports reflect layperson inspections and opinions, arrived at during the time of a personal examination that will not include a test drive of any kind. Digital VIN Automation is not liable for any damages resulting from the use of, or non-use of, this information. Should you rely on any Digital VIN Automation inspection, you do so at your own risk
                        <br />
                        2. No Guarantee. Information contained in our reports is not guaranteed. It may not be accurate, timely, or complete. Additionally, as it is atypical for us to take possession of vehicles, we cannot guarantee that substitutions or changes will not be made after our inspection is completed. We offer no guarantee regarding the condition of any vehicle
                        <br />
                        3. Authorized Communications. Inspectors may not be communicated with directly. Additionally, only an individual who places an order may contact us regarding said order
                        <br />
                        4. Scope of Order. We are not required to divulge any information or facts not within the express scope of an order that are not contained in our expressly described services
                        <br />
                        5. Order Fulfillment Policy. Our goal is to provide you with your report no later than four business days following your order placement. Due to unforeseeable volume and other factors, we do not guarantee this timeline, it is simply a goal
                        <br />
                        6. Cancellation Policy. We will not issue refunds for orders canceled after an inspector begins implementing an order. If an order is canceled prior to an inspector starting to implement the order, we will refund 50% of the order price. We define implementing the order as the inspector having made an appointment with the owner/seller of the vehicle or having arrived at the property where the owner/seller has the vehicle located
                        <br />
                        7. Title to Goods or Property. We do not verify, warranty, or guarantee that the person we conduct our inspection with actually owns the vehicle
                        <br />
                        8. Use of subcontractors. We reserve the right to subcontract our Services as we see fit
                        <br />
                        9. Maximum Inspection Time. At most our inspector will spend 15 minutes examining the vehicle for which you have ordered an inspection. The exception to this is any approved custom order that necessitates more time for examination
                        <br />
                        10. No Shows. You will be charged the full fee of the inspection if our inspector connects with the owner and sets a time to perform the inspection. The charge will still be applied even if the seller fails to appear at the site of the inspection at the appointed time and we do
                        <br />
                        11. Entry Upon Private Property. Should we find it necessary to enter private property to complete your order, it will be your responsibility to secure any required consent and provide us with confirmation of that consent. We will not be held responsible for expenses or losses of any sort that we may incur when gaining entry to private property to complete your order
                        <br />
                        12. No Offer. We provide our Services in the United States only. We do not offer or promise to provide any service or product of ours or any third party available to you. The collection of your self-reported information does not constitute an attempt by us or any third parties to sell services or products in any jurisdiction where they are unauthorized
                        <br />
                    </p>
                </div>
                <div className="dt" id='ds'>
                    <h6 >13. CHANGES

                    </h6>
                </div>
                <div className="dt">
                    <p style={{ fontSize: '15px' }}>We may revise our Terms of Service or services at any time. Such changes are effective immediately, and you show you accept these changes with your continued use of our Services.
                    </p>
                </div>
                <div className="dt" id='ds'>
                    <h6 >14. NOTICES
                    </h6>
                </div>
                <div className="dt">
                    <p style={{ fontSize: '15px' }}>Notices regarding our Services are effective immediately and may be sent to you via the email address you have entered in your account contact information. Alternatively, we may send you a letter via postal mail to the address that you have entered in your account contact information.
                    </p>
                </div>
                <div className="dt" id='ds'>
                    <h6 >15.GOVERNING LAW


                    </h6>
                </div>
                <div className="dt">
                    <p style={{ fontSize: '15px' }}>The internal law of the State of Florida shall govern any questions that concern the validity, construction, and interpretation of these Terms of Service. Suits, actions, or proceedings related to these Terms of Service shall be brought in the court in Miami-Dade County, State of Florida. Parties irrevocably waive, to the fullest extent that the law allows, any objection it may have presently or in the future to the agreed upon venue in any such suit, action, or proceeding. The final judgment resulting from any such suit, action, or proceeding that is brought in any such court shall be binding and enforceable in any court that the party is subject to jurisdiction by a suit upon such judgement.</p>
                </div>
                <div className="dt" id='ds'>
                    <h6 >16. MISCELLANEOUS


                    </h6>
                </div>
                <div className="dt">
                    <p style={{ fontSize: '15px' }}>Should any portion of these Terms of Service be found invalid or unenforceable, it will not negate the remaining portions, which will still be in full force and effect. These Terms of Service serve as our agreement with you and dictate your use of our Services, excluding any previous agreements between you and us. Our failure to enforce a provision or right contained within the Terms of Service does not negate that provision or right, or any other aspect of these Terms of Service. Bear in mind that you may subject yourself to terms and conditions of others when you access affiliate services, third-party content, or third-party software. We will not be responsible for an inability to fulfill any obligations because of conditions that are not within our control.</p>
                </div>
                <div className="dt" id='ds'>
                    <h6 >17. Feedback and Information
                    </h6>
                </div>
                <div className="dt">
                    <p style={{ fontSize: '15px' }}>We are free to use any feedback you submit via this site in any manner we see fit.</p>
                </div>
                <div className="dt" id='ds'>
                    <h5 >Refund terms and conditions


                    </h5>
                </div>
                <div className="dt">
                    <p style={{ fontSize: '15px' }}>If you are not 100% satisfied with your purchase from us, you can submit a request to obtain a full or partial refund of your vehicle history report within 7 days after your purchase. If the refund request is not received within this timeframe then you will not be eligible for a refund. Please note, the reliance on any vehicle history report when purchasing a vehicle is at your own risk. We cannot be held liable for any purchases you make in reliance on our reports.
                    <br className='br' />
                    <b>
                    Valid refund reasons:
                    </b>
                    <br />
                    1. You received an empty report
                    <br />
                    2. You can't open your report or receive an error message
                    <br />
                    3. You were charged twice for the same report
                    <br />
                    <b>
                    Invalid refund reasons:
                    </b>
                    <br />
                    1. Inaccuracies in a report
                    <br />
                    2. Incomplete report
                    <br />
                    3. Untimely report
                    <br />
                    To submit a refund request please contact us on live chat!
            



                    </p>

                </div>
            </div>
            <div className='mt-4'>

                <Footer />
            </div>
        </>
    )
}

export default Terms
