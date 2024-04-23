import React, { useEffect, useState } from "react";
import "./Businessloan.css";

import { tns } from "tiny-slider/src/tiny-slider";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Logoimg1 from "../../assets/images/brand/company-logo/lender-logo-1.png";
import Logoimg2 from "../../assets/images/brand/company-logo/lender-logo-2.png";
import Logoimg3 from "../../assets/images/brand/company-logo/lender-logo-3.png";
import Logoimg4 from "../../assets/images/brand/company-logo/lender-logo-4.png";
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { backendUrl } from "../../env";

const BusinessLoan = () => {


  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // Initialize the Tiny Slider
    const slider = tns({
      container: ".sliderFirst",
      items: 1,
      controlsContainer: "#sliderFirstControls",
      prevButton: ".prev",
      nextButton: ".next",
    });
    document.querySelector(".tns-nav").style.display = "none";
    // Clean up on component unmount
    return () => {
      slider.destroy();
    };
  }, []);

  const [paramvalue, setParamvalue] = useState(null);


  useEffect(() => {
    if (location.state) {
      setParamvalue(location.state.param);
    }
    // Now paramValue contains the value passed through state
  }, [location.state, paramvalue]);

  const [textDisabld, setTextDisabld] = useState(false);

  const [dividendArr, setDividendArr] = useState([
    {
      bank_name: "",
      account_type: "",
      branch_name: "",
      salary: "",
    },
  ]);

  const [dividendArr1, setDividendArr1] = useState([
    {
      bank_nbfc: '',
      account_type: "",
      emi: "",
      pandding: "",

    },
  ]);
  const [dividendArr2, setDividendArr2] = useState([
    {
      co_bank_name: "",
      co_account_type: "",
      co_branch_name: "",
    },
  ]);

  const [dividendArr3, setDividendArr3] = useState([
    {
      co_loan_type: "",
      co_bank_nbfc: "",
      co_emi: "",
      co_pandding: "",
    },
  ]);

  const [dividendArr4, setDividendArr4] = useState([
    {
      guar_fname: "",
      guar_mname: "",
      guar_lname: "",
      guar_email: "",
      guar_phone: "",
      guar_purpose_of_loan: "",
      guar_fathers_name: "",
      guar_mothers_name: "",
      guar_marital_status: "",
      guar_spouse_name: "",
      guar_alternate_number: "",
      guar_date_of_birth: "",
      guar_pancard_number: "",
      guar_permanent_address: "",
      guar_land_mark: "",
      guar_village: "",
      guar_city: "",
      guar_state: "",
      guar_pincode: "",
      guar_relation: "",
    },
  ]);
  const [dividendArr5, setDividendArr5] = useState([
    {
      guar_bank_name: '',
      guar_account_type: '',
      guar_branch_name: '',
    },
  ]);
  const [dividendArr6, setDividendArr6] = useState([
    {
      guar_bank_nbfc: '',
      guar_loan_type: '',
      guar_emi: '',
      guar_pandding: '',
    },
  ]);


  const handleAdd = () => {
    setDividendArr([
      ...dividendArr,
      {
        bank_name: "",
        account_type: "",
        branch_name: "",
        salary: "",
      },
    ]);
  };
  const handleAdd1 = () => {
    setDividendArr1([
      ...dividendArr1,
      {
        bank_nbfc: '',
        loan_type: '',
        emi: '',
        pandding: '',
      },
    ]);
  };
  const handleAdd2 = () => {
    setDividendArr2([
      ...dividendArr2,
      {
        co_bank_name: "",
        co_account_type: "",
        co_branch_name: "",
      },
    ]);
  };
  const handleAdd3 = () => {
    setDividendArr3([
      ...dividendArr3,
      {
        co_bank_nbfc: '',
        co_loan_type: '',
        co_emi: '',
        co_pandding: '',
      },
    ]);
  };
  const handleAdd4 = () => {
    setDividendArr4([
      ...dividendArr4,
      {

        guar_fname: "",
        guar_mname: "",
        guar_lname: "",
        guar_email: "",
        guar_phone: "",
        guar_purpose_of_loan: "",
        guar_fathers_name: "",
        guar_mothers_name: "",
        guar_marital_status: "",
        guar_spouse_name: "",
        guar_alternate_number: "",
        guar_date_of_birth: "",
        guar_pancard_number: "",
        guar_permanent_address: "",
        // guar_residential_address: "",
        guar_land_mark: "",
        guar_village: "",
        guar_city: "",
        guar_state: "",
        guar_pincode: "",
        guar_relation: "",

      },
    ]);
  };
  const handleAdd5 = () => {
    setDividendArr5([
      ...dividendArr5,
      {
        guar_bank_name: '',
        guar_account_type: '',
        guar_branch_name: '',
      },
    ]);
  };

  const handleAdd6 = () => {
    setDividendArr6([
      ...dividendArr6,
      {
        guar_bank_nbfc: '',
        guar_loan_type: '',
        guar_emi: '',
        guar_pandding: '',
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

  const handleInputChange5 = (e, index) => {
    const { name, value } = e.target;
    console.log("value", e.target.value);
    const list = [...dividendArr4];
    list[index][name] = value;
    setDividendArr4(list);
  };
  const handleInputChange6 = (e, index) => {
    const { name, value } = e.target;
    console.log("value", e.target.value);
    const list = [...dividendArr5];
    list[index][name] = value;
    setDividendArr5(list);
  };

  const handleInputChange7 = (e, index) => {
    const { name, value } = e.target;
    console.log("value", e.target.value);
    const list = [...dividendArr6];
    list[index][name] = value;
    setDividendArr6(list);
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
    if (dividendArr3.length > 0) {
      const listArr = [...dividendArr3];
      listArr.splice(index, 1);
      setDividendArr3(listArr);
    }
  };

  const handleRemove4 = (index) => {
    if (dividendArr4.length > 0) {
      const listArr = [...dividendArr4];
      listArr.splice(index, 1);
      setDividendArr4(listArr);
    }
  };
  const handleRemove5 = (index) => {
    if (dividendArr5.length > 0) {
      const listArr = [...dividendArr5];
      listArr.splice(index, 1);
      setDividendArr5(listArr);
    }
  };

  const handleRemove6 = (index) => {
    if (dividendArr6.length > 0) {
      const listArr = [...dividendArr6];
      listArr.splice(index, 1);
      setDividendArr6(listArr);
    }
  };


  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  let newformData = new FormData();

  const [formData, setFormData] = useState({
    userID: localStorage.getItem("userID"),
    application_no: "",
    fname: "",
    mname: "",
    lname: "",
    email: "",
    phone: "",
    purpose_of_loan: "",
    fathers_name: "",
    mothers_name: "",
    marital_status: "",
    spouse_name: "",
    alternate_number: "",
    date_of_birth: "",
    pancard_number: "",
    permanent_address: "",
    residential_address: "",
    landmark: "",
    village: "",
    city: "",
    state: "",
    pincode: "",
    branch_name: "",
    bank_name: "",
    account_type: "",
    loan_type: "",
    emi: "",
    pandding: "",
    salary: "",

    co_application_no: "",
    co_fname: "",
    co_mname: "",
    co_lname: "",
    co_email: "",
    co_phone: "",
    co_purpose_of_loan: "",
    co_fathers_name: "",
    co_mothers_name: "",
    co_marital_status: "",
    co_spouse_name: "",
    co_alternate_number: "",
    co_date_of_birth: "",
    co_pancard_number: "",
    co_permanent_address: "",
    co_land_mark: "",
    co_village: "",
    co_city: "",
    co_state: "",
    co_pincode: "",
    co_branch_name: "",
    co_bank_name: "",
    co_account_type: "",
    co_emi: "",
    co_pandding: "",
    co_relation: "",

    guar_fname: "",
    guar_mname: "",
    guar_lname: "",
    guar_email: "",
    guar_phone: "",
    guar_purpose_of_loan: "",
    guar_fathers_name: "",
    guar_mothers_name: "",
    guar_marital_status: "",
    guar_spouse_name: "",
    guar_alternate_number: "",
    guar_date_of_birth: "",
    guar_pancard_number: "",
    guar_permanent_address: "",
    guar_land_mark: "",
    guar_village: "",
    guar_city: "",
    guar_state: "",
    guar_pincode: "",
    guar_bank_name: '',
    guar_account_type: '',
    guar_branch_name: '',
    guar_bank_nbfc: '',
    guar_loan_type: '',
    guar_emi: '',
    guar_pandding: '',
    guar_relation: "",

  });

  const [formData2, setFormData2] = useState({
    first_month_bank_statement: null,
    second_month_bank_statement: null,
    third_month_bank_statement: null,
    itr: null,
    address_proof: null,
    adhar_front: null,
    adhar_back: null,
    pancard: null,
    applicant_photo: null,
    vintage_proof: null,
    form_three: null,
    trade_licence: null,
    business_registration_certificate: null,
    guar_registration_proof: null,
  })


  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: null }); // Clear errors for the changed field
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];

    // Ensure the selected file is a PDF file
    if (file && (file.type === "application/pdf" || file.type === "image/png" || file.type === "image/jpeg")) {
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

  // console.log(formData2);

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
    if (!formData.alternate_number) {
      newErrors.alternate_number = "Alternate Phone is Requried";
    }
    if (!formData.pancard_number) {
      newErrors.pancard_number = "Application PanCard is Requried";
    }

    if (!formData.password) {
      newErrors.password = "Password is Requried";
    }

    if (!formData.loan_type) {
      newErrors.loan_type = "Select Loan Types is Requried";
    }

    // if (!formData.employment_type) {
    //   newErrors.employment_type = "Employment is Requried";
    // }
    if (!formData.permanent_address) {
      newErrors.permanent_address = "Permanent Address is Requried";
    }

    if (!formData.residential_address) {
      newErrors.residential_address = "Residential_Address is Requried";
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
    if (!formData.remark) {
      newErrors.remark = "Remark is Requried";
    }
    if (!formData.guar_phone) {
      newErrors.guar_phone = "Phone is Requried";
    }
    if (!formData.branch_name) {
      newErrors.branch_name = "Branch_name is Requried";
    }
    if (!formData.start_form) {
      newErrors.start_form = "Start Form is Requried";
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
    if (!formData.spouse_name) {
      newErrors.spouse_name = "Spouse Name is Requried";
    }
    if (!formData.spouse_dob) {
      newErrors.spouse_dob = "Spouse DOB is Requried";
    }
    if (!formData.adhar_no) {
      newErrors.adhar_no = "Adhar_no is Requried";
    }
    if (!formData.dob) {
      newErrors.dob = "DOB is Requried";
    }
    if (!formData.voter_id) {
      newErrors.voter_id = "VoterId is Requried";
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
    if (!formData2.last_two_year_as) {
      newErrors.last_two_year_as = "Last Two Year AS is Requried";
    }

    if (!formData2.last_two_year_six) {
      newErrors.last_two_year_six = "Last two year  is Requried";
    }

    if (!formData.co_name) {
      newErrors.co_name = "Name is Requried";
    }
    if (!formData.co_email) {
      newErrors.co_email = "Email is Requried";
    }

    if (!formData.co_phone) {
      newErrors.co_phone = "Phone is Requried";
    }

    if (!formData.monthly_salary) {
      newErrors.monthly_salary = "Monthly Salary is Requried";
    }
    if (!formData.yearly_income) {
      newErrors.yearly_income = "Yearly Income is Requried";
    }

    if (!formData.co_bank_name) {
      newErrors.co_bank_name = "Bank Name is Requried";
    }
    if (!formData.co_account_type) {
      newErrors.co_account_type = "Account Type is Requried";
    }
    if (!formData.co_account_number) {
      newErrors.co_account_number = "Account Number is Requried";
    }
    if (!formData.co_remark) {
      newErrors.co_remark = "Remark is Requried";
    }
    if (!formData.co_bank_nbfc) {
      newErrors.co_bank_nbfc = "Bank Name is Requried";
    }
    if (!formData.co_loan_type) {
      newErrors.co_loan_type = "Loan Type is Requried";
    }
    if (!formData.co_emi) {
      newErrors.co_emi = "EMI is Requried";
    }

    if (!formData.co_start_form) {
      newErrors.co_start_form = "Start Form is Requried";
    }
    if (!formData.co_pandding) {
      newErrors.co_pandding = "Padding is Requried";
    }
    if (!formData.co_aaplication_pan_no) {
      newErrors.co_aaplication_pan_no = "Pan number is Requried";
    }
    if (!formData.co_adhar_no) {
      newErrors.co_adhar_no = "Adhar  is Requried";
    }
    if (!formData.co_dob) {
      newErrors.co_dob = "DOB is Requried";
    }
    if (!formData.co_voter_id) {
      newErrors.co_voter_id = "Voter Id is Requried";
    }

    if (!formData.co_spouse_name) {
      newErrors.co_spouse_name = "Spouse Name  is Requried";
    }

    if (!formData.co_spouse_dob) {
      newErrors.co_spouse_dob = "Spouse DOB  is Requried";
    }

    if (!formData2.co_three_month_salary) {
      newErrors.co_three_month_salary = "three Month Salary is Requried";
    }

    if (!formData2.co_last_two_year_six) {
      newErrors.co_last_two_year_six = "Last Two Year is Requried";
    }
    if (!formData2.co_last_two_year_as) {
      newErrors.co_last_two_year_as = "Last Two Year is Requried";
    }
    if (!formData2.co_income_proof) {
      newErrors.co_income_proof = "Income proof Id is Requried";
    }

    if (!formData2.co_itr) {
      newErrors.co_itr = "ITR is Requried";
    }
    if (!formData2.co_registration_proof) {
      newErrors.co_registration_proof = "Registration proof is Requried";
    }
    if (!formData.co_address) {
      newErrors.co_address = "Address is Requried";
    }
    if (!formData.co_business_address) {
      newErrors.co_business_address = "Business Address is Requried";
    }
    if (!formData.guar_name) {
      newErrors.guar_name = "Name is Requried";
    }
    if (!formData.guar_email) {
      newErrors.guar_email = "Email is Requried";
    }
    if (!formData.guar_monthly_salary) {
      newErrors.guar_monthly_salary = "Monthly salary is Requried";
    }
    if (!formData.guar_yearly_income) {
      newErrors.guar_yearly_income = "Yearly Income is Requried";
    }
    if (!formData.guar_address) {
      newErrors.guar_address = "Address is Requried";
    }
    if (!formData.guar_business_address) {
      newErrors.guar_business_address = "Business Address is Requried";
    }
    if (!formData.guar_bank_name) {
      newErrors.guar_bank_name = "Bank Name is Requried";
    }
    if (!formData.guar_account_type) {
      newErrors.guar_account_type = "Account Type is Requried";
    }
    if (!formData.guar_account_number) {
      newErrors.guar_account_number = "Account Number is Requried";
    }
    if (!formData.guar_remark) {
      newErrors.guar_remark = "Remark is Requried";
    }
    if (!formData.guar_bank_nbfc) {
      newErrors.guar_bank_nbfc = "Bank Name is Requried";
    }
    if (!formData.guar_loan_type) {
      newErrors.guar_loan_type = "Loan Type  is Requried";
    }
    if (!formData.guar_emi) {
      newErrors.guar_emi = "EMI is Requried";
    }
    if (!formData.guar_start_form) {
      newErrors.guar_start_form = "Start Form is Requried";
    }
    if (!formData.guar_pandding) {
      newErrors.guar_pandding = "Pandding is Requried";
    }
    if (!formData.guar_aaplication_pan_no) {
      newErrors.guar_aaplication_pan_no = "Pan No is Requried";
    }
    if (!formData.guar_adhar_no) {
      newErrors.guar_adhar_no = "Adhar No is Requried";
    }
    if (!formData.guar_dob) {
      newErrors.guar_dob = "DOB is Requried";
    }
    if (!formData.guar_voter_id) {
      newErrors.guar_voter_id = "Voter ID is Requried";
    }
    if (!formData.guar_spouse_name) {
      newErrors.guar_spouse_name = "Spouse Name is Requried";
    }
    if (!formData.guar_spouse_dob) {
      newErrors.guar_spouse_dob = " Spouse DOB is Requried";
    }

    if (!formData2.guar_three_month_salary) {
      newErrors.guar_three_month_salary = "Three month slary is Requried";
    }
    if (!formData2.guar_last_two_year_six) {
      newErrors.guar_last_two_year_six = "Last Two year  is Requried";
    }

    if (!formData2.guar_income_proof) {
      newErrors.guar_income_proof = "Income Proof is Requried";
    }
    if (!formData2.guar_itr) {
      newErrors.guar_itr = "ITR is Requried";
    }
    if (!formData2.guar_last_two_year_as) {
      newErrors.guar_last_two_year_as = "Last Two Year is Requried";
    }
    if (!formData2.guar_registration_proof) {
      newErrors.guar_registration_proof = "Registration Proof is Requried";
    }


    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log('formData------>', formData);

    const object = { dividendArr, dividendArr1, dividendArr2, dividendArr3, dividendArr4, dividendArr5, dividendArr6, formData, loanType: "BusinessLoan" }
    console.log(object);

    // Validate the form
    //  if (!validateForm()) {
    //   // If form validation fails, do not submit
    //   return;
    // }

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
        url: `${backendUrl}/businessLoanForm`,
        method: "POST",
        headers: headersList,
        data: bodyContent,
      }

      let response = await axios.request(reqOptions);
      console.log(response.data);

      if (response) {
        // Handle success
        console.log(response.data.id);
        // const response2 = await axios.post(`http://15.207.195.184:8000/api/v1/businessformUploadfiles/${response.data.id}`, newformData, {
        const response2 = await axios.post(`${backendUrl}/businessformUploadfiles/${response.data.id}`, newformData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response2) {
          alert(response2.data.message);

          if (paramvalue === "selfemployed") {
            navigate("/homeloan", { state: { param: response2.data.id, employment_type: "selfemployed" } });
          }

          window.location.reload(); // Reload the page after successful submission
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

    // if (validateForm()) {
    //   console.log(formData);
    //   // If form validation fails, do not submit
    //   return;
    // }
  };

  return (
    <>
      <main>
        <section>
          <div className="position-relative">
            <ul className="controls" id="sliderFirstControls">
              <li className="prev">
                <FontAwesomeIcon icon={faArrowLeft} />
              </li>

              <li className="next">
                <FontAwesomeIcon icon={faArrowRight} />
              </li>
            </ul>
            <div className="sliderFirst">
              <div className="item">
                <div className="py-22 businessloan-banner-one">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div>
                          {/* slider-captions */}
                          <h1 className="display-2 text-white fw-bold">
                            Hassle free Small Business loan up to 3000000.00

                          </h1>
                          <p className="d-none d-xl-block d-lg-block d-sm-block text-white mb-4">
                            Business Loan From parv Financial Services At An Attractive Rate Of Interest. Apply Now!
                          </p>
                        </div>
                        {/* /.slider-captions */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="py-22 businessloan-banner-two ">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-9 col-md-12 col-sm-12 col-12">
                        <div>
                          {/* slider-captions */}
                          <h1 className="display-2 text-white fw-bold">
                            The key to business growth with Borrow Theme{" "}
                          </h1>
                          <p className=" d-none d-xl-block d-lg-block d-sm-block text-white mb-4">
                            The low rate you need for the need you want! Call
                            <strong>02269620449</strong>
                          </p>
                        </div>
                        {/* /.slider-captions */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="py-22 businessloan-banner-three">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div>
                          {/* slider-captions */}
                          <h1 className="display-2 text-white fw-bold">
                            Looking to set up or expand your business?{" "}
                          </h1>
                          <p className=" d-none d-xl-block d-lg-block d-sm-block text-white mb-4">
                            {" "}
                            Award winning car loans with low fixed rates and no
                            ongoing fees.
                          </p>
                        </div>
                        {/* /.slider-captions */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="py-2 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-12 ">
                <p className="mb-3 mb-lg-0 fw-semi-bold text-dark text-xl-center d-lg-flex d-xl-block">
                  <i className="bi bi-check-circle-fill text-success me-2" />{" "}
                  Approval within 24 hours{" "}
                </p>
              </div>
              <div className="col-md-3 col-sm-6 col-12 ">
                <p className="mb-3 mb-lg-0 fw-semi-bold text-dark text-xl-center d-lg-flex d-xl-block">
                  <i className="bi bi-check-circle-fill text-success me-2" />{" "}
                  Nominal interest rates
                </p>
              </div>
              <div className="col-md-3 col-sm-6 col-12 ">
                <p className="mb-3 mb-lg-0 fw-semi-bold text-dark text-xl-center d-lg-flex d-xl-block">
                  <i className="bi bi-check-circle-fill text-success me-2" /> No
                  guarantors{" "}
                </p>
              </div>
              <div className="col-md-3 col-sm-6 col-12 ">
                <p className="mb-3 mb-lg-0 fw-semi-bold text-dark text-xl-center d-lg-flex d-xl-block">
                  <i className="bi bi-check-circle-fill text-success me-2" />{" "}
                  Minimum documentation
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="py-lg-6 py-8 bg-white border-bottom border-top ">
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8  col-md-12 col-12">
                <div className="mb-10 text-center">
                  {/* section title start*/}
                  <h1>Features of business loan</h1>
                  <p className="lead">
                    Here is an exhaustive list of all the fees and charges to be
                    paid for the education loan.
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

                        "Swift loan approval—get the funds you need quickly. Hassle-free process for immediate financial support."
                      </p>
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

                        "Simplify your life with easy loan repayment options. Manage finances effortlessly with flexible and convenient repayment ."
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

                        "Unmatched integrity: Embrace clarity with our commitment to 100% transparency. Your trust is our priority. "
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-lg-6 py-6">
          <div className="container">
            <div className="row">
              <div className="offset-xl-3 col-xl-6 offset-md-2 col-md-8 offset-md-2 col-md-8 col-sm-12 col-12">
                <div className="mb-6 text-center">
                  {/* section title start*/}
                  <h1>Our Business Loan Products</h1>
                  <p className="mb-0 lead">
                    If you know which productyou would like to apply for, choose
                    one from below:
                  </p>
                </div>
                {/* /.section title start*/}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12">
                <div className="card smooth-shadow-sm border-0 text-center mb-4">
                  <div className="card-body px-6 py-5">
                    <div className="mb-3">
                      <i className="flaticon-get-money fs-1 text-primary" />
                    </div>
                    <div className>
                      <h3>Fast Business Cash</h3>
                      <p className="mb-0">

                        "Fuel your business with rapid cash solutions, Accelerate success with us."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12">
                <div className="card smooth-shadow-sm border-0 text-center mb-4">
                  <div className="card-body px-6 py-5">
                    <div className="mb-3">
                      <i className="flaticon-time-is-money  fs-1 text-primary" />
                    </div>
                    <div className>
                      <h3>Flexible Credit Line</h3>
                      <p className="mb-0">


                        "Unlock financial freedom with our flexible credit line.  evolving needs and aspirations."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12">
                <div className="card smooth-shadow-sm border-0 text-center mb-4">
                  <div className="card-body px-6 py-5">
                    <div className="mb-3">
                      <i className="flaticon-rich  fs-1 text-primary" />
                    </div>
                    <div className>
                      <h3>Unsecured Term Loan</h3>
                      <p className="mb-0">

                        "Secure your goals with an unsecured term loan, without collateral worries.".
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12">
                <div className="card smooth-shadow-sm border-0 text-center mb-4">
                  <div className="card-body px-6 py-5">
                    <div className="mb-3">
                      <i className="flaticon-store-1  fs-1 text-primary" />
                    </div>
                    <div className>
                      <h3>Merchant Funding Loan</h3>
                      <p className="mb-0">
                        "Empower your business with our Merchant Funding Loan Yours"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12">
                <div className="card smooth-shadow-sm border-0 text-center mb-4">
                  <div className="card-body px-6 py-5">
                    <div className="mb-3">
                      <i className="flaticon-stand  fs-1 text-primary" />
                    </div>
                    <div className="loan-products-content">
                      <h3>Small Business owner</h3>
                      <p className="mb-0">
                        "Attention, small business owners! Navigate growth confidently"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12">
                <div className="card smooth-shadow-sm border-0 text-center">
                  <div className="card-body px-6 py-5">
                    <div className="mb-3">
                      <i className="flaticon-safebox-1  fs-1 text-primary" />
                    </div>
                    <div className="loan-products-content">
                      <h3>Secured Business Loan </h3>
                      <p className="mb-0">

                        "Secure your business's future with our tailored Secured Business Loan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="container">
            <div className="mb-2">
              <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="mb-4 text-center">
                  {/* section title start*/}
                  <h1 className="mb-0">Loan Application Form </h1>
                </div>
              </div>
              <form>
                <div>
                  {/* Text input*/}
                  <div className="row">
                    <h3> User KYC Details </h3>

                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="fname"
                        >
                          First Name
                        </label>
                        <input
                          id="fname"
                          name="fname"
                          type="text"
                          value={formData.fname}
                          onChange={handleInputChange}
                          placeholder="First Name"
                          className="form-control"
                        />
                        {errors.fname && (
                          <div className="text-danger">
                            {errors.fname}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="mname"
                        >
                          Middle Name
                        </label>
                        <input
                          id="mname"
                          name="mname"
                          type="text"
                          value={formData.mname}
                          onChange={handleInputChange}
                          placeholder="Middle Name"
                          className="form-control"
                        />
                        {errors.mname && (
                          <div className="text-danger">
                            {errors.mname}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="lname"
                        >
                          Last Name
                        </label>
                        <input
                          id="lname"
                          name="lname"
                          type="text"
                          value={formData.lname}
                          onChange={handleInputChange}
                          placeholder="Last Name"
                          className="form-control"
                        />
                        {errors.lname && (
                          <div className="text-danger">
                            {errors.lname}
                          </div>
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
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email"
                          className="form-control"
                        />
                        {errors.email && (
                          <div className="text-danger">
                            {errors.email}
                          </div>
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
                          id="phone"
                          name="phone"
                          type="text"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone"
                          className="form-control"
                        />
                        {errors.phone && (
                          <div className="text-danger">
                            {errors.phone}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="alternate_number"
                        >
                          Alternate Phone Number
                        </label>
                        <input
                          id="alternate_number"
                          name="alternate_number"
                          type="text"
                          value={formData.alternate_number}
                          onChange={handleInputChange}
                          placeholder="Alternate Phone"
                          className="form-control"
                        />
                        {errors.alternate_number && (
                          <div className="text-danger">
                            {errors.alternate_number}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="purpose_of_loan"
                        >
                          Purpose Of Loan
                        </label>
                        <input
                          id="purpose_of_loan"
                          name="purpose_of_loan"
                          type="text"
                          value={formData.purpose_of_loan}
                          onChange={handleInputChange}
                          placeholder="Purpose Of Loan"
                          className="form-control"
                        />
                        {errors.purpose_of_loan && (
                          <div className="text-danger">
                            {errors.purpose_of_loan}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="fathers_name"
                        >
                          Father's Name
                        </label>
                        <input
                          id="fathers_name"
                          name="fathers_name"
                          type="text"
                          value={formData.fathers_name}
                          onChange={handleInputChange}
                          placeholder="Father's Name"
                          className="form-control"
                        />
                        {errors.fathers_name && (
                          <div className="text-danger">
                            {errors.fathers_name}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="mothers_name"
                        >
                          Mother's Name
                        </label>
                        <input
                          id="mothers_name"
                          name="mothers_name"
                          type="text"
                          value={formData.mothers_name}
                          onChange={handleInputChange}
                          placeholder="Mother's Name"
                          className="form-control"
                        />
                        {errors.mothers_name && (
                          <div className="text-danger">
                            {errors.mothers_name}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <select
                          id={`marital_status`}
                          disabled={textDisabld}
                          name="marital_status"
                          className="form-select"
                          value={formData.marital_status}
                          onChange={handleInputChange}
                        >
                          <option value="" disabled selected>
                            Marital Status
                          </option>
                          <option value="single">Single</option>
                          <option value="married">Married</option>
                        </select>
                        {errors.marital_status && (
                          <div className="text-danger">{errors.marital_status}</div>
                        )}
                      </div>
                    </div>

                    {formData.marital_status === "married" && ( // Display spouse name input field only if marital status is "married"
                      <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="mb-3">
                          <label className="sr-only form-label mb-0" htmlFor={`spouse_name`}>
                            Spouse Name
                          </label>
                          <input
                            id={`spouse_name`}
                            name={`spouse_name`}
                            type="text"
                            value={formData.spouse_name}
                            onChange={handleInputChange}// Assuming handleInputChange2 handles changes in form inputs for the loan items
                            placeholder="Spouse Name"
                            className="form-control"
                          />
                          {errors.spouse_name && (
                            <div className="text-danger">{errors.spouse_name}</div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="date_of_birth"
                        >
                          D.O.B
                        </label>
                        <input
                          id="date_of_birth"
                          name="date_of_birth"
                          type="text"
                          value={formData.date_of_birth}
                          onChange={handleInputChange}
                          placeholder="D.O.B"
                          className="form-control"
                        />
                        {errors.date_of_birth && (
                          <div className="text-danger">
                            {errors.date_of_birth}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="pancard_number"
                        >
                          Pancard Number
                        </label>
                        <input
                          id="pancard_number"
                          name="pancard_number"
                          type="text"
                          value={formData.pancard_number}
                          onChange={handleInputChange}
                          placeholder="Pancard Number"
                          className="form-control"
                        />
                        {errors.pancard_number && (
                          <div className="text-danger">
                            {errors.pancard_number}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="message"
                        >
                        </label>
                        <textarea
                          id="permanent_address"
                          rows={3}
                          name="permanent_address"
                          type="text"
                          value={formData.permanent_address}
                          onChange={handleInputChange}
                          placeholder="Permanent Address"
                          className="form-control"
                          defaultValue={""}
                        />
                        {errors.permanent_address && (
                          <div className="text-danger">
                            {errors.permanent_address}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="message"
                        >
                        </label>
                        <textarea
                          id="residential_address"
                          rows={3}
                          name="residential_address"
                          type="text"
                          value={formData.residential_address}
                          onChange={handleInputChange}
                          placeholder="Residential Address"
                          className="form-control"
                          defaultValue={""}
                        />
                        {errors.residential_address && (
                          <div className="text-danger">
                            {errors.residential_address}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="landmark"
                        >
                          Landmark
                        </label>
                        <input
                          id="landmark"
                          name="landmark"
                          type="text"
                          value={formData.landmark}
                          onChange={handleInputChange}
                          placeholder="Landmark"
                          className="form-control"
                        />
                        {errors.landmark && (
                          <div className="text-danger">
                            {errors.landmark}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="village"
                        >
                          village
                        </label>
                        <input
                          id="village"
                          name="village"
                          type="text"
                          value={formData.village}
                          onChange={handleInputChange}
                          placeholder="village"
                          className="form-control"
                        />
                        {errors.village && (
                          <div className="text-danger">
                            {errors.village}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="city"
                        >
                          City
                        </label>
                        <input
                          id="city"
                          name="city"
                          type="text"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="City"
                          className="form-control"
                        />
                        {errors.city && (
                          <div className="text-danger">
                            {errors.city}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="state"
                        >
                          State
                        </label>
                        <input
                          id="state"
                          name="state"
                          type="text"
                          value={formData.state}
                          onChange={handleInputChange}
                          placeholder="State"
                          className="form-control"
                        />
                        {errors.state && (
                          <div className="text-danger">
                            {errors.state}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="pincode"
                        >
                          Pincode
                        </label>
                        <input
                          id="pincode"
                          name="pincode"
                          type="text"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          placeholder="Pincode"
                          className="form-control"
                        />
                        {errors.pincode && (
                          <div className="text-danger">
                            {errors.pincode}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* User Bank Detail Start */}

                    {dividendArr.map((item, index) => (
                      <div className="" key={index}>
                        <h3>
                          {" "}
                          {index === 0 && "Banking Details"}{" "}
                          <span>
                            {" "}
                            <button
                              type="button"
                              className={`add-button  ${(index === 0 && "d-none") || ""
                                }`}
                              onClick={() => handleRemove(index)}
                              style={{ backgroundColor: "blue" }}
                            >
                              -
                            </button>
                            {index === 0 && (
                              <button
                                type="button"
                                className=""
                                onClick={handleAdd}
                                style={{ backgroundColor: "blue" }}
                              >
                                +
                              </button>
                            )}
                          </span>
                        </h3>

                        <div className="row">
                          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="name"
                              >
                                Name of Bank
                              </label>
                              <input
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
                                htmlFor="name"
                              >
                                Branch of Bank
                              </label>
                              <input
                                // id={`dividend_stock_amount${index}`}
                                id={`branch_name ${index}`}
                                name="branch_name"
                                type="text"
                                disabled={textDisabld}
                                value={item.branch_name}
                                onChange={(e) =>
                                  handleInputChange1(e, index)
                                }
                                // onChange={handleInputChange}
                                placeholder="Branch of Bank"
                                className="form-control"
                                required
                              />
                              {/* {errors.branch_name && (
                                        <div className="text-danger">
                                          {errors.branch_name}
                                        </div>
                                      )} */}
                            </div>
                          </div>

                          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="name"
                              >
                                Salary
                              </label>
                              <input
                                id={`salary ${index}`}
                                name="salary"
                                type="text"
                                disabled={textDisabld}
                                value={item.salary}
                                onChange={(e) =>
                                  handleInputChange1(e, index)
                                }
                                placeholder="Salary"
                                className="form-control"
                                required
                              />
                              {errors.salary && (
                                <div className="text-danger">
                                  {errors.salary}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* User Bank Detail End */}

                    {dividendArr1.map((item, index) => (
                      <div className="" key={index}>
                        <h3>

                          {index === 0 && "  Loan Repyment Details"}   <span>  <button
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
                                name="bank_nbfc"
                                type="text"
                                value={item.bank_nbfc}
                                id={`bank_nbfc ${index}`}
                                onChange={(e) =>
                                  handleInputChange2(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Name OfBank NBFC"
                                className="form-control"
                              />
                              {/* {errors.bank_nbfc && (
                                    <div className="text-danger">
                                      {errors.bank_nbfc}
                                    </div>
                                  )} */}
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <select

                                name="loan_type"
                                className="form-select"
                                value={item.loan_type}
                                id={`loan_type ${index}`}
                                onChange={(e) =>
                                  handleInputChange2(e, index)
                                }
                                disabled={textDisabld}
                              >
                                <option value="" disabled selected>
                                  Type of Loan
                                </option>
                                <option value="home">Home Loan</option>
                                <option value="student">
                                  Student Loan
                                </option>
                                <option value="personal">
                                  Personal Loan
                                </option>
                                <option value="Car">Car Loan</option>
                                <option value="Education">
                                  Education Loan
                                </option>
                                <option value="Gold">Gold Loan</option>
                                <option value="Business">
                                  Business Loan
                                </option>
                                <option value="Refinance">
                                  Refinance Loan
                                </option>
                              </select>
                              {errors.loan_type && (
                                <div className="text-danger">
                                  {errors.loan_type}
                                </div>
                              )}
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

                                name="emi"
                                type="text"
                                value={item.emi}
                                id={`emi ${index}`}
                                onChange={(e) =>
                                  handleInputChange2(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="EMI"
                                className="form-control"
                              />
                              {/* {errors.emi && (
                                    <div className="text-danger">
                                      {errors.emi}
                                    </div>
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
                                name="pandding"
                                type="text"
                                value={item.pandding}
                                id={`padding ${index}`}
                                onChange={(e) =>
                                  handleInputChange2(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Pending"
                                className="form-control"
                              />
                              {/* {errors.pandding && (
                                    <div className="text-danger">
                                      {errors.pandding}
                                    </div>
                                  )} */}
                            </div>
                          </div>

                        </div>
                      </div>

                    ))}

                    {/* User loan repayment detail end */}

                    {/* <h3>Details of Profession </h3>
                              <h3 className="mt-2">For Salaried</h3>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
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
                                      Selected File:{" "}
                                      {formData2.three_month_salary.name}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Last Two year Form 16
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    last_two_year_six
                                  </label>
                                  <input
                                    id="last_two_year_six "
                                    name="last_two_year_six "
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(
                                        e,
                                        "last_two_year_six"
                                      )
                                    }
                                    placeholder="Last Two year Form ."
                                    className="form-control"
                                  />
                                 {errors.last_two_year_six && (
                                    <div className="text-danger">
                                      {errors.last_two_year_six}
                                    </div>
                                  )}
                                  {formData2.last_two_year_six && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.last_two_year_six.name}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Other Income Proof
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="income_proof"
                                    name="income_proof"
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(e, "income_proof")
                                    }
                                    placeholder="Last Three Month Salary Slip."
                                    className="form-control"
                                  />
                                  {errors.income_proof && (
                                    <div className="text-danger">
                                      {errors.income_proof}
                                    </div>
                                  )}
                                  {formData2.income_proof && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.income_proof.name}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <h3>For Self Employed</h3>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Last Two Year ITR
                                  </h6>
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
                                    <div className="text-danger">
                                      {errors.itr}
                                    </div>
                                  )}
                                  {formData2.itr && (
                                    <p>Selected File: {formData2.itr.name}</p>
                                  )}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Last Two year Form 24 AS
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="last_two_year_as "
                                    name="last_two_year_as "
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(
                                        e,
                                        "last_two_year_as"
                                      )
                                    }
                                    placeholder="Last Two year Form ."
                                    className="form-control"
                                  />
                                  {errors.last_two_year_as && (
                                    <div className="text-danger">
                                      {errors.last_two_year_as}
                                    </div>
                                  )}
                                  {formData2.last_two_year_as && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.last_two_year_as.name}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
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
                                      Selected File:{" "}
                                      {formData2.registration_proof.name}
                                    </p>
                                  )}
                                </div>
                              </div> */}



                    {/* Co Applicant Details Start */}

                    <h3>Co-Applicant Details </h3>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="co_fname"
                        >
                          First Name
                        </label>
                        <input
                          id="co_fname"
                          name="co_fname"
                          type="text"
                          value={formData.co_fname}
                          onChange={handleInputChange}
                          placeholder="First Name"
                          className="form-control"
                        />
                        {errors.co_fname && (
                          <div className="text-danger">
                            {errors.co_fname}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="co_mname"
                        >
                          Middle Name
                        </label>
                        <input
                          id="co_mname"
                          name="co_mname"
                          type="text"
                          value={formData.co_mname}
                          onChange={handleInputChange}
                          placeholder="Middle name"
                          className="form-control"
                        />
                        {errors.co_mname && (
                          <div className="text-danger">
                            {errors.co_mname}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="co_lname"
                        >
                          Last Name
                        </label>
                        <input
                          id="co_lname"
                          name="co_lname"
                          type="text"
                          value={formData.co_lname}
                          onChange={handleInputChange}
                          placeholder="Last Name"
                          className="form-control"
                        />
                        {errors.co_lname && (
                          <div className="text-danger">
                            {errors.co_lname}
                          </div>
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
                          <div className="text-danger">
                            {errors.co_email}
                          </div>
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
                          <div className="text-danger">
                            {errors.co_phone}
                          </div>
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
                          Co Applicant Alternate Phone Number
                        </label>
                        <input
                          id="co_alternate_number"
                          name="co_alternate_number"
                          type="text"
                          value={formData.co_alternate_number}
                          onChange={handleInputChange}
                          placeholder="Co Applicant Alternate Phone"
                          className="form-control"
                        />
                        {errors.co_alternate_number && (
                          <div className="text-danger">
                            {errors.co_alternate_number}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="co_purpose_of_loan"
                        >
                          Co Applicant Purpose Of Loan
                        </label>
                        <input
                          id="co_purpose_of_loan"
                          name="co_purpose_of_loan"
                          type="text"
                          value={formData.co_purpose_of_loan}
                          onChange={handleInputChange}
                          placeholder="Co Applicant Purpose Of Loan"
                          className="form-control"
                        />
                        {errors.co_purpose_of_loan && (
                          <div className="text-danger">
                            {errors.co_purpose_of_loan}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="co_fathers_name"
                        >
                          Co Applicant Father's Name
                        </label>
                        <input
                          id="co_fathers_name"
                          name="co_fathers_name"
                          type="text"
                          value={formData.co_fathers_name}
                          onChange={handleInputChange}
                          placeholder="Co Applicant Father's Name"
                          className="form-control"
                        />
                        {errors.co_fathers_name && (
                          <div className="text-danger">
                            {errors.co_fathers_name}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="co_mothers_name"
                        >
                          Co Applicant Mother's Name
                        </label>
                        <input
                          id="co_mothers_name"
                          name="co_mothers_name"
                          type="text"
                          value={formData.co_mothers_name}
                          onChange={handleInputChange}
                          placeholder="Co Applicant Mother's Name"
                          className="form-control"
                        />
                        {errors.co_mothers_name && (
                          <div className="text-danger">
                            {errors.co_mothers_name}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <select
                          id={`co_marital_status`}
                          disabled={textDisabld}
                          name="co_marital_status"
                          className="form-select"
                          value={formData.co_marital_status}
                          onChange={handleInputChange}
                        >
                          <option value="" disabled selected>
                            Co Marital Status
                          </option>
                          <option value="single">Single</option>
                          <option value="married">Married</option>
                        </select>
                        {errors.co_marital_status && (
                          <div className="text-danger">{errors.co_marital_status}</div>
                        )}
                      </div>
                    </div>

                    {formData.co_marital_status === "married" && ( // Display spouse name input field only if marital status is "married"
                      <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="mb-3">
                          <label className="sr-only form-label mb-0" htmlFor={`co_spouse_name`}>
                            Co Spouse Name
                          </label>
                          <input
                            id={`co_spouse_name`}
                            name={`co_spouse_name`}
                            type="text"
                            value={formData.co_spouse_name}
                            onChange={handleInputChange}// Assuming handleInputChange2 handles changes in form inputs for the loan items
                            placeholder="Spouse Name"
                            className="form-control"
                          />
                          {errors.co_spouse_name && (
                            <div className="text-danger">{errors.co_spouse_name}</div>
                          )}
                        </div>
                      </div>
                    )}
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="co_date_of_birth"
                        >
                          Co Applicant D.O.B
                        </label>
                        <input
                          id="co_date_of_birth"
                          name="co_date_of_birth"
                          type="text"
                          value={formData.co_date_of_birth}
                          onChange={handleInputChange}
                          placeholder="Co Applicant D.O.B"
                          className="form-control"
                        />
                        {errors.co_date_of_birth && (
                          <div className="text-danger">
                            {errors.co_date_of_birth}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <select
                          id={`co_relation`}
                          disabled={textDisabld}
                          name="co_relation"
                          className="form-select"
                          value={formData.co_relation}
                          onChange={handleInputChange}
                        >
                          <option value="" disabled selected>
                            Co Applicant Relation
                          </option>
                          <option value="familymember">Family Member</option>
                          <option value="friend">Friend</option>
                          <option value="realtive">Relative</option>
                        </select>
                        {errors.co_relation && (
                          <div className="text-danger">{errors.co_relation}</div>
                        )}
                      </div>
                    </div>

                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="co_pancard_number"
                        >
                          Co Applicant Pancard Number
                        </label>
                        <input
                          id="co_pancard_number"
                          name="co_pancard_number"
                          type="text"
                          value={formData.co_pancard_number}
                          onChange={handleInputChange}
                          placeholder="Co Applicant Pancard Number"
                          className="form-control"
                        />
                        {errors.co_pancard_number && (
                          <div className="text-danger">
                            {errors.co_pancard_number}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="message"
                        >
                        </label>
                        <textarea
                          id="co_permanent_address"
                          rows={3}
                          name="co_permanent_address"
                          type="text"
                          value={formData.co_permanent_address}
                          onChange={handleInputChange}
                          placeholder="Co Applicant Permanent Address"
                          className="form-control"
                          defaultValue={""}
                        />
                        {errors.co_permanent_address && (
                          <div className="text-danger">
                            {errors.co_permanent_address}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="co_land_mark"
                        >
                          Co Applicant Landmark
                        </label>
                        <input
                          id="co_land_mark"
                          name="co_land_mark"
                          type="text"
                          value={formData.co_land_mark}
                          onChange={handleInputChange}
                          placeholder="Landmark"
                          className="form-control"
                        />
                        {errors.co_land_mark && (
                          <div className="text-danger">
                            {errors.co_land_mark}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="co_village"
                        >
                          Co Applicant Village
                        </label>
                        <input
                          id="co_village"
                          name="co_village"
                          type="text"
                          value={formData.co_village}
                          onChange={handleInputChange}
                          placeholder="Village"
                          className="form-control"
                        />
                        {errors.co_village && (
                          <div className="text-danger">
                            {errors.co_village}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="co_city"
                        >
                          Co Applicant City
                        </label>
                        <input
                          id="co_city"
                          name="co_city"
                          type="text"
                          value={formData.co_city}
                          onChange={handleInputChange}
                          placeholder="Co Applicant City"
                          className="form-control"
                        />
                        {errors.co_city && (
                          <div className="text-danger">
                            {errors.co_city}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="co_state"
                        >
                          Co Applicant State
                        </label>
                        <input
                          id="co_state"
                          name="co_state"
                          type="text"
                          value={formData.co_state}
                          onChange={handleInputChange}
                          placeholder="Co Applicant State"
                          className="form-control"
                        />
                        {errors.co_state && (
                          <div className="text-danger">
                            {errors.co_state}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="co_pincode"
                        >
                          Co Applicant Pincode
                        </label>
                        <input
                          id="co_pincode"
                          name="co_pincode"
                          type="text"
                          value={formData.co_pincode}
                          onChange={handleInputChange}
                          placeholder="Co Applicant Pincode"
                          className="form-control"
                        />
                        {errors.co_pincode && (
                          <div className="text-danger">
                            {errors.co_pincode}
                          </div>
                        )}
                      </div>
                    </div>


                    {/* Co Applicant Details End */}

                    {/*Co Applicant Bank Details start  */}
                    {dividendArr2.map((item, index) => (
                      <div className="" key={index}>
                        <h3>
                          {" "}
                          {index === 0 && "Banking Details"}{" "}
                          <span>
                            {" "}
                            <button
                              type="button"
                              className={`add-button  ${(index === 0 && "d-none") || ""
                                }`}
                              onClick={() => handleRemove2(index)}
                              style={{ backgroundColor: "blue" }}
                            >
                              -
                            </button>
                            {index === 0 && (
                              <button
                                type="button"
                                className=""
                                onClick={handleAdd2}
                                style={{ backgroundColor: "blue" }}
                              >
                                +
                              </button>
                            )}
                          </span>
                        </h3>

                        <div className="row">
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
                                htmlFor="co_applicant_branch_name"
                              >
                                Co Applicant Branch of Bank
                              </label>
                              <input
                                // id={`dividend_stock_amount${index}`}
                                id={`co_branch_name ${index}`}
                                name="co_branch_name"
                                type="text"
                                disabled={textDisabld}
                                value={item.co_branch_name}
                                onChange={(e) =>
                                  handleInputChange3(e, index)
                                }
                                // onChange={handleInputChange}
                                placeholder="Co Applicant Branch of Bank"
                                className="form-control"
                                required
                              />
                              {errors.co_branch_name && (
                                <div className="text-danger">
                                  {errors.co_branch_name}
                                </div>
                              )}
                            </div>
                          </div>


                        </div>
                      </div>
                    ))}
                    {/* Co Applicant Bank Details End  */}

                    {/* Co Applicant Loan Detail Start  */}

                    {dividendArr3.map((item, index) => (
                      <div className="" key={index}>
                        <h3>
                          {index === 0 && "     Loan Repyment Details    "}   <span>  <button
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

                                name="co_bank_nbfc"
                                type="text"
                                value={item.co_bank_nbfc}
                                id={`co_bank_nbfc ${index}`}
                                onChange={(e) =>
                                  handleInputChange4(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Name OfBank NBFC"
                                className="form-control"
                              />
                              {/* {errors.co_bank_nbfc && (
                                    <div className="text-danger">
                                      {errors.co_bank_nbfc}
                                    </div>
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
                                onChange={(e) =>
                                  handleInputChange4(e, index)
                                }
                                disabled={textDisabld}
                              >
                                <option value="" disabled selected>
                                  Type of Loan
                                </option>
                                <option value="home">Home Loan</option>
                                <option value="student">
                                  Student Loan
                                </option>
                                <option value="personal">
                                  Personal Loan
                                </option>
                                <option value="Car">Car Loan</option>
                                <option value="Education">
                                  Education Loan
                                </option>
                                <option value="Gold">Gold Loan</option>
                                <option value="Business">
                                  Business Loan
                                </option>
                                <option value="Refinance">
                                  Refinance Loan
                                </option>
                              </select>
                              {/* {errors.co_loan_type && (
                                    <div className="text-danger">
                                      {errors.co_loan_type}
                                    </div>
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

                                name="co_emi"
                                type="text"
                                value={item.co_emi}
                                id={`co_emi ${index}`}
                                onChange={(e) =>
                                  handleInputChange4(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="EMI"
                                className="form-control"
                              />
                              {/* {errors.co_emi && (
                                    <div className="text-danger">
                                      {errors.co_emi}
                                    </div>
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

                                name="co_pandding"
                                type="text"
                                value={item.co_pandding}
                                id={`co_pandding ${index}`}
                                onChange={(e) =>
                                  handleInputChange4(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Pending"
                                className="form-control"
                              />
                              {/* {errors.co_pandding && (
                                    <div className="text-danger">
                                      {errors.co_pandding}
                                    </div>
                                  )} */}
                            </div>
                          </div>

                        </div>
                      </div>
                    ))}

                    {/* Co Applicant Loan Detail End  */}



                    {/* Guarantor Details  start  */}
                    {dividendArr4.map((item, index) => (
                      <div className="" key={index}>
                        <h3>
                          {index === 0 && " Guarantor Details   "}   <span>  <button
                            type="button"
                            className={`add-button  ${(index === 0 && "d-none") || ""
                              }`}
                            onClick={() => handleRemove4(index)}
                            style={{ backgroundColor: 'blue' }}
                          >
                            -
                          </button>
                            {index === 0 && (
                              <button
                                type="button"
                                className=""
                                onClick={handleAdd4}
                                style={{ backgroundColor: 'blue' }}
                              >
                                +
                              </button>
                            )}</span>   </h3>
                        <div className="row">
                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="name"
                              >
                                First Name
                              </label>
                              <input

                                name="guar_fname"
                                type="text"
                                value={item.guar_fname}
                                id={`guar_fname ${index}`}
                                onChange={(e) =>
                                  handleInputChange5(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="First Name"
                                className="form-control"
                              />
                              {errors.guar_fname && (
                                <div className="text-danger">
                                  {errors.guar_fname}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="name"
                              >
                                Middle Name
                              </label>
                              <input

                                name="guar_mname"
                                type="text"
                                value={item.guar_mame}
                                id={`guar_mame ${index}`}
                                onChange={(e) =>
                                  handleInputChange5(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Middle Name"
                                className="form-control"
                              />
                              {errors.guar_mame && (
                                <div className="text-danger">
                                  {errors.guar_mame}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="name"
                              >
                                Last Name
                              </label>
                              <input

                                name="guar_lname"
                                type="text"
                                value={item.guar_lname}
                                id={`guar_lname ${index}`}
                                onChange={(e) =>
                                  handleInputChange5(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Last Name"
                                className="form-control"
                              />
                              {errors.guar_lname && (
                                <div className="text-danger">
                                  {errors.guar_lname}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="email"
                              >
                                Email
                              </label>
                              <input

                                name="guar_email"
                                type="email"
                                value={item.guar_email}
                                id={`guar_email ${index}`}
                                onChange={(e) =>
                                  handleInputChange5(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Email"
                                className="form-control"
                              />
                              {/* {errors.guar_email && (
                                    <div className="text-danger">
                                      {errors.guar_email}
                                    </div>
                                  )} */}
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="phone"
                              >
                                Guaranter Phone
                              </label>
                              <input

                                name="guar_phone"
                                type="text"
                                value={item.guar_phone}
                                id={`guar_phone ${index}`}
                                onChange={(e) =>
                                  handleInputChange5(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Garantor Phone"
                                className="form-control"
                              />
                              {/* {errors.gura_phone && (
                                    <div className="text-danger">
                                      {errors.gura_phone}
                                    </div>
                                  )} */}
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="guar_alternate_number"
                              >
                                Guaranter Alternate Number
                              </label>
                              <input

                                name="guar_alternate_number"
                                type="text"
                                value={item.guar_alternate_number}
                                id={`guar_alternate_number ${index}`}
                                onChange={(e) =>
                                  handleInputChange5(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Garantor Alternate Number"
                                className="form-control"
                              />
                              {/* {errors.guar_alternate_number && (
                                    <div className="text-danger">
                                      {errors.guar_alternate_number}
                                    </div>
                                  )} */}
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="guar_purpose_of_loan"
                              >
                                Guaranter Purpose Of Loan
                              </label>
                              <input

                                name="guar_purpose_of_loan"
                                type="text"
                                value={item.guar_purpose_of_loan}
                                id={`guar_purpose_of_loan ${index}`}
                                onChange={(e) =>
                                  handleInputChange5(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Garantor purpose_of_loan"
                                className="form-control"
                              />
                              {/* {errors.guar_purpose_of_loan && (
                                    <div className="text-danger">
                                      {errors.guar_purpose_of_loan}
                                    </div>
                                  )} */}
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="guar_fathers_name"
                              >
                                Guaranter Father's Name
                              </label>
                              <input

                                name="guar_fathers_name"
                                type="text"
                                value={item.guar_fathers_name}
                                id={`guar_fathers_name ${index}`}
                                onChange={(e) =>
                                  handleInputChange5(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Garantor fathers_name"
                                className="form-control"
                              />
                              {/* {errors.guar_fathers_name && (
                                    <div className="text-danger">
                                      {errors.guar_fathers_name}
                                    </div>
                                  )} */}
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="guar_mothers_name"
                              >
                                Guaranter Mother's Name
                              </label>
                              <input

                                name="guar_mothers_name"
                                type="text"
                                value={item.guar_mothers_name}
                                id={`guar_mothers_name ${index}`}
                                onChange={(e) =>
                                  handleInputChange5(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Garantor mothers_name"
                                className="form-control"
                              />
                              {/* {errors.guar_mothers_name && (
                                    <div className="text-danger">
                                      {errors.guar_mothers_name}
                                    </div>
                                  )} */}
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <select
                                id={`guar_marital_status ${index}`}
                                disabled={textDisabld}
                                name="guar_marital_status"
                                className="form-select"
                                value={item.guar_marital_status}
                                onChange={(e) =>
                                  handleInputChange5(e, index)
                                }
                              >
                                <option value="" disabled selected>
                                  Gurantor Marital Status
                                </option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                              </select>
                              {errors.guar_marital_status && (
                                <div className="text-danger">{errors.guar_marital_status}</div>
                              )}
                            </div>
                          </div>

                          {item.guar_marital_status === "married" && ( // Display spouse name input field only if marital status is "married"
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                              <div className="mb-3">
                                <label className="sr-only form-label mb-0" htmlFor={`guar_spouse_name`}>
                                  Gurantor Spouse Name
                                </label>
                                <input
                                  id={`guar_spouse_name ${index}`}
                                  name={`guar_spouse_name`}
                                  type="text"
                                  value={item.guar_spouse_name}
                                  onChange={(e) =>
                                    handleInputChange5(e, index)
                                  }// Assuming handleInputChange2 handles changes in form inputs for the loan items
                                  placeholder="Spouse Name"
                                  className="form-control"
                                />
                                {errors.guar_spouse_name && (
                                  <div className="text-danger">{errors.guar_spouse_name}</div>
                                )}
                              </div>
                            </div>
                          )}
                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="guar_date_of_birth"
                              >
                                Guaranter D.O.B
                              </label>
                              <input

                                name="guar_date_of_birth"
                                type="text"
                                value={item.guar_date_of_birth}
                                id={`guar_date_of_birth ${index}`}
                                onChange={(e) =>
                                  handleInputChange5(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Garantor date_of_birth"
                                className="form-control"
                              />
                              {/* {errors.guar_date_of_birth && (
                                    <div className="text-danger">
                                      {errors.guar_date_of_birth}
                                    </div>
                                  )} */}
                            </div>
                          </div>

                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <select
                                id={`guar_relation ${index}`}
                                disabled={textDisabld}
                                name="guar_relation"
                                className="form-select"
                                value={item.guar_relation}
                                onChange={(e) =>
                                  handleInputChange5(e, index)
                                }
                              >
                                <option value="" disabled selected>
                                  Gurantor Applicant Relation
                                </option>
                                <option value="familymember">Family Member</option>
                                <option value="friend">Friend</option>
                                <option value="realtive">Relative</option>
                              </select>
                              {errors.guar_relation && (
                                <div className="text-danger">{errors.guar_relation}</div>
                              )}
                            </div>
                          </div>

                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="guar_pancard_number"
                              >
                                Guarantor Pancard Number
                              </label>
                              <input

                                name="guar_pancard_number"
                                type="text"
                                value={item.guar_pancard_number}
                                id={`guar_pancard_number ${index}`}
                                onChange={(e) =>
                                  handleInputChange5(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Garantor Pancard Number"
                                className="form-control"
                              />
                              {/* {errors.guar_pancard_number && (
                                    <div className="text-danger">
                                      {errors.guar_pancard_number}
                                    </div>
                                  )} */}
                            </div>
                          </div>
                          {/* Text input*/}
                          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="message"
                              ></label>
                              <textarea
                                className="form-control"

                                rows={3}
                                name="guar_permanent_address"
                                value={item.guar_permanent_address}
                                id={`guar_permanent_address ${index}`}
                                onChange={(e) =>
                                  handleInputChange5(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Gurantor Permanent Address"
                                defaultValue={""}
                              />
                              {errors.guar_permanent_address && (
                                <div className="text-danger">
                                  {errors.guar_permanent_address}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="guar_landmark"
                              >
                                Guarantar Landmark
                              </label>
                              <input

                                name="guar_landmark"
                                type="text"
                                value={item.guar_landmark}
                                id={`guar_landmark ${index}`}
                                onChange={(e) =>
                                  handleInputChange5(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Guarantar Landmark"
                                className="form-control"
                              />
                              {errors.guar_landmark && (
                                <div className="text-danger">
                                  {errors.guar_landmark}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="guar_village"
                              >
                                Guarantar Village
                              </label>
                              <input

                                name="guar_village"
                                type="text"
                                value={item.guar_village}
                                id={`guar_village ${index}`}
                                onChange={(e) =>
                                  handleInputChange5(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Guarantar Village"
                                className="form-control"
                              />
                              {errors.guar_village && (
                                <div className="text-danger">
                                  {errors.guar_village}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="guar_city"
                              >
                                Guarantar City
                              </label>
                              <input

                                name="guar_city"
                                type="text"
                                value={item.guar_city}
                                id={`guar_city ${index}`}
                                onChange={(e) =>
                                  handleInputChange5(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Guarantar City"
                                className="form-control"
                              />
                              {/* {errors.guar_city && (
                                    <div className="text-danger">
                                      {errors.guar_city}
                                    </div>
                                  )} */}
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="guar_state"
                              >
                                Guarantor State
                              </label>
                              <input

                                name="guar_state"
                                type="text"
                                value={item.guar_state}
                                id={`guar_state ${index}`}
                                onChange={(e) =>
                                  handleInputChange5(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Guarantor State"
                                className="form-control"
                              />
                              {/* {errors.guar_state && (
                                    <div className="text-danger">
                                      {errors.guar_state}
                                    </div>
                                  )} */}
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="guar_pincode"
                              >
                                Guarantor Pincode
                              </label>
                              <input

                                name="guar_pincode"
                                type="text"
                                value={item.guar_pincode}
                                id={`guar_pincode ${index}`}
                                onChange={(e) =>
                                  handleInputChange5(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Guarantor Pincode"
                                className="form-control"
                              />
                              {/* {errors.guar_pincode && (
                                    <div className="text-danger">
                                      {errors.guar_pincode}
                                    </div>
                                  )} */}
                            </div>
                          </div>


                        </div>
                      </div>
                    ))}
                    {/* Guarantor Details  End  */}

                    {/* <h3></h3> */}

                    {/* Guarantor Bank Details Start */}

                    {dividendArr5.map((item, index) => (
                      <div className="" key={index}>
                        <h3>
                          {index === 0 && "Gurantor Banking Details "}   <span>  <button
                            type="button"
                            className={`add-button  ${(index === 0 && "d-none") || ""
                              }`}
                            onClick={() => handleRemove5(index)}
                            style={{ backgroundColor: 'blue' }}
                          >
                            -
                          </button>
                            {index === 0 && (
                              <button
                                type="button"
                                className=""
                                onClick={handleAdd5}
                                style={{ backgroundColor: 'blue' }}
                              >
                                +
                              </button>
                            )}</span>  </h3>
                        <div className="row">
                          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="name"
                              >
                                Name of Bank
                              </label>
                              <input

                                name="guar_bank_name"
                                type="text"
                                value={item.guar_bank_name}
                                id={`guar_bank_name ${index}`}
                                onChange={(e) =>
                                  handleInputChange6(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Name of Bank"
                                className="form-control"
                              />
                              {/* {errors.guar_bank_name && (
                                    <div className="text-danger">
                                      {errors.guar_bank_name}
                                    </div>
                                  )} */}
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <select

                                name="guar_account_type"
                                className="form-select"
                                value={item.guar_account_type}
                                id={`guar_account_type ${index}`}
                                onChange={(e) =>
                                  handleInputChange6(e, index)
                                }
                                disabled={textDisabld}
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
                                <option value="Gold">DEMAT Account</option>
                              </select>
                              {/* {errors.guar_account_type && (
                                    <div className="text-danger">
                                      {errors.guar_account_type}
                                    </div>
                                  )} */}
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="guar_branch_name"
                              >
                                Guarantor Bank Branch Name
                              </label>
                              <input

                                name="guar_branch_name"
                                type="text"
                                value={item.guar_branch_name}
                                id={`guar_branch_name ${index}`}
                                onChange={(e) =>
                                  handleInputChange6(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Guarantor Bank Branch Name"
                                className="form-control"
                              />
                              {/* {errors.guar_branch_name && (
                                    <div className="text-danger">
                                      {errors.guar_branch_name}
                                    </div>
                                  )} */}
                            </div>
                          </div>

                        </div>
                      </div>
                    ))}

                    {/* Guarantor Bank Details End */}

                    {/* Guarantor Loan Details Start */}

                    {dividendArr6.map((item, index) => (
                      <div className="" key={index}>
                        <h3>
                          {index === 0 && "  Loan Repyment Details  "}   <span>  <button
                            type="button"
                            className={`add-button  ${(index === 0 && "d-none") || ""
                              }`}
                            onClick={() => handleRemove6(index)}
                            style={{ backgroundColor: 'blue' }}
                          >
                            -
                          </button>
                            {index === 0 && (
                              <button
                                type="button"
                                className=""
                                onClick={handleAdd6}
                                style={{ backgroundColor: 'blue' }}
                              >
                                +
                              </button>
                            )}</span>  </h3>

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

                                name="guar_bank_nbfc"
                                type="text"
                                value={item.guar_bank_nbfc}
                                id={`guar_bank_nbfc ${index}`}
                                onChange={(e) =>
                                  handleInputChange7(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Name Of Bank NBFC"
                                className="form-control"
                              />
                              {/* {errors.guar_bank_nbfc && (
                                    <div className="text-danger">
                                      {errors.guar_bank_nbfc}
                                    </div>
                                  )} */}
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <select
                                name="guar_loan_type"
                                className="form-select"
                                value={item.guar_loan_type}
                                id={`guar_loan_type ${index}`}
                                onChange={(e) =>
                                  handleInputChange7(e, index)
                                }
                                disabled={textDisabld}
                              >
                                <option value="" disabled selected>
                                  Type of Loan
                                </option>
                                <option value="home">Home Loan</option>
                                <option value="student">
                                  Student Loan
                                </option>
                                <option value="personal">
                                  Personal Loan
                                </option>
                                <option value="Car">Car Loan</option>
                                <option value="Education">
                                  Education Loan
                                </option>
                                <option value="Gold">Gold Loan</option>
                                <option value="Business">
                                  Business Loan
                                </option>
                                <option value="Refinance">
                                  Refinance Loan
                                </option>
                              </select>
                              {/* {errors.guar_loan_type && (
                                    <div className="text-danger">
                                      {errors.guar_loan_type}
                                    </div>
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

                                name="guar_emi"
                                type="text"
                                value={item.guar_emi}
                                id={`guar_emi ${index}`}
                                onChange={(e) =>
                                  handleInputChange7(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="EMI"
                                className="form-control"
                              />
                              {/* {errors.guar_emi && (
                                    <div className="text-danger">
                                      {errors.guar_emi}
                                    </div>
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

                                name="guar_pandding"
                                type="text"
                                value={item.guar_pandding}
                                id={`guar_pandding ${index}`}
                                onChange={(e) =>
                                  handleInputChange7(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Pending"
                                className="form-control"
                              />
                              {/* {errors.guar_pandding && (
                                    <div className="text-danger">
                                      {errors.guar_pandding}
                                    </div>
                                  )} */}
                            </div>
                          </div>

                        </div>
                      </div>
                    ))}
                    {/* 
                              <h3>Details of Profession </h3>

                          <h3 className="mt-2">For Salaried</h3> 

                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Last Three Month Salary Slip
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>

                                  <input
                                    id="guar_three_month_salary"
                                    name="guar_three_month_salary"
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(
                                        e,
                                        "guar_three_month_salary"
                                      )
                                    }
                                    className="form-control"
                                  />
                                  {errors.guar_three_month_salary && (
                                    <div className="text-danger">
                                      {errors.guar_three_month_salary}
                                    </div>
                                  )}
                                  {formData2.guar_three_month_salary && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.guar_three_month_salary.name}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Last Two year Form 16
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="guar_last_two_year_six "
                                    name="guar_last_two_year_six "
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(e, "guar_last_two_year_six")
                                    }
                                    placeholder="Last Two Year ."
                                    className="form-control"
                                  />
                                   {errors.guar_last_two_year_six && (
                                    <div className="text-danger">
                                      {errors.guar_last_two_year_six}
                                    </div>
                                  )}
                                  {formData2.guar_last_two_year_six && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.guar_last_two_year_six.name}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Other Income Proof
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="guar_income_proof"
                                    name="guar_income_proof"
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(e, "guar_income_proof")
                                    }
                                    placeholder="Last Three Month Salary Slip."
                                    className="form-control"
                                  />
                                  {errors.guar_income_proof && (
                                    <div className="text-danger">
                                      {errors.guar_income_proof}
                                    </div>
                                  )}
                                  {formData2.guar_income_proof && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.guar_income_proof.name}
                                    </p>
                                  )}
                                </div>
                              </div>

                              <h3>For Self Employed</h3>

                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Last Two Year ITR
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="guar_itr"
                                    name="guar_itr"
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(e, "guar_itr")
                                    }
                                    placeholder="Last Three Month Salary Slip."
                                    className="form-control"
                                  />
                                  {errors.guar_itr && (
                                    <div className="text-danger">
                                      {errors.guar_itr}
                                    </div>
                                  )}
                                  {formData2.guar_itr && (
                                    <p>
                                      Selected File: {formData2.guar_itr.name}
                                    </p>
                                  )}
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Last Two year Form 24AS
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="guar_last_two_year_as "
                                    name="guar_last_two_year_as "
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(e, "guar_last_two_year_as")
                                    }
                                    placeholder="Last Two year Form ."
                                    className="form-control"
                                  />
                                 {errors.guar_last_two_year_as && (
                                    <div className="text-danger">
                                      {errors.guar_last_two_year_as}
                                    </div>
                                  )} 
                                  {formData2.guar_last_two_year_as && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.guar_last_two_year_as.name}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Business Registration Proof
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="guar_registration_proof"
                                    name="guar_registration_proof"
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(
                                        e,
                                        "guar_registration_proof"
                                      )
                                    }
                                    placeholder="Last Three Month Salary Slip."
                                    className="form-control"
                                  />
                                  {errors.guar_registration_proof && (
                                    <div className="text-danger">
                                      {errors.guar_registration_proof}
                                    </div>
                                  )}
                                  {formData2.guar_registration_proof && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.guar_registration_proof.name}
                                    </p>
                                  )}
                                </div>
                              </div> 
                              */}

                    <h3>Details of Profession </h3>

                    <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <h6 className="text-center">
                          First Month Bank Statement
                        </h6>
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        ></label>

                        <input
                          id="first_month_bank_statement"
                          name="first_month_bank_statement"
                          type="file"
                          onChange={(e) =>
                            handleFileChange(e, "first_month_bank_statement")
                          }
                          className="form-control"
                        />
                        {errors.first_month_bank_statement && (
                          <div className="text-danger">
                            {errors.first_month_bank_statement}
                          </div>
                        )}
                        {formData2.first_month_bank_statement && (
                          <p>
                            Selected File:{" "}
                            {formData2.first_month_bank_statement.name}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <h6 className="text-center">
                          Second Month Bank Statement
                        </h6>
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        ></label>

                        <input
                          id="second_month_bank_statement"
                          name="second_month_bank_statement"
                          type="file"
                          onChange={(e) =>
                            handleFileChange(e, "second_month_bank_statement")
                          }
                          className="form-control"
                        />
                        {errors.second_month_bank_statement && (
                          <div className="text-danger">
                            {errors.second_month_bank_statement}
                          </div>
                        )}
                        {formData2.second_month_bank_statement && (
                          <p>
                            Selected File:{" "}
                            {formData2.second_month_bank_statement.name}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <h6 className="text-center">
                          Third Month Bank Statement
                        </h6>
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        ></label>

                        <input
                          id="third_month_bank_statement"
                          name="third_month_bank_statement"
                          type="file"
                          onChange={(e) =>
                            handleFileChange(e, "third_month_bank_statement")
                          }
                          className="form-control"
                        />
                        {errors.third_month_bank_statement && (
                          <div className="text-danger">
                            {errors.third_month_bank_statement}
                          </div>
                        )}
                        {formData2.third_month_bank_statement && (
                          <p>
                            Selected File:{" "}
                            {formData2.third_month_bank_statement.name}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <h6 className="text-center">
                          Form 3
                        </h6>
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        ></label>
                        <input
                          id="form_three"
                          name="form_three"
                          type="file"
                          onChange={(e) => handleFileChange(e, "form_three")}
                          // placeholder="itr."
                          className="form-control"
                        />
                        {errors.form_three && (
                          <div className="text-danger">
                            {errors.form_three}
                          </div>
                        )}
                        {formData2.form_three && (
                          <p>Selected File: {formData2.form_three.name}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <h6 className="text-center">
                          Vintage Proof
                        </h6>
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        ></label>
                        <input
                          id="vintage_proof"
                          name="vintage_proof"
                          type="file"
                          onChange={(e) =>
                            handleFileChange(e, "vintage_proof")
                          }
                          // placeholder="vintage_proof."
                          className="form-control"
                        />
                        {errors.vintage_proof && (
                          <div className="text-danger">
                            {errors.vintage_proof}
                          </div>
                        )}
                        {formData2.vintage_proof && (
                          <p>
                            Selected File: {formData2.vintage_proof.name}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <h6 className="text-center">
                          Address Proof ( Electricity Bill )
                        </h6>
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        ></label>
                        <input
                          id="address_proof"
                          name="address_proof"
                          type="file"
                          onChange={(e) =>
                            handleFileChange(e, "address_proof")
                          }
                          // placeholder="bank_statement."
                          className="form-control"
                        />
                        {errors.address_proof && (
                          <div className="text-danger">
                            {errors.address_proof}
                          </div>
                        )}
                        {formData2.address_proof && (
                          <p>
                            Selected File: {formData2.address_proof.name}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <h6 className="text-center">
                          Adhar Front Photo
                        </h6>
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        ></label>
                        <input
                          id="adhar_front"
                          name="adhar_front"
                          type="file"
                          onChange={(e) =>
                            handleFileChange(e, "adhar_front")
                          }
                          // placeholder="bank_statement."
                          className="form-control"
                        />
                        {errors.adhar_front && (
                          <div className="text-danger">
                            {errors.adhar_front}
                          </div>
                        )}
                        {formData2.adhar_front && (
                          <p>
                            Selected File: {formData2.adhar_front.name}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <h6 className="text-center">
                          Adhar Back Photo
                        </h6>
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        ></label>
                        <input
                          id="adhar_back"
                          name="adhar_back"
                          type="file"
                          onChange={(e) =>
                            handleFileChange(e, "adhar_back")
                          }
                          // placeholder="bank_statement."
                          className="form-control"
                        />
                        {errors.adhar_back && (
                          <div className="text-danger">
                            {errors.adhar_back}
                          </div>
                        )}
                        {formData2.adhar_back && (
                          <p>
                            Selected File: {formData2.adhar_back.name}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <h6 className="text-center">
                          Pan Card
                        </h6>
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        ></label>
                        <input
                          id="pancard"
                          name="pancard"
                          type="file"
                          onChange={(e) =>
                            handleFileChange(e, "pancard")
                          }
                          // placeholder="bank_statement."
                          className="form-control"
                        />
                        {errors.pancard && (
                          <div className="text-danger">
                            {errors.pancard}
                          </div>
                        )}
                        {formData2.pancard && (
                          <p>
                            Selected File: {formData2.pancard.name}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <h6 className="text-center">
                          Application Photo
                        </h6>
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        ></label>
                        <input
                          id="applicant_photo"
                          name="applicant_photo"
                          type="file"
                          onChange={(e) =>
                            handleFileChange(e, "applicant_photo")
                          }
                          // placeholder="bank_statement."
                          className="form-control"
                        />
                        {errors.applicant_photo && (
                          <div className="text-danger">
                            {errors.applicant_photo}
                          </div>
                        )}
                        {formData2.applicant_photo && (
                          <p>
                            Selected File: {formData2.applicant_photo.name}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <h6 className="text-center">
                          Trade Licence
                        </h6>
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        ></label>
                        <input
                          id="trade_licence"
                          name="trade_licence"
                          type="file"
                          onChange={(e) =>
                            handleFileChange(e, "trade_licence")
                          }
                          // placeholder="bank_statement."
                          className="form-control"
                        />
                        {errors.trade_licence && (
                          <div className="text-danger">
                            {errors.trade_licence}
                          </div>
                        )}
                        {formData2.trade_licence && (
                          <p>
                            Selected File: {formData2.trade_licence.name}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <h6 className="text-center">
                          Business Registration Certificate
                        </h6>
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        ></label>
                        <input
                          id="business_registration_certificate"
                          name="business_registration_certificate"
                          type="file"
                          onChange={(e) =>
                            handleFileChange(e, "business_registration_certificate")
                          }
                          // placeholder="bank_statement."
                          className="form-control"
                        />
                        {errors.business_registration_certificate && (
                          <div className="text-danger">
                            {errors.business_registration_certificate}
                          </div>
                        )}
                        {formData2.business_registration_certificate && (
                          <p>
                            Selected File: {formData2.business_registration_certificate.name}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Guarantor Loan Details End */}

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



        <section className="py-4">
          <div className="container-fluid">
            <div className="row">
              <div className="offset-xl-3 col-xl-6 col-sm-12 col-12">
                <div className="mb-3 text-center px-lg-18">
                  {/* section title start*/}
                  <h1>Meet our lenders</h1>
                  <p className="lead">
                    Compare 60+ business funding options &amp; check eligibility
                    saving you time/ money
                  </p>
                </div>
                {/* /.section title start*/}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="card mb-4 mb-lg-0 d-block text-center shadow border-0">
                  <div className="card-body">
                    <img
                      src={Logoimg1}
                      alt="Borrow - Loan Company Responsive Website Templates"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="card mb-4 mb-lg-0 d-block text-center shadow border-0">
                  <div className="card-body">
                    <img
                      src={Logoimg2}
                      alt="Borrow - Loan Company Responsive Website Templates"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="card mb-4 mb-lg-0 d-block text-center shadow border-0">
                  <div className="card-body">
                    <img
                      src={Logoimg3}
                      alt="Borrow - Loan Company Responsive Website Templates"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="card mb-4 mb-lg-0 d-block text-center shadow border-0">
                  <div className="card-body">
                    <img
                      src={Logoimg4}
                      alt="Borrow - Loan Company Responsive Website Templates"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="card mb-4 mb-lg-0 d-block text-center shadow border-0">
                  <div className="card-body">
                    <img
                      src={Logoimg1}
                      alt="Borrow - Loan Company Responsive Website Templates"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="card mb-4 mb-lg-0 d-block text-center shadow border-0">
                  <div className="card-body">
                    <img
                      src={Logoimg3}
                      alt="Borrow - Loan Company Responsive Website Templates"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BusinessLoan;
