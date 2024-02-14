import React from 'react'

function Faqs() {
    return (
        <>
            <div class="accordion">
                <h1 data-aos="flip-left">Frequently Asked Questions</h1>
                <div class="accordion-item">
                    <input type="checkbox" id="accordion1"></input>
                    <label for="accordion1" class="accordion-item-title"><span class="icon"></span>What is a Vehicle History Report?</label>
                    <div class="accordion-item-desc">Vincheck Central provides factual and truthful information about a vehicle. We help customers make an informed decision about a car they may be thinking of buying. It is extremely helpful when purchasing a used car to give a complete overview of the life of the vehicle. The information contained in the vehicle report includes: odometer readings, damages, collisions, recalls, photos, previous owners, information regarding the title and more</div>
                </div>

                <div class="accordion-item">
                    <input type="checkbox" id="accordion2"></input>
                    <label for="accordion2" class="accordion-item-title"><span class="icon"></span>For whom do we provide our history reports?</label>
                    <div class="accordion-item-desc">Vehicle history reports are available to potential buyers and anyone who is interested in the history of the vehicle. The best way to know if a car will be a good buy is to look at https://digitalvinautomation.com. It will alert you to any issues the vehicle may have had in the past or accidents that may cause recurring issues. VIN report also helpful when selling your vehicle as it shows the current information providing proof of a sound vehicle that is worth the asking price. It provides buyers with a sense of security to know that the vehicle is in good shape and with no issues.</div>
                </div>

                <div class="accordion-item">
                    <input type="checkbox" id="accordion3"></input>
                    <label for="accordion3" class="accordion-item-title"><span class="icon"></span>What is a VIN?</label>
                    <div class="accordion-item-desc">
                        A VIN which stands for (Vehicle Identification Number) is the automotive industry’s way to identify every vehicle, regardless of it being a car, motorcycle, truck, bus, or trailer. While the VIN first appeared in the mid-1900s, there was no standardized and universally accepted VIN format, so every vehicle manufacturer used their own VIN style. The VIN has 17 digits.

                        In 1981, the US National Highway Traffic Safety Administration (NHTSA) finally standardized the VIN, and from that point forward every vehicle sold was assigned its own unique 17 character-long combinations of letters (capitals included) and numbers. (VINs cannot include the letters I, O, or Q, mostly to avoid them being confused with 1s and 0s).</div>
                </div>

                <div class="accordion-item">
                    <input type="checkbox" id="accordion4"></input>
                    <label for="accordion4" class="accordion-item-title"><span class="icon"></span>Where can I find my VIN number?</label>
                    <div class="accordion-item-desc">
                        The two places to locate the VIN are the vehicle’s body and the vehicle’s documentation. The VIN can be found printed at the bottom of the driver’s side windshield, next to the lock under the engine hood, inside the drivers door or on the right of the trunk’s spare wheel compartment. The VIN will also be listed on the car registration, insurance policy, and other varying documentations.</div>
                </div>

                <div class="accordion-item">
                    <input type="checkbox" id="accordion5"></input>
                    <label for="accordion5" class="accordion-item-title"><span class="icon"></span>Do Digital VIN Automation reports provide information on every vehicle?</label>
                    <div class="accordion-item-desc">Digital VIN Automation collects a vast amount of data on more than 350 million VIN records. Digital VIN Automation covers a majority of the vehicles registered in the U.S. These reports include data from 1981 on all cars and trucks since that date. Having these reports reduces the chance that you will buy a car with problems or defects.</div>
                </div>

            </div>
        </>
    )
}

export default Faqs
