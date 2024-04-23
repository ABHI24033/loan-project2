import React, { useEffect, useState } from 'react';
import Sidebar from '../UserDashbord/Sidebar';
import { backendUrl } from '../../../env';
import axios from 'axios';
import OpenProfileModal from './OpenProfileModal';

const Employess = () => {
    const [employee,setEmployee]=useState([])

    useEffect(() => {
        // document.title = 'Employee List';
        const fetchEmployeeData = async () => {
            try {
                const responce=await axios.get(`${backendUrl}/get_employee`);
                // console.log(responce?.data);
                if(responce?.data){
                    // setEmployee((prev)=>([...prev,responce?.data]))
                    setEmployee(responce?.data)
                }
            } catch (error) {
                console.log(error,"error");
            }
        }
        fetchEmployeeData();
    }, []);

    // console.log(employee);
  return (
    <div>
      <Sidebar>
                <div className="">
                    {/* <h2 className='mx-4'>Professional loan forms </h2> */}
                    <h2 className='mx-4'>Employee List</h2>
                    <OpenProfileModal/>
                    <table className="table table-striped mt-5">
                        <thead>
                            <tr>
                                <th>Sr.no</th>
                                {/* <th>Form Id</th> */}
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile Number</th>
                                <th>Address</th>
                                {/* <th>Status</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employee && employee.map((item, index) => (
                                    <tr key={item._id} >
                                        <td>{index + 1}</td>
                                        {/* <td>{item._id.slice(-6)}</td> */}
                                        <td>{item?.full_name}</td>
                                        <td>{item?.email}</td>
                                        <td>{item?.mobile_number}</td>
                                        <td style={{width:"7rem"}}>{item?.address?.map((item,index)=>
                                        (<p key={index} >{item?.street},{item?.district},{item?.pincode}</p>
                                        ))}</td>
                                        <td className=' d-flex gap-2'>
                                        {/* <button className=' btn btn-primary mx-1'>Open Profile</button> */}
                                        <OpenProfileModal data={item}/>
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

export default Employess;
