import React from 'react'
import { useEffect } from 'react'
import Table from './Table'
import Aos from 'aos'

function Automation() {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-11 col-sm-11 mx-auto automation" data-aos='fade-right'>
                    <h1 className='text-center' >VINCECK CENTRAL vs CarFax & others</h1>
                    <h4 className='text-center pt-1'>DO NOT OVERPAY!</h4>
                    <h4 className='text-center pt-1'>CHOOSE VINCECK CENTRAL — THE SERVICE YOU CAN EASILY RELY ON!</h4>
                    <p className=' col-md-6 mx-auto  text-center pt-1'> We have seen it and answering to it, Feel like you’re being
                        ripped off by Carfax? It’s an open secret that their vehicle
                        history reports are costly and contain only basic information.</p>
                    <div className="col-md-8 mx-auto tables pt-4" data-aos="zoom-in-up">
                        <Table />
                    </div>
                </div>
        </>
    )
}

export default Automation
