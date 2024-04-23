import React, { useState } from 'react';
import { backendUrl } from '../../../../env';

const FormDetailsModal = ({ data }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    console.log(data);
    return (
        <div>
            <button onClick={toggleModal} className='btn btn-primary px-2 py-1 w-100'>View user</button>
            {showModal && (
                <div className="modal bd-example-modal-lg" tabIndex="-1" role="dialog" style={{ display: 'block', width: "100%" }}>
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content ">
                            {/* <div className="modal-header">
                {/* <h5 className="modal-title">{}</h5> */}
                            {/* <button type="button" className="close" onClick={toggleModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button> */}
                            {/* </div> */}
                            <div className="modal-body mx-4 my-4">
                                <div>
                                    <h3 className='border-b border-secondary'>User Details</h3>
                                    <p>Name: {data?.userdetails?.name}</p>
                                    <p>Email: {data?.userdetails?.email}</p>

                                    <p>Phone: {data?.userdetails?.phone}</p>
                                    <p>Address: {data?.userdetails?.address}</p>
                                    <p>Business Address: {data?.userdetails?.address}</p>
                                </div>
                            </div>
                            <div className="modal-body mx-4 my-4">
                                <div>
                                    <h3>User Banking Details</h3>
                                    {
                                        data?.userbankingdetails && data?.userbankingdetails.map((item, index) => {
                                            return (
                                                <div>
                                                    <p><span>Bank Name : </span> {item?.bank_name} </p>
                                                    <p><span>Account Number : </span>{item?.account_number}</p>
                                                    <p><span>Account Type : </span>{item?.account_type}</p>
                                                    <p> <span>Remarks : </span>{item?.remarks}</p>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>

                            <div className="modal-body mx-4 my-4">
                                <div>
                                    <h3>User Loan payment Details</h3>
                                    {
                                        data?.userloanpaymentdetails && data?.userloanpaymentdetails.map((item, index) => {
                                            return (
                                                <div>
                                                    <p><span>Addhar Number : </span> {item?.bank_name} </p>
                                                    <p><span>Bank NBFC : </span>{item?.bank_nbfc}</p>
                                                    <p><span>DOB: </span>{item?.dob}</p>
                                                    <p> <span>Loan Type : </span>{item?.loan_type}</p>
                                                    <p> <span>EMI : </span>{item?.emi}</p>
                                                    <p> <span>Pan No. : </span>{item?.pan_no}</p>
                                                    <p> <span>Pending : </span>{item?.pandding}</p>
                                                    <p> <span>Spouse Name  : </span>{item?.spouse_name}</p>
                                                    <p> <span>Spouse DOB  : </span>{item?.spouse_dob}</p>
                                                    <p> <span>Vter ID : </span>{item?.voter_id}</p>
                                                    {/* <p> <span>Remarks : </span>{item?.remarks}</p> */}
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                            <div className="modal-body mx-4 my-4">
                                <div>
                                    <h3>Co-Applicant  Details</h3>
                                    <p>Name: {data?.coapplicantdetails?.co_name}</p>
                                    <p>Email: {data?.coapplicantdetails?.co_email}</p>

                                    <p>Phone: {data?.coapplicantdetails?.co_phone}</p>
                                    <p>Address: {data?.coapplicantdetails?.co_address}</p>
                                    <p>Business Address: {data?.coapplicantdetails?.co_address}</p>
                                </div>
                            </div>

                            <div className="modal-body mx-4 my-4">
                                <div>
                                    <h3>Documents</h3>
                                    {
                                        data?.files && data?.files?.map((item, index) => {
                                            return (
                                                <div key={index} className='my-2'>
                                                    <a
                                                        href={`http://localhost:8000/temp/${item?.fileName}`}
                                                        target='_blanks'
                                                        className='mx-3 bg-primary text-white px-2 py-2 rounded'
                                                    >
                                                        {item?.fieldName}
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary py-2 px-3" onClick={toggleModal}>Close</button>
                                {/* Additional buttons or actions can be added here */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FormDetailsModal;
