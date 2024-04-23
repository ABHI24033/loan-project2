import React, { useEffect, useState } from 'react';
import Sidebar from '../UserDashbord/Sidebar';
import { Link, useParams } from 'react-router-dom';
import { backendUrl } from '../../../env';
import FormDetailsModal from '../Admin/FormDeatils/FormDeatilsModal';

const FormDetailTable = () => {
    const [data, setData] = useState();
    const [heading, setHeading] = useState();
    const param = useParams();
    const { endpoint } = param;

    // console.log(endpoint);
    useEffect(() => {
        getData();

        if (endpoint === "getAllProfessionalForms") {
            setHeading("Professional Forms")
        }
        if (endpoint === "getAllGoldForms") {
            setHeading("Gold Loan Form")
        }
        if (endpoint === "getAllPersonalForms") {
            setHeading("Personal Loan Form")
        }
        if (endpoint === "getAllSchoolForms") {
            setHeading("School Loan Form")
        }
        if (endpoint === "getAllCarLoanForms") {
            setHeading("Car Loan Form");

        }
        if (endpoint === "getAllHomeLoanForms") {
            setHeading("Home Loan Form")
        }
        if (endpoint === "getAllBusinessLoanForms") {
            setHeading("Business Loan Form")
        }
    }, [endpoint])


    const getData = async () => {
        try {
            // const userID = localStorage.getItem("userID");
            const response = await fetch(
                // `http://15.207.195.184:8000/api/v1/${endpoint}/${userID}`,
                // `${backendUrl}${endpoint}/${userID}`,
                `${backendUrl}${endpoint}`,
                // "http://15.207.195.184:8000/api/v1/getAllProfessionalForms",
                // "http://15.207.195.184:8000/api/v1/getAllProfessionalForms",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log(data);
            setData(data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    

    return (
        <div>
            {/* <Sidebar> */}
                <div className="container my-6 mt-19">
                    {/* <h2 className='mx-4'>Professional loan forms </h2> */}
                    <h2 className='mx-4'>{heading}</h2>
                    <table className="table table-striped mt-5">
                        <thead>
                            <tr>
                                <th>Sr.no</th>
                                {/* <th>Form Id</th> */}
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Connector's Profile</th>
                                <th>Status</th>
                                {/* <th>Timestamp</th> */}
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data && data.map((item, index) => (
                                    <tr key={item._id} >
                                        <td>{index + 1}</td>
                                        <td>{item?.userdetails?.name}</td>
                                        <td>{item?.userdetails?.email}</td>
                                        <td>
                                            <button className=' btn btn-primary py-1 px-3'>View</button>
                                        </td>
                                        <td className='d-flex gap-3'>
                                            <button className='btn py-1 btn-primary px-2'>Approve</button>
                                            <button className='btn py-1 px-2 btn-danger'>Reject</button>
                                        </td>
                                        <td>
                                            {/* <button className=' btn btn-success px-4 py-1'>V</button> */}
                                            <FormDetailsModal data={item} />
                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>


            {/* </Sidebar> */}


        </div>
    );
}


export default FormDetailTable;
