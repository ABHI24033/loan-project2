import React, { useEffect, useState } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Studenloan.css";
import Avatarimg1 from "../../assets/images/avatar/avatar-1.jpg";
import Avatarimg2 from "../../assets/images/avatar/avatar-2.jpg";
import Avatarimg3 from "../../assets/images/avatar/avatar-4.jpg";
import axios from 'axios';
import { backendUrl } from "../../env";

const StudentLoan = () => {
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
  const newformData = new FormData();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    application_no: "",
    name_trust: '',
    dt_email: '',
    designation: '',
    contact: '',
    sclclg_managed: "",
    business_address: "",
    conract_person: '',
    website_link: '',
    name_institue: '',
    course_faculty: '',
    approved_by: '',
    seats: '',
    per_year_fess: '',
    name_of_inst: '',
    course_faculty_one: '',
    approved_bye_one: '',
    seats_one: '',
    per_year_fee_one: '',
    institutes_host: '',
    course_faculty_two: '',
    approved_two: '',
    seats_two: '',
    per_year_fees_hostel: '',
    school_clg: '',
    transport: '',
    hostel: ''
  });

  const [formData2, setFormData2] = useState({
    three_month_salary: null,
    itr: null,
    income_proof: null,
    registration_proof: null,
  })

  const [textDisabld, setTextDisabld] = useState(false);

  const [dividendArr, setDividendArr] = useState([
    {
      name_trust: '',
      dt_email: '',
      designation: '',
      contact: '',

    },
  ]);

  const [dividendArr1, setDividendArr1] = useState([
    {
      name_institue: '',
      course_faculty: '',
      approved_by: '',
      seats: '',
      per_year_fess: '',
    },
  ]);


  const [dividendArr2, setDividendArr2] = useState([
    {
      name_of_inst: '',
      course_faculty_one: '',
      approved_bye_one: '',
      seats_one: '',
      per_year_fee_one: '',
    },
  ]);

  const [dividendArr3, setDividendArr3] = useState([
    {
      institutes_host: '',
      course_faculty_two: '',
      approved_two: '',
      seats_two: '',
      per_year_fees_hostel: '',
    },
  ]);


  const handleAdd = () => {
    setDividendArr([
      ...dividendArr,
      {
        name_trust: '',
        dt_email: '',
        designation: '',
        contact: '',
      },
    ]);
  };

  const handleAdd1 = () => {
    setDividendArr1([
      ...dividendArr1,
      {
        name_institue: '',
        course_faculty: '',
        approved_by: '',
        seats: '',
        per_year_fess: '',
      },
    ]);
  };

  const handleAdd2 = () => {
    setDividendArr2([
      ...dividendArr2,
      {
        name_of_inst: '',
        course_faculty_one: '',
        approved_bye_one: '',
        seats_one: '',
        per_year_fee_one: '',
      },
    ]);
  };

  const handleAdd3 = () => {
    setDividendArr3([
      ...dividendArr3,
      {
        institutes_host: '',
        course_faculty_two: '',
        approved_two: '',
        seats_two: '',
        per_year_fees_hostel: '',
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
    if (dividendArr3.length > 0) {
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
    // const data = new FormData();
    // data.append("file", file);    // Ensure the selected file is a PDF file
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

    if (!formData.name_trust) {
      newErrors.name_trust = "Name of Trustee  is Requried";
    }

    if (!formData.conract_person) {
      newErrors.conract_person = "Contract person is Requried";
    }
    if (!formData.sclclg_managed) {
      newErrors.sclclg_managed = "This  is Requried";
    }

    if (!formData.business_address) {
      newErrors.business_address = "Business_Address is Requried";
    }
    if (!formData.website_link) {
      newErrors.website_link = " Website Link is Requried";
    }
    if (!formData.designation) {
      newErrors.designation = "Designation is Requried";
    }
    if (!formData.contact) {
      newErrors.contact = "Contact  is Requried";
    }
    if (!formData.per_year_fess) {
      newErrors.per_year_fess = "  Per Year Fess is Requried";
    }
    if (!formData.name_institue) {
      newErrors.name_institue = "Name of Institute  is Requried";
    }
    if (!formData.course_faculty) {
      newErrors.course_faculty = "Course Faculty is Requried";
    }
    if (!formData.approved_by) {
      newErrors.approved_by = "Approved by is Requried";
    }
    if (!formData.seats) {
      newErrors.seats = "Seats is Requried";
    }
    if (!formData.name_of_inst) {
      newErrors.name_of_inst = "Name Institute is Requried";
    }
    if (!formData.seats_one) {
      newErrors.seats_one = "Seats is Requried";
    }

    if (!formData.course_faculty_one) {
      newErrors.course_faculty_one = "Course Faculty is Requried";
    }
    if (!formData.per_year_fee_one) {
      newErrors.per_year_fee_one = "per year fees is Requried";
    }
    if (!formData.approved_two) {
      newErrors.approved_two = "Approved is Requried";
    }
    if (!formData.approved_bye_one) {
      newErrors.approved_bye_one = "Approved bye  is Requried";
    }
    if (!formData.institutes_host) {
      newErrors.institutes_host = " Institute Name is Requried";
    }
    if (!formData.course_faculty_two) {
      newErrors.course_faculty_two = "Course Faculty  is Requried";
    }
    if (!formData.seats_two) {
      newErrors.seats_two = "Seats is Requried";
    }
    if (!formData.per_year_fees_hostel) {
      newErrors.per_year_fees_hostel = "Per Year Fess is Requried";
    }
    if (!formData.school_clg) {
      newErrors.school_clg = "School Collage Name is Requried";
    }
    if (!formData.transport) {
      newErrors.transport = "Transport  is Requried";
    }
    if (!formData.hostel) {
      newErrors.hostel = "Hostel is Requried";
    }
    if (!formData.three_month_salary) {
      newErrors.three_month_salary = "Files is Requried";
    }
    if (!formData.itr) {
      newErrors.itr = "ITR Files is Requried";
    }
    if (!formData.income_proof) {
      newErrors.income_proof = "Income Files is Requried";
    }
    if (!formData.registration_proof) {
      newErrors.registration_proof = "Regproof is Requried";
    }


    // Add more validations for other fields

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const object = { dividendArr, dividendArr1, dividendArr2, dividendArr3, formData }


    // Append all files to the formData
    Object.keys(formData2).forEach((fileType) => {
      const file = formData2[fileType];
      console.log(fileType);
      if (file) {
        newformData.append(fileType, file);
      }
    });

    // Make a POST request to the backend endpoint

    try {

      let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
      }

      let bodyContent = JSON.stringify(object);

      let reqOptions = {
        // url: "http://15.207.195.184:8000/api/v1/schoolLoanForm",
        url: `${backendUrl}/schoolLoanForm`,
        method: "POST",
        headers: headersList,
        data: bodyContent,
      }

      let response = await axios.request(reqOptions);
      console.log(response.data);

      if (response) {
        // Handle success
        console.log(response.data.id);
        // const response2 = await axios.post(`http://15.207.195.184:8000/api/v1/uploadfiles/${response.data.id}`, newformData, {
        const response2 = await axios.post(`${backendUrl}/uploadfiles/${response.data.id}`, newformData, {
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
    //   password: "",
    //   dt_email: '',
    //   designation: "",
    //   conract_person: '',
    //   address: "",
    //   contact: '',
    //   website_link: '',
    //   business_address: "",
    //   name_trust: '',
    //   name_institue: '',
    //   course_faculty: '',
    //   approved_by: '',
    //   seats: '',
    //   per_year_fess: '',
    //   name_of_inst: '',
    //   seats_one: '',
    //   per_year_fee_one: '',
    //   course_faculty_two: '',
    //   approved_two: '',
    //   per_year_fees_hostel: '',
    //   school_clg: '',
    //   transport: '',
    //   hostel: '',
    //   three_month_salary: null,
    //   itr: null,
    //   income_proof: null,
    //   registration_proof: null,



    // });
    // if (validateForm()) {
    //   console.log(formData);
    //   // If form validation fails, do not submit
    //   return;
    // }
  };
  // console.log(formData);
  return (
    <>
      <main>
        <section>
          <div className="position-relative">
            <ul className="controls " id="sliderFirstControls">
              <li className="prev">
                <FontAwesomeIcon icon={faArrowLeft} />
              </li>

              <li className="next">
                <FontAwesomeIcon icon={faArrowRight} />
              </li>
            </ul>
            <div className="sliderFirst">
              <div className="item">
                <div className="py-22 studentloan-buttom-one">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                        <div>
                          {/* slider-captions */}
                          <h1 className="display-2 text-white fw-bold">
                            Helping Student Build a Stronger Tomorrow
                          </h1>
                          <p className=" d-none d-xl-block d-lg-block d-sm-block text-white">
                            The low rate you need for the need you want! Call
                            <br />
                            02269620449
                          </p>
                        </div>
                        {/* /.slider-captions */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="py-22 studentloan-buttom-two">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-7 col-lg-7 col-md-9 col-sm-12 col-12">
                        <div>
                          {/* slider-captions */}
                          <h1 className="display-2 text-white fw-bold">
                            Award winning Education loans{" "}
                          </h1>
                          <p className=" d-none d-xl-block d-lg-block d-sm-block text-white">
                            Award winning car loans with low fixed rates and{" "}
                            <br /> no ongoing fees.
                          </p>
                        </div>
                        {/* /.slider-captions */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="py-22 studentloan-buttom-three">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                        <div>
                          {/* slider-captions */}
                          <h1 className="display-2 text-white fw-bold">
                            Education Loan Rate Low Of Interest.{" "}
                          </h1>
                          <p className=" d-none d-xl-block d-lg-block d-sm-block text-white">
                            Education Loan From Avanse At An Attractive Rate Of
                            Interest. <br /> Apply Now!
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
        <section className="py-lg-4 py-10 bg-white border-bottom">
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8  col-md-12 col-12">
                <div className="mb-8 text-center">
                  {/* section title start*/}
                  <h1 className="mb-1">Features &amp; Benefits of Loans</h1>
                  <p className="lead">
                    Here is an exhaustive list of all the fees and charges to be
                    paid for the education loan.
                  </p>
                </div>
                {/* /.section title start*/}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-sm-4 col-md-4 col-12">
                <div className="mb-7">
                  <div className="icon-shape bg-light icon-xl rounded-circle mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      fill="currentColor"
                      className="bi bi-card-text text-primary"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                      <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3>High valueable loans</h3>
                    <p>
                      Max loan up to Rs. 10 lakh for studies in any university
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-4 col-md-4 col-12">
                <div className="mb-7">
                  <div className="icon-shape bg-light icon-xl rounded-circle mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      fill="currentColor"
                      className="bi bi-arrow-clockwise text-primary"
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
                      Maximum tenure up to 10 years for loans up to Rs. 7.50
                      lakhs
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-4 col-md-4 col-12">
                <div className="mb-7">
                  <div className="icon-shape bg-light icon-xl rounded-circle mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      fill="currentColor"
                      className="bi bi-cup-straw text-primary"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.902.334a.5.5 0 0 1-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A.78.78 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 0 1 .303-.356l2.5-1a.5.5 0 0 1 .65.278zM9.768 4.607A13.991 13.991 0 0 0 8 4.5c-1.076 0-2.033.11-2.707.278A3.284 3.284 0 0 0 4.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085l.18-.808zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a5.514 5.514 0 0 1-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69 1.27 0 2.081-.441 2.438-.69.042-.029.09-.094.102-.215l.852-8.03a5.517 5.517 0 0 1-.435.127 8.88 8.88 0 0 1-.89.17zM4.467 4.884s.003.002.005.006l-.005-.006zm7.066 0-.005.006c.002-.004.005-.006.005-.006zM11.354 5a3.174 3.174 0 0 0-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222z" />
                    </svg>
                  </div>
                  <div>
                    <h3>100% Transparency</h3>
                    <p>
                      Donec accumsax tincidunt, ipsum nulla vulputro equcorper
                      nulla.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-4 col-md-4 col-12">
                <div className="mb-7">
                  <div className="icon-shape bg-light icon-xl rounded-circle mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      fill="currentColor"
                      className="bi bi-gear text-primary"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                      <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                    </svg>
                  </div>
                  <div>
                    <h3>Quick and Easy Disbursals</h3>
                    <p>
                      Nulla vulputate elit, non rh liberoe qutpat lnd orper
                      nulla.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-4 col-md-4 col-12">
                <div className="mb-7">
                  <div className="icon-shape bg-light icon-xl rounded-circle mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      fill="currentColor"
                      className="bi bi-lock text-primary"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                    </svg>
                  </div>
                  <div>
                    <h3>Secure your loan</h3>
                    <p>
                      Donec accumsax tincidunt, ipsum nulla vulputro equcorper
                      nulla.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-4 col-md-4 col-12">
                <div className="mb-7">
                  <div className="icon-shape bg-light icon-xl rounded-circle mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      fill="currentColor"
                      className="bi bi-percent text-primary"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                    </svg>
                  </div>
                  <div>
                    <h3>Attractive Rates of Interest</h3>
                    <p>
                      Nulla vulputate elit, non rhoncus liber oequtpa tlndorper
                      nulla.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-lg-2 py-10">
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8  col-md-12 col-12">
                <div className="mb-10 text-center">
                  <h1>About Education Loan</h1>
                  <p className="lead">
                    No matter how long the educational path is, ease it with
                    Borrow Education Loan. Borrow Bank Education Loan provides
                    you with quick and completely transparent loans to fuel your
                    future aspirations and dreams.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 mb-3">
                <div className="card border-0 smooth-shadow-sm">
                  <div className="card-body">
                    <h3 className="mb-3">Eligibility Criteria</h3>
                    <ul className="list-unstyled  mb-0">
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Resident Of country
                      </li>
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Required age of 16 and 35
                      </li>
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Your post completion of Certifiace
                      </li>
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Write your eligibility criteria
                      </li>
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Write your eligibility criteria
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 mb-3">
                <div className="card border-0 smooth-shadow-sm">
                  <div className="card-body">
                    <h3 className="mb-3">Documentes needs</h3>
                    <ul className="list-unstyled  mb-0">
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Passport
                      </li>
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Voter ID card
                      </li>
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Driving license
                      </li>
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        PAN card
                      </li>
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Bank account statement
                      </li>
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Latest electricity bill
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-4 col-12">
                <div className="card border-0 smooth-shadow-sm">
                  <div className="card-body">
                    <h3 className="mb-3">Download Forms</h3>
                    <ul className="list-unstyled  mb-0">
                      <li className="mb-1">
                        <a href="#!" className="text-inherit">
                          <i className="bi bi-file-pdf me-2 text-danger" />
                          Education Loan Application form
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="#!" className="text-inherit">
                          <i className="bi bi-file-pdf me-2 text-danger" />
                          Education Loan Agreement
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="#!" className="text-inherit">
                          <i className="bi bi-file-pdf me-2 text-danger" />
                          Income Certificate Issuing Authority
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="#!" className="text-inherit">
                          <i className="bi bi-file-pdf me-2 text-danger" />
                          Download Form Link
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="#!" className="text-inherit">
                          <i className="bi bi-file-pdf me-2 text-danger" />
                          Download Form Link
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" py-lg-4 py-10">
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8  col-md-12 col-12">
                <div className="mb-10 text-center">
                  {/* section title start*/}
                  <h1>Some of our Awesome Testimonials</h1>
                  <p>
                    {" "}
                    You won’t be the only one lorem ipsu mauris diam mattises.
                  </p>
                </div>
                {/* /.section title start*/}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 mb-6 mb-lg-0  ">
                <div className="card border-0 smooth-shadow-sm">
                  <div className="card-body p-5">
                    <p className="mb-0 fs-4 fst-italic fw-semi-bold">
                      {" "}
                      “I loved the customer service you guys provided me. That
                      was very nice and patient with questions I had. I would
                      really like definitely come back here”
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-4">
                  <div className="ms-3 lh-1">
                    <h4 className="mb-0 ">Donny J. Griffin</h4>
                    <span className="fs-6">Personal Loan</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 mb-6 mb-lg-0  ">
                <div className="card border-0 smooth-shadow-sm">
                  <div className="card-body p-5">
                    <p className="mb-0 fs-4 fst-italic fw-semi-bold">
                      {" "}
                      “I had a good experience with Insight Loan Services. I am
                      thankful to insight for the help you guys gave me. My loan
                      was easy and fast. thank you Insigtht”
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-4">
                  <div className="ms-3 lh-1">
                    <h4 className="mb-0 ">Mary O. Randle</h4>
                    <span className="fs-6">Education Loan</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 mb-6 mb-lg-0  ">
                <div className="card border-0 smooth-shadow-sm">
                  <div className="card-body p-5">
                    <p className="mb-0 fs-4 fst-italic fw-semi-bold">
                      {" "}
                      “We came out of their offices very happy with their
                      service. They treated us very kind. Definite will come
                      back. The waiting time was very appropriate.”
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-4">
                  <div className="ms-3 lh-1">
                    <h4 className="mb-0 ">Lindo E. Olson</h4>
                    <span className="fs-6">Car Loan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />

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
                    <h3> Collage/School Details </h3>

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
                          placeholder="Name of School"
                          className="form-control"
                        />
                        {errors.name && (
                          <div className="text-danger">{errors.name}</div>
                        )}
                      </div>
                    </div>
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
                          placeholder="Contact no"
                          className="form-control"
                        />
                        {errors.phone && (
                          <div className="text-danger">{errors.phone}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="name"
                        ></label>
                        <input
                          id="conract_person"
                          name="conract_person"
                          type="text"
                          value={formData.conract_person}
                          onChange={handleInputChange}
                          placeholder="Conract Person"
                          className="form-control"
                        />
                        {errors.conract_person && (
                          <div className="text-danger">
                            {errors.conract_person}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        >
                          WebSite link
                        </label>
                        <input
                          id="website_link"
                          name="website_link"
                          type="text"
                          value={formData.website_link}
                          onChange={handleInputChange}
                          placeholder="website link"
                          className="form-control"
                        />
                        {errors.website_link && (
                          <div className="text-danger">
                            {errors.website_link}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="message"
                        ></label>
                        <input
                          className="form-control"
                          id="sclclg_managed"
                          name="sclclg_managed"
                          value={formData.sclclg_managed}
                          onChange={handleInputChange}
                          placeholder="School Collage Managed by"

                        />
                        {errors.sclclg_managed && (
                          <div className="text-danger">{errors.sclclg_managed}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="message"
                        ></label>
                        <input
                          className="form-control"
                          id="business_address"
                          name="business_address"
                          value={formData.business_address}
                          onChange={handleInputChange}
                          placeholder="Trust Office Address"
                          defaultValue={""}
                        />
                        {errors.business_address && (
                          <div className="text-danger">
                            {errors.business_address}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Details of Trustee start  */}
                    {dividendArr.map((item, index) => (
                      <div className="" key={index}>
                        <h3>
                          {" "}
                          {index === 0 && "Details Of Trustee"}   <span>  <button
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
                        <div className="row">
                          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="text"
                              >
                                Name of Trustee
                              </label>
                              <input
                                id={`name_trust ${index}`}
                                name="name_trust"
                                type="text"
                                disabled={textDisabld}
                                value={item.name_trust}
                                onChange={(e) =>
                                  handleInputChange1(e, index)
                                }
                                placeholder="Name of Trustee"
                                className="form-control"
                              />
                              {/* {errors.name_trust && (
                          <div className="text-danger">
                            {errors.name_trust}
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
                                Designation
                              </label>
                              <input
                                id={`designation ${index}`}
                                name="designation"
                                type="text"
                                value={item.designation}
                                onChange={(e) =>
                                  handleInputChange1(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Designation"
                                className="form-control"
                              />
                              {/* {errors.designation && (
                          <div className="text-danger">
                            {errors.designation}
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
                                Contact No.
                              </label>
                              <input
                                id={`contact ${index}`}
                                name="contact"
                                type="txet"
                                disabled={textDisabld}
                                value={item.contact}
                                onChange={(e) =>
                                  handleInputChange1(e, index)
                                }
                                placeholder="Contact No."
                                className="form-control"
                              />
                              {/* {errors.contact && (
                          <div className="text-danger">
                            {errors.contact}
                          </div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="dt_email"
                              >
                                Email
                              </label>
                              <input
                                id={`dt_email ${index}`}
                                name="dt_email"
                                type="dt_email"
                                value={item.dt_email}
                                onChange={(e) =>
                                  handleInputChange1(e, index)
                                }
                                placeholder="Email"
                                className="form-control"
                              />
                              {/* {errors.dt_email && (
                          <div className="text-danger">{errors.dt_email}</div>
                        )} */}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Details of Trustee end  */}


                    {/* Details of Institutes start  */}
                    {dividendArr1.map((item, index) => (
                      <div className="" key={index}>
                        <h3>
                          {index === 0 && "Details Of Institutes"}   <span>  <button
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
                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="name"
                              >
                                Name Of Institutes
                              </label>
                              <input
                                id={`name_institue ${index}`}
                                name="name_institue"
                                type="text"
                                value={item.name_institue}
                                onChange={(e) =>
                                  handleInputChange2(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Name Of Institutes"
                                className="form-control"
                              />
                              {/* {errors.name_institue && (
                          <div className="text-danger">{errors.name_institue}</div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="name"
                              >
                                Course / Faculty
                              </label>
                              <input
                                id={`course_faculty ${index}`}
                                name="course_faculty"
                                type="text"
                                value={item.course_faculty}
                                onChange={(e) =>
                                  handleInputChange2(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="  Course and Faculty"
                                className="form-control"
                              />
                              {/* {errors.course_faculty && (
                          <div className="text-danger">{errors.course_faculty}</div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="phone"
                              >
                                Approved By
                              </label>
                              <input
                                id={`approved_by ${index}`}
                                name="approved_by"
                                type="text"
                                value={item.approved_by}
                                onChange={(e) =>
                                  handleInputChange2(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Approved By"
                                className="form-control"
                              />
                              {/* {errors.approved_by && (
                          <div className="text-danger">
                            {errors.approved_by}
                          </div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="name"
                              >
                                Seats
                              </label>
                              <input
                                id={`seats ${index}`}
                                name="seats"
                                type="text"
                                value={item.seats}
                                onChange={(e) =>
                                  handleInputChange2(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Seats"
                                className="form-control"
                              />
                              {/* {errors.seats && (
                          <div className="text-danger">{errors.seats}</div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="name"
                              >
                                Per year Fees
                              </label>
                              <input
                                id={`per_year_fess ${index}`}
                                name="per_year_fess"
                                type="text"
                                value={item.per_year_fess}
                                onChange={(e) =>
                                  handleInputChange2(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="  Per year Fees"
                                className="form-control"
                              />
                              {/* {errors.per_year_fess && (
                          <div className="text-danger">{errors.per_year_fess}</div>
                        )} */}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Details of Institutes End  */}


                    {/* Details Of Student start  */}
                    {dividendArr2.map((item, index) => (
                      <div className="" key={index}>
                        <h3>
                          {index === 0 && "Details Of Student"}   <span>  <button
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
                        <div className="row">
                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="name"
                              >
                                Name Of Student
                              </label>
                              <input
                                id={`name_of_inst ${index}`}
                                name="name_of_inst"
                                type="text"
                                value={item.name_of_inst}
                                onChange={(e) =>
                                  handleInputChange3(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Name Of Student"
                                className="form-control"
                              />
                              {/* {errors.name_of_inst && (
                          <div className="text-danger">{errors.name_of_inst}</div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="name"
                              >
                                Course / Faculty
                              </label>
                              <input
                                id={`course_faculty_one ${index}`}
                                name="course_faculty_one"
                                type="text"
                                value={item.course_faculty_one}
                                onChange={(e) =>
                                  handleInputChange3(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="  Course and Faculty"
                                className="form-control"
                              />
                              {/* {errors.course_faculty_one && (
                          <div className="text-danger">{errors.course_faculty_one}</div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="phone"
                              >
                                Approved By
                              </label>
                              <input
                                id={`approved_bye_one ${index}`}
                                name="approved_bye_one"
                                type="text"
                                value={item.approved_bye_one}
                                onChange={(e) =>
                                  handleInputChange3(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Approved By"
                                className="form-control"
                              />
                              {/* {errors.approved_bye_one && (
                          <div className="text-danger">
                            {errors.approved_bye_one}
                          </div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="name"
                              >
                                Seats
                              </label>
                              <input
                                id={`seats_one ${index}`}
                                name="seats_one"
                                type="text"
                                value={item.seats_one}
                                onChange={(e) =>
                                  handleInputChange3(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Seats"
                                className="form-control"
                              />
                              {/* {errors.seats_one && (
                          <div className="text-danger">{errors.seats_one}</div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="name"
                              >
                                Per year Fees
                              </label>
                              <input
                                id={`per_year_fee_one ${index}`}
                                name="per_year_fee_one"
                                type="text"
                                value={item.per_year_fee_one}
                                onChange={(e) =>
                                  handleInputChange3(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="  Per year Fees"
                                className="form-control"
                              />
                              {/* {errors.per_year_fee_one && (
                          <div className="text-danger">{errors.per_year_fee_one}</div>
                        )} */}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Details Of Student End  */}

                    {/* Details Of Student  Hotel start   */}
                    {dividendArr3.map((item, index) => (
                      <div className="" key={index}>
                        <h3>
                          {index === 0 && "Details Of Student  Hotel"}   <span>  <button
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
                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="name"
                              >
                                Name Of Institutes
                              </label>
                              <input
                                id={`institutes_host ${index}`}
                                name="institutes_host"
                                type="text"
                                value={item.institutes_host}
                                onChange={(e) =>
                                  handleInputChange4(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Name Of Institutes"
                                className="form-control"
                              />
                              {/* {errors.institutes_host && (
                          <div className="text-danger">{errors.institutes_host}</div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="name"
                              >
                                Course / Faculty
                              </label>
                              <input
                                id={`course_faculty_two ${index}`}
                                name="course_faculty_two"
                                type="text"
                                value={item.course_faculty_two}
                                onChange={(e) =>
                                  handleInputChange4(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="  Course and Faculty"
                                className="form-control"
                              />
                              {/* {errors.course_faculty_two && (
                          <div className="text-danger">{errors.course_faculty_two}</div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="phone"
                              >
                                Approved By
                              </label>
                              <input
                                id={`approved_two ${index}`}
                                name="approved_two"
                                type="text"
                                value={item.approved_two}
                                onChange={(e) =>
                                  handleInputChange4(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Approved By"
                                className="form-control"
                              />
                              {/* {errors.approved_two && (
                          <div className="text-danger">
                            {errors.approved_two}
                          </div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="name"
                              >
                                Seats
                              </label>
                              <input
                                id={`seats_two ${index}`}
                                name="seats_two"
                                type="text"
                                value={item.seats_two}
                                onChange={(e) =>
                                  handleInputChange4(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="Seats"
                                className="form-control"
                              />
                              {/* {errors.seats_two && (
                          <div className="text-danger">{errors.seats_two}</div>
                        )} */}
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="mb-3">
                              <label
                                className="sr-only form-label mb-0"
                                htmlFor="name"
                              >
                                Per year Fees
                              </label>
                              <input
                                id={`per_year_fees_hostel ${index}`}
                                name="per_year_fees_hostel"
                                type="text"
                                value={item.per_year_fees_hostel}
                                onChange={(e) =>
                                  handleInputChange4(e, index)
                                }
                                disabled={textDisabld}
                                placeholder="  Per year Fees"
                                className="form-control"
                              />
                              {/* {errors.per_year_fees_hostel && (
                          <div className="text-danger">{errors.per_year_fees_hostel}</div>
                        )} */}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Details Of Student  Hotel End    */}

                    <h3>Annual Fees Collection </h3>

                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="name"
                        >
                          School Collage
                        </label>
                        <input
                          id="school_clg"
                          name="school_clg"
                          type="text"
                          value={formData.school_clg}
                          onChange={handleInputChange}
                          placeholder="Name Of Institutes"
                          className="form-control"
                        />
                        {errors.school_clg && (
                          <div className="text-danger">{errors.school_clg}</div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="name"
                        >
                          Transport
                        </label>
                        <input
                          id="transport"
                          name="transport"
                          type="text"
                          value={formData.transport}
                          onChange={handleInputChange}
                          placeholder=" Transport"
                          className="form-control"
                        />
                        {errors.transport && (
                          <div className="text-danger">{errors.transport}</div>
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
                          Hostel
                        </label>
                        <input
                          id="hostel"
                          name="hostel"
                          type="text"
                          value={formData.hostel}
                          onChange={handleInputChange}
                          placeholder="Hostel "
                          className="form-control"
                        />
                        {errors.hostel && (
                          <div className="text-danger">
                            {errors.hostel}
                          </div>
                        )}
                      </div>
                    </div>


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

export default StudentLoan;
