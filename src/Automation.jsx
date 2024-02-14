import React from 'react'
import Table from './Table'

function Automation() {
    return (
        <>
            <div className="col-md-10 mx-auto automation" >
                    <h1 className='text-center' data-aos="fade-left">VINCECK CENTRAL vs CarFax & others</h1>
                    <h4 className='text-center pt-1'data-aos="fade-left">DO NOT OVERPAY!</h4>
                    <h4 className='text-center pt-1'data-aos="fade-left">CHOOSE VINCECK CENTRAL — THE SERVICE YOU CAN EASILY RELY ON!</h4>
                    <p className=' col-md-6 mx-auto  text-center pt-1'data-aos="fade-left"> We have seen it and answering to it, Feel like you’re being
                        ripped off by Carfax? It’s an open secret that their vehicle
                        history reports are costly and contain only basic information.</p>
                    <div className="col-md-8 mx-auto tables pt-4" data-aos="zoom-in">
                        <Table />
                    </div>
                </div>
        </>
    )
}

export default Automation
