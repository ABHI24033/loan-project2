import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./sidebar.css";
import axios from "axios";
import { backendUrl } from "../../../env";
// import About from "../About";

const Sidebar = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // const userId=localStorage.getItem("userID")
  // useEffect(()=>{
  // const fetchUserById=async()=>{
  //   try {
  //     const res=await axios.get(`${backendUrl}/getuserbyid/${userId}`)
  //     console.log("responce",res);
  //   } catch (error) {
  //     console.log("error",error);
  //     throw new Error(error)
  //   }
  // }
  // fetchUserById();

  const user_type = localStorage.getItem("user_type");
  //  console.log( user_type );


  // },[]);

  const handleToggle = () => {
    setToggle(!toggle);
  };


  const handleItemClick = (path) => {
    // Close the drawer when an item is clicked
    setToggle(!toggle);
    // Navigate to the corresponding route
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userID");
  }


  return (
    <div className="container-fluid mt-15">
      <button className="toggle-button" onClick={handleToggle}>
        <i className={`bi image-sidebar ${toggle ? 'bi-arrow-left' : 'bi-arrow-right'} fs-4`} />
      </button>
      <div className="row mt-4">
        {toggle && (
          <div className="col-md-3 col-12 bg-white fixed">
            <div className="bg-white px-2">
              <div className="mt-3">
                {/* <i className="bi bi-bootstrap-fill fs-4 me-3"></i> */}
                <i className="fa-solid fa-indian-rupee-sign fs-3 me-3"></i>
                <span className="brand-name fs-4">LoanWebsite</span>
              </div>
              <hr className="text-dark" />
              <div className="list-group list-group-flush">

                {/* Admin =========================================*/}
                {
                  user_type === "Admin" ?
                    <>
                      <Link
                        to="/homeservices"
                        // to="/sidebar/homeservices"
                        className={`list-group-item list-group-item-action my-2 ${pathname === "/homeservices" ? "active" : null}`}
                        onClick={() => handleItemClick("/homeservices")}
                      >
                        <div className="list-item-hover">
                          <i className="fa-solid fa-house fs-4 me-2"></i>
                          <span className="fs-5 fw-bold fs-3 text-bold ">Home</span>
                        </div>
                      </Link>

                      <Link
                        to="/loans"
                        // to="/sidebar/homeservices"
                        className={`list-group-item list-group-item-action my-2 ${pathname === "/loans" ? "active" : null}`}
                        onClick={() => handleItemClick("/loans")}
                      >
                        <div className="list-item-hover">
                          <i class="fa-solid fa-money-check-dollar fs-4 me-2"></i>
                          <span className="fs-5 fw-bold fs-3 text-bold ">Loans</span>
                        </div>
                      </Link>

                      <Link
                        to="/profile"
                        className={`list-group-item list-group-item-action my-2 ${pathname === "/profile" ? "active" : null}`}
                        onClick={() => handleItemClick("/profile")}
                      >
                        <div className="list-item-hover">
                          <i className="fa-solid fa-address-card fs-4 me-2"></i>
                          <span className="fs-5 fw-bold fs-3 text-bold">Profile</span>
                        </div>
                      </Link>

                      <Link
                        to="/connectors"
                        className={`list-group-item list-group-item-action my-2 ${pathname === "/connectors" ? "active" : null}`}
                        onClick={() => handleItemClick("/connectors")}
                      >
                        <div className="list-item-hover">
                          {/* <i className="fa-solid fa-message fs-4 me-2"></i> */}
                          <i class="fa-solid fa-circle-nodes fs-4 me-2"></i>
                          <span className="fs-5 fw-bold fs-3 text-bold">Connectors</span>
                        </div>
                      </Link>


                      <Link
                        to="/employees"
                        className={`list-group-item list-group-item-action my-2 ${pathname === "/employees" ? "active" : null}`}
                        onClick={() => handleItemClick("/employees")}
                      >
                        <div className="list-item-hover">
                          {/* <i className="fa-solid fa-message fs-4 me-2"></i> */}
                          <i class="fa-solid fa-users-rectangle fs-4 me-2"></i>
                          <span className="fs-5 fw-bold fs-3 text-bold">Employees</span>
                        </div>
                      </Link>

                      <Link
                        to="/add_employee"
                        className={`list-group-item list-group-item-action my-2 ${pathname === "/add_employee" ? "active" : null}`}
                        onClick={() => handleItemClick("/add_employee")}
                      >
                        <div className="list-item-hover">
                          {/* <i className="fa-solid fa-message fs-4 me-2"></i> */}
                          <i class="fa-solid fa-user-plus fs-4 me-2"></i>
                          <span className="fs-5 fw-bold fs-3 text-bold">Add Employee</span>
                        </div>
                      </Link>

                      <Link
                        to="/testmonial"
                        className={`list-group-item list-group-item-action my-2 ${pathname === "/testmonial" ? "active" : null}`}
                        onClick={() => handleItemClick("/testmonial")}
                      >
                        <div className="list-item-hover">
                          {/* <i className="bi bi-power fs-5 me-2"></i> */}
                          <i className="fa-solid fa-message fs-4 me-2"></i>
                          <span className="fs-5 fw-bold fs-3 text-bold">Testimonial</span>
                        </div>
                      </Link>

                      <Link
                        to="/sendblog"
                        className={`list-group-item list-group-item-action my-2 ${pathname === "/sendblog" ? "active" : null}`}
                        onClick={() => handleItemClick("/testmonial")}
                      >
                        <div className="list-item-hover">
                          {/* <i className="bi bi-power fs-5 me-2"></i> */}
                          <i className="fa-brands fa-blogger-b fs-4 me-2"></i>
                          <span className="fs-5 fw-bold fs-3 text-bold">Send blog</span>
                        </div>
                      </Link>

                      <Link
                        to="/galleryimages"
                        className={`list-group-item list-group-item-action my-2 ${pathname === "/galleryimages" ? "active" : null}`}
                        onClick={() => handleItemClick("/galleryimages")}
                      >
                        <div className="list-item-hover">
                          {/* <i className="bi bi-power fs-5 me-2"></i> */}
                          <i className="fa-solid fa-image fs-4 me-2"></i>
                          <span className="fs-5 fw-bold fs-3 text-bold">Gallery Images</span>
                        </div>
                      </Link>

                      <Link
                        to="/login"
                        className={`list-group-item list-group-item-action my-2 ${pathname === "/login" ? "active" : null}`}
                        onClick={handleLogout}
                      >
                        <div className="list-item-hover">
                          <i className="bi bi-power fs-5 me-2"></i>
                          <span className="fs-5 fw-bold fs-3 text-bold">Logout</span>
                        </div>
                      </Link>

                    </> : null
                }
                {/* Connector================================================= */}
                {
                  user_type === "Connector" ?
                    <>
                      <Link
                        to="/homeservices"
                        className={`list-group-item list-group-item-action my-2 ${pathname === "/homeservices" ? "active" : null}`}
                        onClick={() => handleItemClick("/homeservices")}
                      >
                        <div className="list-item-hover">
                          <i className="fa-solid fa-house fs-4 me-2"></i>
                          <span className="fs-5 fw-bold fs-3 text-bold ">Home</span>
                        </div>
                      </Link>

                      <Link
                        to="/status"
                        className={`list-group-item list-group-item-action my-2 ${pathname === "/status" ? "active" : null}`}
                        onClick={() => handleItemClick("/status")}
                      >
                        <div className="list-item-hover">
                          <i className="bi bi-table fs-4 me-2"></i>
                          <span className="fs-5 fw-bold fs-3 text-bold">Status</span>
                        </div>
                      </Link>

                      <Link
                        to="/profile"
                        className={`list-group-item list-group-item-action my-2 ${pathname === "/profile" ? "active" : null}`}
                        onClick={() => handleItemClick("/profile")}
                      >
                        <div className="list-item-hover">
                          {/* <i className="bi bi-table fs-5 me-2"></i> */}
                          <i className="fa-solid fa-address-card fs-4 me-2"></i>
                          <span className="fs-5 fw-bold fs-3 text-bold">Profile</span>
                        </div>
                      </Link>

                      <Link
                        to="/adminEmail"
                        className={`list-group-item list-group-item-action my-2 ${pathname === "/adminEmail" ? "active" : null}`}
                        onClick={() => handleItemClick("/adminEmail")}
                      >
                        <div className="list-item-hover">
                          <i className="fa-solid fa-envelope fs-4 me-2"></i>
                          <span className="fs-5 fw-bold fs-3 text-bold">Send Mail</span>
                        </div>
                      </Link>

                      <Link
                        to="/login"
                        className={`list-group-item list-group-item-action my-2 ${pathname === "/login" ? "active" : null}`}
                        onClick={handleLogout}
                      >
                        <div className="list-item-hover">
                          <i className="bi bi-power fs-5 me-2"></i>
                          <span className="fs-5 fw-bold fs-3 text-bold">Logout</span>
                        </div>
                      </Link>


                    </> : null


                }
                {
                  user_type === "Employee" ?
                    <>
                      <Link
                        to="/login"
                        className={`list-group-item list-group-item-action my-2 ${pathname === "/login" ? "active" : null}`}
                        onClick={handleLogout}
                      >
                        <div className="list-item-hover">
                          <i className="bi bi-power fs-5 me-2"></i>
                          <span className="fs-5 fw-bold fs-3 text-bold">Logout</span>
                        </div>
                      </Link>
                    </> : null
                }

              </div>
            </div>
          </div>
        )}

        <div className={`col-${toggle ? '9' : '12'}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
