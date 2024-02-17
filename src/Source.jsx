import React, { useEffect } from 'react'
import Aos from 'aos'

function Source() {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <>
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-11 col-sm-10 mx-auto source" data-aos="fade-right"  >
                    <h2>NMVTIS Source</h2>
                    <h6 className='sourcetext mt-2'>NMVTIS is a national database that was created to protect consumers from fraud and unsafe vehicles. It also keeps stolen vehicles from being resold to unsuspecting buyers and provides consumers with the most up-to-date and accurate vehicle information.</h6>
                </div>
        </>
    )
}

export default Source
