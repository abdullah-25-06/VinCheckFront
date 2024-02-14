import React from 'react'
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
function Dashboard() {

    return (
        <>
            <div className="dashboard">
                <div className="head">
                    <div className="navhead">

                        <div className="title">

                            <NavLink className="nav-link" to='/'><p>Vincheck Central</p></NavLink>

                        </div>
                    </div>
                    <div className='nborder'></div>
                </div>
                <div className="dbody">
                    {/* This is siebat */}
                    <Sidebar />
                    <div className="reqform">
                        <h1>
                            Refund Application
                        </h1>
                        <div className="col-md-8 mx-auto mainreq">

                            <div className="reqbox"><div class="row mb-4">
                                <div class="col">
                                    <div data-mdb-input-init class="form-outline">
                                        <label class="form-label" for="form3Example1" id='reqlabel'> VIN Number</label>
                                        <input type="text" id="form3Example1" class="form-control" placeholder='Enter vin number' />
                                    </div>
                                </div>
                                <div class="col">
                                    <div data-mdb-input-init class="form-outline">
                                        <label class="form-label" for="form3Example2" id='reqlabel'>Transaction ID(optional)</label>
                                        <input type="text" id="form3Example1" class="form-control" placeholder='Enter transaction id' />
                                    </div>
                                </div>
                                <div className="mb-3 pt-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='I need a refund because...' ></textarea>
                                </div>
                                <div className="reqbtn">

                                    <button class="btn btn-success mt-2" style={{ fontSize: '13px' }}>Request a refund</button>
                                </div>
                            </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </>

    )
}

export default Dashboard
