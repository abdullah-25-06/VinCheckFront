import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
// import style


export default function Table() {
    return (
        <MDBTable >
            <MDBTableHead>
                <tr className='table-info'>
                    <th scope='col' className='thead' >Report Contents</th>
                    <th className='text-center thead' scope='col' style={{ whiteSpace: 'nowrap' }} >Vincheck Central</th>
                    <th scope='col' className='text-center thead' >CarFax</th>
                    <th scope='col' className='text-center thead' >AutoCheck</th>
                    <th scope='col' className='text-center thead'>InstaVIN</th>
                </tr>
                <div className="gap"></div>
            </MDBTableHead>
            <MDBTableBody>

                <tr className='table-info'>
                    <th scope='row' className='rhead'>Free Photo</th>
                    <td className='text-center'><img id='tcheck' src="tick.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck2' src="cross.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck2' src="cross.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck2' src="cross.png" alt="" /></td>
                </tr>
                <div className="gap"></div>
                <tr className='table-info'>
                    <th scope='row' className='rhead'>Odometer Reading</th>
                    <td className='text-center'><img id='tcheck' src="tick.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck2' src="cross.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck2' src="cross.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck2' src="cross.png" alt="" /></td>
                </tr>
                <div className="gap"></div>
                <tr className='table-info'>
                    <th scope='row' className='rhead'>Accident Check</th>
                    <td className='text-center'><img id='tcheck' src="tick.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck' src="tick.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck2' src="cross.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck2' src="cross.png" alt="" /></td>
                </tr>
                <div className="gap"></div>
                <tr className='table-info'>
                    <th scope='row' className='rhead'>Title Check</th>
                    <td className='text-center'><img id='tcheck' src="tick.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck2' src="cross.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck2' src="cross.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck2' src="cross.png" alt="" /></td>
                </tr>
                <div className="gap"></div>
                <tr className='table-info'>
                    <th scope='row' className='rhead'>Fraud & Crime Information</th>
                    <td className='text-center' ><img id='tcheck' src="tick.png" alt="" /></td>
                    <td className='text-center' ><img id='tcheck' src="tick.png" alt="" /></td>
                    <td className='text-center' ><img id='tcheck2' src="cross.png" alt="" /></td>
                    <td className='text-center' ><img id='tcheck2' src="cross.png" alt="" /></td>
                </tr>
                <div className="gap"></div>
                <tr className='table-info'>
                    <th scope='row' className='rhead'>Market Price Analysis</th>
                    <td className='text-center'><img id='tcheck' src="tick.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck' src="tick.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck' src="tick.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck' src="tick.png" alt="" /></td>
                </tr>
                <div className="gap"></div>

                <tr className='table-info'>
                    <th scope='row' className='rhead'>Instant Report: Get your report
                        instantly! No waiting around</th>
                    <td className='text-center'><img id='tcheck' src="tick.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck2' src="cross.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck2' src="cross.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck2' src="cross.png" alt="" /></td>
                </tr>
                <div className="gap"></div>
                <tr className='table-info'>
                    <th scope='row' className='rhead'>Accurate Data: Using government
                        and third party databases</th>
                    <td className='text-center'><img id='tcheck' src="tick.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck2' src="cross.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck2' src="cross.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck2' src="cross.png" alt="" /></td>
                </tr>
                <div className="gap"></div>
                <tr className='table-info'>
                    <th scope='row' className='rhead'><b style={{color:'rgb(86 39 39)',fontWeight:'bold'}}>Savings:</b> The competitors
                        charge <b> $39.99 </b>for a single report!</th>
                    <td className='text-center'> <img id='tcheck' src="tick.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck2' src="cross.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck2' src="cross.png" alt="" /></td>
                    <td className='text-center'><img id='tcheck2' src="cross.png" alt="" /></td>
                </tr>
                <div className="gap"></div>

            </MDBTableBody>
        </MDBTable>
    );
}