import React, { useState } from "react";
import './About.css'
import Blogimg1 from "../../assets/images/blog/blog-img.jpg";
import Blogimg2 from "../../assets/images/blog/blog-img-1.jpg";
import Blogimg3 from "../../assets/images/blog/blog-img-2.jpg";
import Blogimg4 from "../../assets/images/blog/blog-img-3.jpg";
import Blogimg5 from "../../assets/images/blog/blog-img-4.jpg";
import Blogimg6 from "../../assets/images/blog/blog-img-5.jpg";
import axios from 'axios';
import { backendUrl } from "../../env";
const ProfessionalLoan = () => {

  let newformData = new FormData();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    application_no: "",
    salary: "",
    loan_type: "",
    user_loan_type: "",
    spouse_name: "",
    spouse_dob: "",
    address: "",
    business_address: "",
    bank_name: "",
    account_type: "",
    account_number: "",
    remark: "",
    pan_no: "",
    adhar_no: "",
    dob: "",
    voter_id: "",
    bank_nbfc: "",
    emi: "",
    pandding: "",
    degree: '',
    //Co_Application
    co_name: "",
    co_email: "",
    co_phone: "",
    co_application_no: "",
    co_salary: "",
    co_loan_type: "",
    co_user_loan_type: "",
    co_spouse_name: "",
    co_address: "",
    co_business_address: "",
    co_bank_name: "",
    co_account_type: "",
    co_account_number: "",
    co_remark: "",
    co_pan_no: "",
    co_adhar_no: "",
    co_dob: "",
    co_voter_id: "",
    co_bank_nbfc: "",
    co_emi: "",
    co_pandding: "",
    co_spouse_dob: "",
  });


  const [formData2, setFormData2] = useState({
    three_month_salary: null,
    itr: null,
    income_proof: null,
    registration_proof: null,
  })

  const [dividendArr, setDividendArr] = useState([
    {
      bank_name: "",
      account_type: "",
      account_number: "",
      remark: " ",

    },
  ]);


  const [dividendArr1, setDividendArr1] = useState([
    {
      pan_no: "",
      adhar_no: "",
      spouse_name: "",
      loan_type: "",
      spouse_dob: "",
      dob: "",
      voter_id: "",
      bank_nbfc: "",
      emi: "",
      pandding: "",
    },
  ]);

  const [dividendArr2, setDividendArr2] = useState([
    {
      dividendArr2co_bank_name: "",
      dividendArr2co_account_type: "",
      dividendArr2co_account_number: "",
      dividendArr2co_remark: "",

    },
  ]);

  const [dividendArr3, setDividendArr3] = useState([
    {
      dividendArr3co_pan_no: "",
      dividendArr3co_adhar_no: "",
      dividendArr3co_spouse_name: "",
      dividendArr3co_loan_type: "",
      dividendArr3co_spouse_dob: "",
      dividendArr3co_dob: "",
      dividendArr3co_voter_id: "",
      dividendArr3co_bank_nbfc: "",
      dividendArr3co_emi: "",
      dividendArr3co_pandding: "",
    },
  ]);

  const [textDisabld, setTextDisabld] = useState(false); // Assuming textDisabld is a state variable


  const handleAdd = () => {
    setDividendArr([
      ...dividendArr,
      {
        bank_name: "",
        account_type: "",
        account_number: "",
        remark: " ",

      },
    ]);
  };
  const handleAdd1 = () => {
    setDividendArr1([
      ...dividendArr1,
      {
        pan_no: "",
        adhar_no: "",
        spouse_name: "",
        loan_type: "",
        spouse_dob: "",
        dob: "",
        voter_id: "",
        bank_nbfc: "",
        emi: "",
        pandding: "",
      },
    ]);
  };

  const handleAdd2 = () => {
    setDividendArr2([
      ...dividendArr2,
      {
        co_bank_name: "",
        co_account_type: "",
        co_account_number: "",
        co_remark: "",

      },
    ]);
  };
  const handleAdd3 = () => {
    setDividendArr3([
      ...dividendArr3,
      {
        co_pan_no: "",
        co_adhar_no: "",
        co_spouse_name: "",
        co_loan_type: "",
        co_spouse_dob: "",
        co_dob: "",
        co_voter_id: "",
        co_bank_nbfc: "",
        co_emi: "",
        co_pandding: "",
      },
    ]);
  };



  const handleInputChange1 = (e, index) => {
    const { name, value } = e.target;
    console.log("value", e.target.value);
    const list = [...dividendArr];
    list[index][name] = value;
    setDividendArr(list);
  };
  const handleInputChange2 = (e, index) => {
    const { name, value } = e.target;
    console.log("value", e.target.value);
    const list = [...dividendArr1];
    list[index][name] = value;
    setDividendArr1(list);
  };

  const handleInputChange3 = (e, index) => {
    const { name, value } = e.target;
    console.log("value", e.target.value);
    const list = [...dividendArr2];
    list[index][name] = value;
    setDividendArr2(list);
  };
  const handleInputChange4 = (e, index) => {
    const { name, value } = e.target;
    console.log("value", e.target.value);
    const list = [...dividendArr3];
    list[index][name] = value;
    setDividendArr3(list);
  };



  const handleRemove = (index) => {
    if (dividendArr.length > 0) {
      const listArr = [...dividendArr];
      listArr.splice(index, 1);
      setDividendArr(listArr);
    }
  };

  const handleRemove1 = (index) => {
    if (dividendArr1.length > 0) {
      const listArr = [...dividendArr1];
      listArr.splice(index, 1);
      setDividendArr1(listArr);
    }
  };
  const handleRemove2 = (index) => {
    if (dividendArr2.length > 0) {
      const listArr = [...dividendArr2];
      listArr.splice(index, 1);
      setDividendArr2(listArr);
    }
  };

  const handleRemove3 = (index) => {
    if (dividendArr2.length > 0) {
      const listArr = [...dividendArr3];
      listArr.splice(index, 1);
      setDividendArr3(listArr);
    }
  };

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: null }); // Clear errors for the changed field
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];

    // Ensure the selected file is a PDF file
    if (file && file.type === "application/pdf") {
      // Update the specific field in formData
      setFormData2({
        ...formData2,
        [fieldName]: file,
      });
    } else {
      // Handle the case where the selected file is not a PDF
      alert("Please select a PDF file.");
      e.target.value = null; // Clear the input field
    }
  };

  console.log(formData2);

  const validateForm = () => {
    const newErrors = {};

    // Add your validation logic here
    if (!formData.name) {
      newErrors.name = "Name is Requried";
    }
    if (!formData.email) {
      newErrors.email = "Email is Requried";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is Requried";
    }
    if (!formData.application_no) {
      newErrors.application_no = "Application is Requried";
    }

    if (!formData.password) {
      newErrors.password = "Password is Requried";
    }

    if (!formData.loan_type) {
      newErrors.loan_type = "Select Loan Types is Requried";
    }

    if (!formData.employment_type) {
      newErrors.employment_type = "Employment is Requried";
    }
    if (!formData.address) {
      newErrors.address = "Address is Requried";
    }

    if (!formData.business_address) {
      newErrors.business_address = "Business_Address is Requried";
    }
    if (!formData.bank_name) {
      newErrors.bank_name = " Bank name is Requried";
    }
    if (!formData.account_type) {
      newErrors.account_type = "account type  is Requried";
    }
    if (!formData.user_loan_type) {
      newErrors.user_loan_type = "Loan Type  is Requried";
    }
    if (!formData.account_number) {
      newErrors.account_number = "Account Number is Requried";
    }
    if (!formData.spouse_dob) {
      newErrors.spouse_dob = "Spouse DOB is Requried";
    }
    if (!formData.spouse_name) {
      newErrors.spouse_name = "Spouse Name is Requried";
    }
    if (!formData.remark) {
      newErrors.remark = "Remark is Requried";
    }
    if (!formData.bank_nbfc) {
      newErrors.bank_nbfc = "Bank_nbfc is Requried";
    }
    if (!formData.emi) {
      newErrors.emi = "EMI is Requried";
    }
    if (!formData.pandding) {
      newErrors.pandding = "Pending is Requried";
    }
    if (!formData.pan_no) {
      newErrors.pan_no = "Pancard is Requried";
    }
    if (!formData.adhar_no) {
      newErrors.adhar_no = "Adhar_no is Requried";
    }
    if (!formData.dob) {
      newErrors.dob = "dob is Requried";
    }
    if (!formData.voter_id) {
      newErrors.voter_id = "VoterId is Requried";
    }

    // Co- Application
    if (!formData.co_name) {
      newErrors.co_name = "Name is Requried";
    }
    if (!formData.co_email) {
      newErrors.co_email = "Email is Requried";
    }

    if (!formData.co_phone) {
      newErrors.co_phone = "Phone is Requried";
    }
    if (!formData.co_application_no) {
      newErrors.co_application_no = "Application is Requried";
    }

    if (!formData.co_password) {
      newErrors.co_password = "Password is Requried";
    }

    if (!formData.co_loan_type) {
      newErrors.co_loan_type = "Select Loan Types is Requried";
    }

    if (!formData.co_address) {
      newErrors.co_address = "Address is Requried";
    }

    if (!formData.co_business_address) {
      newErrors.co_business_address = "Business_Address is Requried";
    }
    if (!formData.co_bank_name) {
      newErrors.co_bank_name = " Bank name is Requried";
    }
    if (!formData.co_account_type) {
      newErrors.co_account_type = "account type  is Requried";
    }
    if (!formData.co_user_loan_type) {
      newErrors.co_user_loan_type = "Loan Type  is Requried";
    }
    if (!formData.co_account_number) {
      newErrors.co_account_number = "Account Number is Requried";
    }
    if (!formData.co_spouse_dob) {
      newErrors.co_spouse_dob = "Spouse DOB is Requried";
    }
    if (!formData._cospouse_name) {
      newErrors.co_spouse_name = "Sopouse Name is Requried";
    }
    if (!formData.co_remark) {
      newErrors.co_remark = "Remark is Requried";
    }
    if (!formData.co_bank_nbfc) {
      newErrors.co_bank_nbfc = "Bank_nbfc is Requried";
    }
    if (!formData.co_emi) {
      newErrors.co_emi = "EMI is Requried";
    }
    if (!formData.co_pandding) {
      newErrors.co_pandding = "Pending is Requried";
    }
    if (!formData.co_pan_no) {
      newErrors.co_pan_no = "Pancard is Requried";
    }
    if (!formData.co_adhar_no) {
      newErrors.co_adhar_no = "Adhar_no is Requried";
    }
    if (!formData.co_dob) {
      newErrors.co_dob = "dob is Requried";
    }
    if (!formData.co_voter_id) {
      newErrors.co_voter_id = "VoterId is Requried";
    }
    if (!formData2.three_month_salary) {
      newErrors.three_month_salary = "Files is Requried";
    }
    if (!formData2.itr) {
      newErrors.itr = "ITR Files is Requried";
    }
    if (!formData2.income_proof) {
      newErrors.income_proof = "Income Files is Requried";
    }
    if (!formData2.registration_proof) {
      newErrors.registration_proof = "Regproof is Requried";
    }
    if (!formData2.degree) {
      newErrors.degree = "Degree is Requried";
    }
    // Add more validations for other fields

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const object = { dividendArr, dividendArr1, dividendArr2, dividendArr3, formData, loanType: "ProfessionalLoan" }
    console.log(object);

    // Append all files to the formData
    Object.keys(formData2).forEach((fileType) => {
      const file = formData2[fileType];
      console.log(fileType);
      if (file) {
        newformData.append(fileType, file);
      }
    });

    try {

      let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
      }

      let bodyContent = JSON.stringify(object);

      let reqOptions = {
        // url: "http://15.207.195.184:8000/api/v1/professionalLoanForm",
        url: `${backendUrl}/professionalLoanForm`,
        method: "POST",
        headers: headersList,
        data: bodyContent,
      }

      let response = await axios.request(reqOptions);
      console.log(response.data);

      if (response) {
        // Handle success
        console.log(response.data.id);
        // const response2 = await axios.post(`http://15.207.195.184:8000/api/v1/prfessionalformUploadfiles/${response.data.id}`, newformData, {
        const response2 = await axios.post(`${backendUrl}/prfessionalformUploadfiles/${response.data.id}`, newformData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response2) {
          alert(response2.data.message);
        } else {
          console.error('Error sending data to the backend');
        }

      } else {
        // Handle error
        console.error('Error sending data to the backend');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    // setFormData({
    //   name: "",
    //   email: "",
    //   phone: "",
    //   salary: "",
    //   address: "",
    //   business_address: "",
    //   bank_name: "",
    //   account_type: "",
    //   account_number: "",
    //   remark: "",
    //   pan_no: "",
    //   adhar_no: "",
    //   spouse_name: "",
    //   loan_type: "",
    //   spouse_dob: "",
    //   dob: "",
    //   voter_id: "",
    //   bank_nbfc: "",
    //   emi: "",
    //   pandding: "",
    //   user_loan_type: "",
    //   three_month_salary: null,
    //   itr: null,
    //   income_proof: null,
    //   registration_proof: null,
    // co_name: "",
    // co_email: "",
    // co_phone: "",
    // co_application_no: "",
    // co_salary: "",
    // co_loan_type: "",
    // co_user_loan_type: "",
    // co_spouse_name: "",
    // co_address: "",
    // co_business_address: "",
    // co_bank_name: "",
    // co_account_type: "",
    // co_account_number: "",
    // co_remark: "",
    // co_pan_no: "",
    // co_adhar_no: "",
    // co_dob: "",
    // co_voter_id: "",
    // co_bank_nbfc: "",
    // co_emi: "",
    // co_pandding: "",
    // });
    if (validateForm()) {
      console.log(formData);
      // If form validation fails, do not submit
      return;
    }
  };



  return (
    <>
      <main>
        <section
          className="pt-18 pb-10 Loan-header-page" >
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="bg-white p-5 rounded-top-md">
                  <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                      <h1 className="mb-0"> Professional Loan </h1>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="text-md-end mt-3 mt-md-0">
                        <a href="/contact" className="btn btn-primary">
                          How To Apply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>
        {/* content start */}

        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="mt-n6 bg-white mb-2 rounded-3 shadow-sm position-relative">
                <div
                  className="section-scroll p-lg-10 p-5"
                  id="section-about"
                >
                  <h2>About Professional Loan</h2>
                  <p className="lead">
                    A professional loan is a financial product designed to meet the unique
                    financing needs of self-employed professionals and business owners, such as doctors,
                    lawyers, architects, and chartered accountants. These loans are tailored to assist professionals
                    in expanding their practices, investing in equipment, managing working capital,
                    or meeting other business-related requirements. Here are key features of professional loans:
                  </p>
                  <hr />

                  <h3>1.	Targeted Professionals:</h3>
                  <ul className="text-decoration: none;">
                    <li>	Professional loans are typically offered to individuals who are
                      self-employed and engaged in professions like medicine, law, architecture, and accountancy.</li>
                  </ul>

                  <h3>2.	Unsecured Nature:</h3>
                  <ul className="text-decoration: none;">
                    <li>Similar to personal loans, professional loans are often unsecured,
                      meaning borrowers do not need to provide collateral to secure the loan.</li>
                  </ul>


                  <h3>3.	Loan Amount and Tenure:</h3>
                  <ul className="text-decoration: none;">
                    <li>	The loan amount and repayment tenure depend on the borrower's
                      professional qualifications, income, and the nature of the business.</li>
                  </ul>

                  <h3>4.	Usage Flexibility:</h3>
                  <ul className="text-decoration: none;">
                    <li>	Professionals can utilize the loan amount for various purposes, including expanding their practice,
                      purchasing equipment, meeting working capital needs, or setting up a new office.</li>
                  </ul>

                  <h3>5.	Interest Rates:</h3>
                  <ul className="text-decoration: none;">
                    <li>	Interest rates on professional loans can be fixed or variable, and they are influenced by factors
                      such as the borrower's creditworthiness and the lender's policies.</li>
                  </ul>

                  <h3>7.	Repayment Structure:</h3>
                  <ul className="text-decoration: none;">
                    <li>	Repayment structures for professional loans may include
                      flexible options such as equated monthly installments (EMIs) or structured repayment schedules.</li>
                  </ul>

                  <h3>8.	Documentation:</h3>
                  <ul className="text-decoration: none;">
                    <li>	Documentation requirements may include proof of professional qualification, business vintage,
                      income tax returns, bank statements, and other relevant financial documents.</li>
                  </ul>


                  <h3>9.	Credit Score Impact:</h3>
                  <ul className="text-decoration: none;">
                    <li>Timely repayment of a professional loan can positively
                      impact the borrower's credit score, enhancing their creditworthiness for future financial transactions.</li>
                  </ul>

                  <h3>10.	Loan Eligibility Criteria:</h3>
                  <ul className="text-decoration: none;">
                    <li>	Lenders assess the borrower's eligibility based on factors
                      such as professional qualifications, business stability, income, and credit history.</li>
                  </ul>

                  <h3>11.	Online Application:</h3>
                  <ul className="text-decoration: none;">
                    <li>Many lenders offer online application processes for professional loans,
                      making it convenient for borrowers to apply and submit necessary documents digitally.</li>
                  </ul>


                  <h3>12.	Risk for Lenders:</h3>
                  <ul className="text-decoration: none;">
                    <li>	While professional loans may be unsecured, lenders assess the risk based on the borrower's
                      professional qualifications, business stability, and financial track record.</li>
                  </ul>

                  <p className="lead">

                    It's crucial for professionals to carefully review the terms and conditions
                    of professional loan offerings from different financial institutions, compare interest rates,
                    and ensure that the loan aligns with their specific business needs and financial goals.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="py-lg-8 py-8 bg-white border-bottom border-top ">
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8  col-md-12 col-12">
                <div className="mb-10 text-center">
                  {/* section title start*/}
                  <h1>Features of Professional Loan</h1>
                  <p className="lead">
                    Here is an exhaustive list of all the fees and charges to be
                    paid for the Professional Loan.
                  </p>
                </div>
                {/* /.section title start*/}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card text-center mb-4 mb-lg-0">
                  <div className="card-body py-6">
                    <div className="icon-shape icon-xxxl bg-light-primary rounded-circle mb-4 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        fill="currentColor"
                        className="bi bi-lightning-fill text-dark-primary"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z" />
                      </svg>
                    </div>
                    <div>
                      <h3>Quick approval </h3>
                      <p>
                        "Experience swift financial solutions with our quick approval process".</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card text-center mb-4 mb-lg-0">
                  <div className="card-body py-6">
                    <div className="icon-shape icon-xxxl bg-light-success rounded-circle mb-4 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        fill="currentColor"
                        className="bi bi-arrow-clockwise text-dark-success"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                        />
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                      </svg>
                    </div>
                    <div>
                      <h3>Easy Loan Repayment</h3>
                      <p>

                        "Simplify your financial journey with easy loan repayment."
                      </p>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="card text-center mb-4 mb-lg-0">
                  <div className="card-body py-6">
                    <div className="icon-shape icon-xxxl bg-light-warning rounded-circle mb-4 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        fill="currentColor"
                        className="bi bi-cup-straw text-dark-warning"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.902.334a.5.5 0 0 1-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A.78.78 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 0 1 .303-.356l2.5-1a.5.5 0 0 1 .65.278zM9.768 4.607A13.991 13.991 0 0 0 8 4.5c-1.076 0-2.033.11-2.707.278A3.284 3.284 0 0 0 4.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085l.18-.808zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a5.514 5.514 0 0 1-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69 1.27 0 2.081-.441 2.438-.69.042-.029.09-.094.102-.215l.852-8.03a5.517 5.517 0 0 1-.435.127 8.88 8.88 0 0 1-.89.17zM4.467 4.884s.003.002.005.006l-.005-.006zm7.066 0-.005.006c.002-.004.005-.006.005-.006zM11.354 5a3.174 3.174 0 0 0-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222z" />
                      </svg>
                    </div>
                    <div>
                      <h3>100% Transparency</h3>
                      <p>
                        "Embrace the confidence of 100% transparency".
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="" id="section-apply">
          <div className="container">
            <div className="my-2">
              <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="mb-4 text-center">
                  {/* section title start*/}
                  <h1 className="mb-0">Loan Application Form </h1>
                  <p>
                    Now apply for a Professional Loan online, All you need to do is
                    provide your details below application form.
                  </p>
                </div>
              </div>

              <form>
                <div>
                  {/* Text input*/}
                  <div className="row">
                    <h3> User Details </h3>

                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="name"
                        >
                          name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Name"
                          className="form-control"
                        />
                        {errors.name && (
                          <div className="text-danger">{errors.name}</div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email"
                          className="form-control"
                        />
                        {errors.email && (
                          <div className="text-danger">{errors.email}</div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="phone"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="text"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone"
                          className="form-control"
                        />
                        {errors.phone && (
                          <div className="text-danger">{errors.phone}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <select
                          id="degree"
                          name="degree"
                          className="form-select"
                          value={formData.degree}
                          onChange={handleInputChange}
                        >
                          <option value="" disabled selected>
                            Types of Degree
                          </option>
                          <option value="dpharma">D.PHARMA </option>
                          <option value="bpharma"> B.PHARMA</option>
                          <option value="mpharma"> M.PHARMA</option>
                          <option value="dhms">DHMS  </option>
                          <option value="bhms">BHMS </option>
                          <option value="bams">BASM </option>
                          <option value="mbbs">MBBS </option>
                          <option value="barch">B.ARCH </option>
                          <option value="march">M.ARCH </option>
                          <option value="bds">BDS </option>
                          <option value="md">MD </option>
                          <option value="ms">MS </option>
                          <option value="charteredaccountant">CA  (Chartered Accountant)</option>
                          <option value="companysecretary">CS (Company Secretary) </option>


                        </select>
                        {errors.degree && (
                          <div className="text-danger">
                            {errors.degree}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Select Basic */}

                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="message"
                        ></label>
                        <textarea
                          className="form-control"
                          id="address"
                          rows={3}
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Residence Address"
                          defaultValue={""}
                        />
                        {errors.address && (
                          <div className="text-danger">{errors.address}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="message"
                        ></label>
                        <textarea
                          className="form-control"
                          id="business_address"
                          rows={3}
                          name="business_address"
                          value={formData.business_address}
                          onChange={handleInputChange}
                          placeholder="Business Address"
                          defaultValue={""}
                        />
                        {errors.business_address && (
                          <div className="text-danger">
                            {errors.business_address}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bank Details start  */}
                    {dividendArr.map((item, index) => (
                      <div className="" key={index}>

                        <h3>
                          {" "}
                          {index === 0 && "Banking Details"}   <span>  <button
                            type="button"
                            className={`add-button  ${(index === 0 && "d-none") || ""
                              }`}
                            onClick={() => handleRemove(index)}
                            style={{ backgroundColor: 'blue' }}

                          >
                            -
                          </button>
                            {index === 0 && (
                              <button
                                type="button"
                                className=""
                                onClick={handleAdd}
                                style={{ backgroundColor: 'blue' }}
                              >
                                +
                              </button>
                            )}</span>

                        </h3>

                        <div className="row" >

                          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="name"
                              >
                                Name of Bank
                              </label>
                              <input
                                // id={`dividend_stock_amount${index}`}
                                id={`bank_name ${index}`}
                                name="bank_name"
                                type="text"
                                disabled={textDisabld}
                                value={item.bank_name}
                                onChange={(e) =>
                                  handleInputChange1(e, index)
                                }
                                // onChange={handleInputChange}
                                placeholder="Name of Bank"
                                className="form-control"
                                required
                              />
                              {/* {errors.bank_name && (
                                          <div className="text-danger">
                                            {errors.bank_name}
                                          </div>
                                        )} */}

                            </div>
                          </div>

                          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <select
                                id={`account_type ${index}`}
                                // id="account_type"
                                name="account_type"
                                className="form-select"
                                disabled={textDisabld}
                                value={item.account_type}
                                onChange={(e) =>
                                  handleInputChange1(e, index)
                                }
                              // onChange={handleInputChange}
                              >
                                <option value="" disabled selected>
                                  Types of Account
                                </option>
                                <option value="home">
                                  Current Account
                                </option>
                                <option value="student">
                                  Saving Account
                                </option>
                                <option value="personal">
                                  Salary Account
                                </option>
                                <option value="Car">
                                  Fixed Deposit Account
                                </option>
                                <option value="Education">
                                  NRI Account
                                </option>
                                <option value="Gold">
                                  DEMAT Account
                                </option>
                              </select>
                              {/* {errors.account_type && (
                                          <div className="text-danger">
                                            {errors.account_type}
                                          </div>
                                        )} */}
                            </div>
                          </div>

                          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="phone"
                              >
                                Account Number
                              </label>
                              <input
                                id={`account_number ${index}`}
                                // id="account_number"
                                name="account_number"
                                disabled={textDisabld}
                                type="text"
                                value={item.account_number}
                                onChange={(e) =>
                                  handleInputChange1(e, index)
                                }
                                // onChange={handleInputChange}
                                placeholder="Account Number"
                                className="form-control"
                              />
                              {/* {errors.account_number && (
                                          <div className="text-danger">
                                            {errors.account_number}
                                          </div>
                                        )} */}
                            </div>
                          </div>

                          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="text"
                              >
                                Remarks
                              </label>
                              <input
                                id={`remark ${index}`}
                                name="remark"
                                type="text"
                                value={item.remark}
                                onChange={(e) =>
                                  handleInputChange1(e, index)
                                }
                                placeholder="Remarks"
                                className="form-control"
                              />
                              {/* {errors.remark && (
                          <div className="text-danger">{errors.remark}</div>
                        )} */}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Bank Details End  */}


                    {/*Loan Repyment Details start  */}
                    {dividendArr1.map((item, index) => (
                      <div className="" key={index} >
                        <h3>
                          {" "}
                          {index === 0 && "Loan Repyment Details"}   <span>  <button
                            type="button"
                            className={`add-button  ${(index === 0 && "d-none") || ""
                              }`}
                            onClick={() => handleRemove1(index)}
                            style={{ backgroundColor: 'blue' }}
                          >
                            -
                          </button>
                            {index === 0 && (
                              <button
                                type="button"
                                className=""
                                onClick={handleAdd1}
                                style={{ backgroundColor: 'blue' }}
                              >
                                +
                              </button>
                            )}</span>

                        </h3>

                        <div className="row">
                          <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="text"
                              >
                                Name Of Bank NBFC
                              </label>
                              <input
                                id={`bank_nbfc ${index}`}
                                name="bank_nbfc"
                                type="text"
                                disabled={textDisabld}
                                value={item.bank_nbfc}
                                onChange={(e) =>
                                  handleInputChange2(e, index)
                                }
                                placeholder="Name OfBank NBFC"
                                className="form-control"
                              />
                              {/* {errors.bank_nbfc && (
                          <div className="text-danger">{errors.bank_nbfc}</div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <select
                                id={`loan_type ${index}`}
                                disabled={textDisabld}
                                name="loan_type"
                                className="form-select"
                                value={item.loan_type}
                                onChange={(e) =>
                                  handleInputChange2(e, index)
                                }
                              >
                                <option value="" disabled selected>
                                  Type of Loan
                                </option>
                                <option value="home">Home Loan</option>
                                <option value="student">Student Loan</option>
                                <option value="personal">Personal Loan</option>
                                <option value="Car">Car Loan</option>
                                <option value="Education">Education Loan</option>
                                <option value="Gold">Gold Loan</option>
                                <option value="Business">Business Loan</option>
                                <option value="Refinance">Refinance Loan</option>
                              </select>
                              {/* {errors.loan_type && (
                          <div className="text-danger">{errors.loan_type}</div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="text"
                              >
                                EMI
                              </label>
                              <input
                                id={`emi ${index}`}
                                disabled={textDisabld}
                                name="emi"
                                type="text"
                                value={item.emi}
                                onChange={(e) =>
                                  handleInputChange2(e, index)
                                }
                                placeholder="EMI"
                                className="form-control"
                              />
                              {/* {errors.emi && (
                          <div className="text-danger">{errors.emi}</div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="text"
                              >
                                Pending
                              </label>
                              <input
                                id={`pandding ${index}`}
                                disabled={textDisabld}
                                name="pandding"
                                type="text"
                                value={item.pandding}
                                onChange={(e) =>
                                  handleInputChange2(e, index)
                                }
                                placeholder="Pending"
                                className="form-control"
                              />
                              {/* {errors.pandding && (
                          <div className="text-danger">{errors.pandding}</div>
                        )} */}
                            </div>
                          </div>

                          <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="text"
                              >
                                Applicant Pan No.
                              </label>
                              <input
                                id={`pan_no ${index}`}
                                disabled={textDisabld}
                                name="pan_no"
                                type="text"
                                value={item.pan_no}
                                onChange={(e) =>
                                  handleInputChange2(e, index)
                                }
                                placeholder="Applicant Pan No."
                                className="form-control"
                              />
                              {/* {errors.pan_no && (
                          <div className="text-danger">{errors.pan_no}</div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="text"
                              >
                                Adhar No.
                              </label>
                              <input
                                id={`adhar_no ${index}`}
                                disabled={textDisabld}
                                name="adhar_no"
                                type="text"
                                value={item.adhar_no}
                                onChange={(e) =>
                                  handleInputChange2(e, index)
                                }
                                placeholder="Adhar No."
                                className="form-control"
                              />
                              {/* {errors.adhar_no && (
                          <div className="text-danger">{errors.adhar_no}</div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="text"
                              >
                                Applicant DOB
                              </label>
                              <input
                                id={`dob ${index}`}
                                disabled={textDisabld}
                                name="dob"
                                type="text"
                                value={item.dob}
                                onChange={(e) =>
                                  handleInputChange2(e, index)
                                }
                                placeholder="Applicant DOB"
                                className="form-control"
                              />
                              {/* {errors.dob && (
                          <div className="text-danger">{errors.dob}</div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="text"
                              >
                                Voter Id No.
                              </label>
                              <input
                                id={`dob ${index}`}
                                disabled={textDisabld}
                                name="voter_id"
                                type="text"
                                value={item.voter_id}
                                onChange={(e) =>
                                  handleInputChange2(e, index)
                                }
                                placeholder="Voter Id No."
                                className="form-control"
                              />
                              {/* {errors.voter_id && (
                          <div className="text-danger">{errors.voter_id}</div>
                        )} */}
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="text"
                              >
                                Spouse Name
                              </label>
                              <input
                                id={`spouse_name ${index}`}
                                disabled={textDisabld}
                                name="spouse_name"
                                type="text"
                                value={item.spouse_name}
                                onChange={(e) =>
                                  handleInputChange2(e, index)
                                }
                                placeholder="Spose Name."
                                className="form-control"
                              />
                              {/* {errors.spouse_name && (
                          <div className="text-danger">
                            {errors.spouse_name}
                          </div>
                        )} */}
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="text"
                              >
                                Spouse DOB
                              </label>
                              <input
                                id={`spouse_dob ${index}`}
                                disabled={textDisabld}
                                onChange={(e) =>
                                  handleInputChange2(e, index)
                                }
                                name="spouse_dob"
                                type="text"
                                value={item.spouse_dob}
                                placeholder="Spouse DOB."
                                className="form-control"
                              />
                              {/* {errors.spouse_dob && (
                          <div className="text-danger">{errors.spouse_dob}</div>
                        )} */}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Loan  End  */}
                    <h3>Co-Applicant Details </h3>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="name"
                        >
                          name
                        </label>
                        <input
                          id="co_name"
                          name="co_name"
                          type="text"
                          value={formData.co_name}
                          onChange={handleInputChange}
                          placeholder="Name"
                          className="form-control"
                        />
                        {errors.co_name && (
                          <div className="text-danger">{errors.co_name}</div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          id="co_email"
                          name="co_email"
                          type="email"
                          value={formData.co_email}
                          onChange={handleInputChange}
                          placeholder="Email"
                          className="form-control"
                        />
                        {errors.co_email && (
                          <div className="text-danger">{errors.co_email}</div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="phone"
                        >
                          Phone
                        </label>
                        <input
                          id="co_phone"
                          name="co_phone"
                          type="text"
                          value={formData.co_phone}
                          onChange={handleInputChange}
                          placeholder="Phone"
                          className="form-control"
                        />
                        {errors.co_phone && (
                          <div className="text-danger">{errors.co_phone}</div>
                        )}
                      </div>
                    </div>
                    {/* Select Basic */}
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="message"
                        ></label>
                        <textarea
                          className="form-control"
                          id="co_address"
                          rows={3}
                          name="co_address"
                          value={formData.co_address}
                          onChange={handleInputChange}
                          placeholder="Residence Address"
                          defaultValue={""}
                        />
                        {errors.co_address && (
                          <div className="text-danger">{errors.co_address}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="message"
                        ></label>
                        <textarea
                          className="form-control"
                          id="co_business_address"
                          rows={3}
                          name="co_business_address"
                          value={formData.co_business_address}
                          onChange={handleInputChange}
                          placeholder="Business Address"
                          defaultValue={""}
                        />
                        {errors.co_business_address && (
                          <div className="text-danger">
                            {errors.co_business_address}
                          </div>
                        )}
                      </div>
                    </div>


                    {/* Bank Details start  */}
                    {dividendArr2.map((item, index) => (
                      <div className="" key={index}>

                        <h3>
                          {" "}
                          {index === 0 && "Banking Details"}   <span>  <button
                            type="button"
                            className={`add-button  ${(index === 0 && "d-none") || ""
                              }`}
                            onClick={() => handleRemove2(index)}
                            style={{ backgroundColor: 'blue' }}

                          >
                            -
                          </button>
                            {index === 0 && (
                              <button
                                type="button"
                                className=""
                                onClick={handleAdd2}
                                style={{ backgroundColor: 'blue' }}
                              >
                                +
                              </button>
                            )}</span>

                        </h3>

                        <div className="row" >

                          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="name"
                              >
                                Name of Bank
                              </label>
                              <input
                                // id={`dividend_stock_amount${index}`}
                                id={`co_bank_name ${index}`}
                                name="co_bank_name"
                                type="text"
                                disabled={textDisabld}
                                value={item.co_bank_name}
                                onChange={(e) =>
                                  handleInputChange3(e, index)
                                }
                                // onChange={handleInputChange}
                                placeholder="Name of Bank"
                                className="form-control"
                                required
                              />
                              {/* {errors.bank_name && (
                                          <div className="text-danger">
                                            {errors.bank_name}
                                          </div>
                                        )} */}

                            </div>
                          </div>

                          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <select
                                id={`co_account_type ${index}`}
                                // id="account_type"
                                name="co_account_type"
                                className="form-select"
                                disabled={textDisabld}
                                value={item.co_account_type}
                                onChange={(e) =>
                                  handleInputChange3(e, index)
                                }
                              // onChange={handleInputChange}
                              >
                                <option value="" disabled selected>
                                  Types of Account
                                </option>
                                <option value="home">
                                  Current Account
                                </option>
                                <option value="student">
                                  Saving Account
                                </option>
                                <option value="personal">
                                  Salary Account
                                </option>
                                <option value="Car">
                                  Fixed Deposit Account
                                </option>
                                <option value="Education">
                                  NRI Account
                                </option>
                                <option value="Gold">
                                  DEMAT Account
                                </option>
                              </select>
                              {/* {errors.account_type && (
                                          <div className="text-danger">
                                            {errors.account_type}
                                          </div>
                                        )} */}
                            </div>
                          </div>

                          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="phone"
                              >
                                Account Number
                              </label>
                              <input
                                id={`co_account_number ${index}`}
                                // id="account_number"
                                name="co_account_number"
                                disabled={textDisabld}
                                type="text"
                                value={item.co_account_number}
                                onChange={(e) =>
                                  handleInputChange3(e, index)
                                }
                                // onChange={handleInputChange}
                                placeholder="Account Number"
                                className="form-control"
                              />
                              {/* {errors.account_number && (
                                          <div className="text-danger">
                                            {errors.account_number}
                                          </div>
                                        )} */}
                            </div>
                          </div>

                          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="text"
                              >
                                Remarks
                              </label>
                              <input
                                id={`co_remark ${index}`}
                                name="co_remark"
                                type="text"
                                value={item.co_remark}
                                onChange={(e) =>
                                  handleInputChange3(e, index)
                                }
                                placeholder="Remarks"
                                className="form-control"
                              />
                              {/* {errors.remark && (
                          <div className="text-danger">{errors.remark}</div>
                        )} */}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Bank Details End  */}
                    {/* Loan Repyment Details stat */}

                    {dividendArr3.map((item, index) => (
                      <div className="" key={index}>

                        <h3>
                          {" "}
                          {index === 0 && "Loan Repyment Details"}   <span>  <button
                            type="button"
                            className={`add-button  ${(index === 0 && "d-none") || ""
                              }`}
                            onClick={() => handleRemove3(index)}
                            style={{ backgroundColor: 'blue' }}
                          >
                            -
                          </button>
                            {index === 0 && (
                              <button
                                type="button"
                                className=""
                                onClick={handleAdd3}
                                style={{ backgroundColor: 'blue' }}
                              >
                                +
                              </button>
                            )}</span>
                        </h3>
                        <div className="row">
                          <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="text"
                              >
                                Name Of Bank NBFC
                              </label>
                              <input
                                id={`co_bank_nbfc ${index}`}
                                disabled={textDisabld}
                                onChange={(e) =>
                                  handleInputChange4(e, index)
                                }
                                name="co_bank_nbfc"
                                type="text"
                                value={item.co_bank_nbfc}
                                placeholder="Name OfBank NBFC"
                                className="form-control"
                              />
                              {/* {errors.co_bank_nbfc && (
                          <div className="text-danger">{errors.co_bank_nbfc}</div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <select

                                name="co_loan_type"
                                className="form-select"
                                value={item.co_loan_type}
                                id={`co_loan_type ${index}`}
                                disabled={textDisabld}
                                onChange={(e) =>
                                  handleInputChange4(e, index)
                                }
                              >
                                <option value="" disabled selected>
                                  Type of Loan
                                </option>
                                <option value="home">Home Loan</option>
                                <option value="student">Student Loan</option>
                                <option value="personal">Personal Loan</option>
                                <option value="Car">Car Loan</option>
                                <option value="Education">Education Loan</option>
                                <option value="Gold">Gold Loan</option>
                                <option value="Business">Business Loan</option>
                                <option value="Refinance">Refinance Loan</option>
                              </select>
                              {/* {errors.co_loan_type && (
                          <div className="text-danger">{errors.co_loan_type}</div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="text"
                              >
                                EMI
                              </label>
                              <input
                                id={`co_emi ${index}`}
                                disabled={textDisabld}
                                onChange={(e) =>
                                  handleInputChange4(e, index)
                                }
                                name="co_emi"
                                type="text"
                                value={item.co_emi}

                                placeholder="EMI"
                                className="form-control"
                              />
                              {/* {errors.co_emi && (
                          <div className="text-danger">{errors.co_emi}</div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="text"
                              >
                                Pending
                              </label>
                              <input
                                id={`co_pandding ${index}`}
                                disabled={textDisabld}
                                onChange={(e) =>
                                  handleInputChange4(e, index)
                                }
                                name="co_pandding"
                                type="text"
                                value={item.co_pandding}

                                placeholder="Pending"
                                className="form-control"
                              />
                              {/* {errors.co_pandding && (
                          <div className="text-danger">{errors.co_pandding}</div>
                        )} */}
                            </div>
                          </div>

                          <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="text"
                              >
                                Applicant Pan No.
                              </label>
                              <input
                                id={`co_pan_no ${index}`}
                                disabled={textDisabld}
                                onChange={(e) =>
                                  handleInputChange4(e, index)
                                }
                                name="co_pan_no"
                                type="text"
                                value={item.co_pan_no}

                                placeholder="Applicant Pan No."
                                className="form-control"
                              />
                              {/* {errors.co_pan_no && (
                          <div className="text-danger">{errors.co_pan_no}</div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="text"
                              >
                                Adhar No.
                              </label>
                              <input
                                id={`co_adhar_no ${index}`}
                                disabled={textDisabld}
                                onChange={(e) =>
                                  handleInputChange4(e, index)
                                }
                                name="co_adhar_no"
                                type="text"
                                value={item.co_adhar_no}

                                placeholder="Adhar No."
                                className="form-control"
                              />
                              {/* {errors.co_adhar_no && (
                          <div className="text-danger">{errors.co_adhar_no}</div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="text"
                              >
                                Applicant DOB
                              </label>
                              <input
                                id={`co_dob ${index}`}
                                disabled={textDisabld}
                                onChange={(e) =>
                                  handleInputChange4(e, index)
                                }
                                name="co_dob"
                                type="text"
                                value={item.co_dob}

                                placeholder="Applicant DOB"
                                className="form-control"
                              />
                              {/* {errors.co_dob && (
                          <div className="text-danger">{errors.co_dob}</div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="text"
                              >
                                Voter Id No.
                              </label>
                              <input
                                id={`co_voter_id ${index}`}
                                disabled={textDisabld}
                                onChange={(e) =>
                                  handleInputChange4(e, index)
                                }
                                name="co_voter_id"
                                type="text"
                                value={item.co_voter_id}

                                placeholder="Voter Id No."
                                className="form-control"
                              />
                              {/* {errors.co_voter_id && (
                          <div className="text-danger">{errors.co_voter_id}</div>
                        )} */}
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="text"
                              >
                                Spouse Name
                              </label>
                              <input
                                id={`co_spouse_name ${index}`}
                                disabled={textDisabld}
                                onChange={(e) =>
                                  handleInputChange4(e, index)
                                }
                                name="co_spouse_name"
                                type="text"
                                value={item.co_spouse_name}

                                placeholder="Spouse Name."
                                className="form-control"
                              />
                              {/* {errors.co_spouse_name && (
                          <div className="text-danger">
                            {errors.co_spouse_name}
                          </div>
                        )} */}
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="text"
                              >
                                Spouse DOB
                              </label>
                              <input
                                id={`co_spouse_dob ${index}`}
                                disabled={textDisabld}
                                onChange={(e) =>
                                  handleInputChange4(e, index)
                                }
                                name="co_spouse_dob"
                                type="text"
                                value={item.co_spouse_dob}

                                placeholder="Spouse DOB."
                                className="form-control"
                              />
                              {/* {errors.co_spouse_dob && (
                          <div className="text-danger">{errors.co_spouse_dob}</div>
                        )} */}
                            </div>
                          </div>

                        </div>

                      </div>
                    ))}

                    {/* Loan Repyment Details End */}
                    <h3>Details of Profession </h3>

                    <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <h6 className="text-center">
                          Last Three Month Salary Slip
                        </h6>
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        ></label>

                        <input
                          id="three_month_salary"
                          name="three_month_salary"
                          type="file"
                          onChange={(e) =>
                            handleFileChange(e, "three_month_salary")
                          }
                          className="form-control"
                        />
                        {errors.three_month_salary && (
                          <div className="text-danger">
                            {errors.three_month_salary}
                          </div>
                        )}
                        {formData2.three_month_salary && (
                          <p>
                            Selected File: {formData2.three_month_salary.name}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <h6 className="text-center">Last Two Year ITR</h6>
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        ></label>
                        <input
                          id="itr"
                          name="itr"
                          type="file"
                          onChange={(e) => handleFileChange(e, "itr")}
                          placeholder="Last Three Month Salary Slip."
                          className="form-control"
                        />
                        {errors.itr && (
                          <div className="text-danger">{errors.itr}</div>
                        )}
                        {formData2.itr && (
                          <p>Selected File: {formData2.itr.name}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <h6 className="text-center">Other Income Proof</h6>
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        ></label>
                        <input
                          id="income_proof"
                          name="income_proof"
                          type="file"
                          onChange={(e) => handleFileChange(e, "income_proof")}
                          placeholder="Last Three Month Salary Slip."
                          className="form-control"
                        />
                        {errors.income_proof && (
                          <div className="text-danger">
                            {errors.income_proof}
                          </div>
                        )}
                        {formData2.income_proof && (
                          <p>Selected File: {formData2.income_proof.name}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <h6 className="text-center">
                          Business Registration Proof
                        </h6>
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        ></label>
                        <input
                          id="registration_proof"
                          name="registration_proof"
                          type="file"
                          onChange={(e) =>
                            handleFileChange(e, "registration_proof")
                          }
                          placeholder="Last Three Month Salary Slip."
                          className="form-control"
                        />
                        {errors.registration_proof && (
                          <div className="text-danger">
                            {errors.registration_proof}
                          </div>
                        )}
                        {formData2.registration_proof && (
                          <p>
                            Selected File: {formData2.registration_proof.name}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Button */}


                    <div className=" col-lg-12 col-md-12 col-sm-12 col-12">
                      <button
                        onClick={handleClick}
                        type="submit"
                        className="btn btn-primary mb-4"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default ProfessionalLoan;
