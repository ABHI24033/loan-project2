import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "./Navbar.css";

// import "../node_modules/jquery/dist/jquery.min.js";
// import "../../node_modules/bootstrap/dist/js/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import PARV from "../assets/images/brand/logo/PARV.jpg";
import axios from "axios";
import { backendUrl } from "../env.js";


const Navbar = () => {

  const navigate = useNavigate();
  const handlelogout = async () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  }

  useEffect(() => {
    const FetchUserDetails = async () => {
      const userID = localStorage.getItem("userID");
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn) {
        try {
          // const res = await axios.get(`https://us-central1-joyomoney-a8630.cloudfunctions.net/joyMoney/api/v1/getuserbyid/${userID}`)
          const res = await axios.get(`${backendUrl}/getuserbyid/${userID}`)
          console.log("Responce",res);
        } catch (error) {
          console.log("error from fetch userDetails: ",error);
        }

      }
    }
    FetchUserDetails();
  }, [])

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            <img src={PARV} className="logo-img" />
          </Link>
          <button className="navbar-toggler collapsed toggler_button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>
              <li className="nav-item dropdown">

                <Link className="nav-link " to="/loan" id="navbarDropdownMenuLink" role="but" data-bs-toggle="dropdown" aria-expanded="false" activeclass="active">
                  Loans <FontAwesomeIcon icon={faChevronDown} />
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="/homeloan">Home Loan</a></li>
                  <li><a className="dropdown-item" href="/carloan">Car Loan</a></li>
                  <li><a className="dropdown-item" href="/businessloan">Business Loan</a></li>
                  <li><a className="dropdown-item" href="/personalloan">Personal Loan</a></li>
                  <li><a className="dropdown-item" href="/professionalloan">Professional Loan</a></li>
                  <li><a className="dropdown-item" href="/goldloan1"> Gold Loan</a></li>
                  <li><a className="dropdown-item" href="/studentloan">School/College Loan</a></li>


                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/gallery">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">Blog</a>

              </li>
              <li className="nav-item">
                <a className="nav-link" href="/career">Career</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
              {(localStorage.getItem("userID") === null) ?
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/signup">Sign-up</a>
                  </li>
                </>
                :
                <>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="/sidebar">Dashboard</a> */}
                    <a className="nav-link" href="/homeservices">Dashboard</a>
                  </li>
                  <li className="nav-item">
                    <button onClick={handlelogout} className="nav-link">Logout</button>
                  </li>
                </>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

