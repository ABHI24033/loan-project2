import React, { useEffect, useState } from 'react';
import Sidebar from '../UserDashbord/Sidebar';
import { backendUrl } from '../../../env';
import axios from 'axios';
import OpenProfileModal from './OpenProfileModal';

const Connectors = () => {
    const [connectors, setConnectors] = useState([]);

    useEffect(() => {
        const fetchConnectors = async () => {
            
            try {
                const res = await axios.get(`${backendUrl}/getallconnectorUser`);
                const data = res.data;
                // console.log(data);
                setConnectors(data?.user);
            } catch (error) {
                console.log("Error while fetching connectors", error);
            }
        }
        fetchConnectors();
    }, [])

    const ApproveConnector=async(id)=>{
        try {
            const res = await axios.put(`${backendUrl}/update_connector_status/${id}`);
            const data = res.data;
            // console.log(data);
            // setConnectors(data?.user);
            window.location.reload();
        } catch (error) {
            console.log("Error while fetching connectors", error);
        }
    }
    return (
        <div>
            <Sidebar>
                <div className="">
                    {/* <h2 className='mx-4'>Professional loan forms </h2> */}
                    <h2 className='mx-4'>Connectors List</h2>
                    <table className="table table-striped mt-5">
                        <thead>
                            <tr>
                                <th>Sr.no</th>
                                {/* <th>Form Id</th> */}
                                <th>Name</th>
                                <th>Mobile Number</th>
                                <th>What's app Number</th>
                                {/* <th>Timestamp</th> */}
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr>
                                <td>1</td>
                                <td>sdjnswj</td>
                                <td>asdsmlk</td>
                                <td>sadmskd</td>
                                <td>dmxsd</td>
                                <td>
                                    <button className=' btn btn-primary mx-1'>Approved</button>
                                    <button className='btn btn-danger'>Reject</button>
                                </td>
                            </tr> */}
                            {
                                connectors && connectors.map((item, index) => (
                                    <tr key={item._id} >
                                        <td>{index + 1}</td>
                                        {/* <td>{item._id.slice(-6)}</td> */}
                                        <td>{item?.full_name}</td>
                                        <td>{item?.mobile_number}</td>
                                        <td>{item?.whats_app_number}</td>

                                        <td>
                                            {console.log(item?.approved)}
                                            {item?.approved===true
                                                ? <button className=' btn btn-secondary mx-1'>Approved</button>
                                                : <>
                                                    <button 
                                                    className=' btn btn-primary mx-1'
                                                     onClick={()=>{ApproveConnector(item?._id)}}>Approve</button>
                                                    <button className='btn btn-danger'>Reject</button>
                                                </>
                                            }

                                        </td>
                                        <td className=' d-flex gap-2'>
                                            <OpenProfileModal data={item} />
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>


                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>


            </Sidebar>
        </div>
    );
}

export default Connectors;
