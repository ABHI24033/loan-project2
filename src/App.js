import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/css/theme.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./assets/fonts/flat-font-icons/css/flaticon.css";
import "./assets/fonts/fontello-icons/fontello.css";
import "./assets/libs/bootstrap-icons/font/bootstrap-icons.css";
import "./assets/libs/jquery-ui/dist/themes/base/jquery-ui.min.css";
import "./assets/libs/magnific-popup/dist/magnific-popup.css";
import "./assets/libs/nouislider/dist/nouislider.min.css";
import "./assets/libs/tiny-slider/dist/tiny-slider.css";
import Home from "./Components/Modules/Home";
import About from "./Components/Modules/About";
import Contact from "./Components/Modules/Contact";
import Blog from "./Components/Modules/Blog";
import Loan from "./Components/Modules/Loan";
import StudentLoan from "./Components/Modules/StudentLoan";
import HomeLoan from "./Components/Modules/HomeLoan";
import BusinessLoan from "./Components/Modules/BusinessLoan";
import PersonalLoan from "./Components/Modules/PersonalLoan";
import CarLoan from "./Components/Modules/CarLoan";
import Footer from "./Common/Footer";
import EducationLoan from "./Components/Modules/EducationLoan";
import Navbar from "./Common/Navbar";
import Gallery from "./Components/Modules/Gallery";
import Career from "./Components/Modules/Career";
import Login from "./Components/Modules/Login";
import Signup from "./Components/Modules/Signup";
import Admin from "./Components/Modules/Admin";
import Agent from "./Components/Modules/Agent";
import Termcondation from "./Components/Modules/Termcondation";
import UserDashbord from "./Components/Modules/UserDashbord";
import Email from "./Components/Modules/Admin/Email";
import History from "./Components/Modules/Admin/History";
import PendingWork from "./Components/Modules/Admin/PendingWork";
import UserData from "./Components/Modules/Admin/UserData";
//import Intrestrate from "./Components/Modules/Admin/Intrestrate";
import Testmonial from "./Components/Modules/Admin/Testmonial";
import GalleryImages from "./Components/Modules/Admin/GalleryImages";
import Sendblog from "./Components/Modules/Admin/Sendblog";
import BankForm from "./Components/Modules/UserDashbord/BankForm";
import ProfileAdmin from "./Components/Modules/Admin/ProfileAdmin";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfessionalLoan from "./Components/Modules/ProfessionalLoan";
import GoldLoan1 from "./Components/Modules/GoldLoan1";

import Buttone from "./Components/Modules/Buttone";
import UserDashboard from "./Components/Modules/UserDashbord";
import Status from "./Components/Modules/UserDashbord/Status";
import SupportForm from "./Components/Modules/UserDashbord/SupportForm";
import Sidebar from "./Components/Modules/UserDashbord/Sidebar";
import HomeServices from "./Components/Modules/UserDashbord/HomeServices";
import FormDetailTable from "./Components/Modules/UserDashbord/FormDetailTable";
import FormModel from "./Components/Modules/UserDashbord/FormModel";
import Dashboard from "./Components/Modules/LoggedUserDashboard/Dashboard";
import Connectors from "./Components/Modules/Admin/Connectors";
import Employess from "./Components/Modules/Admin/Employess";
import AddEmoloyee from "./Components/Modules/Admin/AddEmoloyee";

function App() {
  console.log("userloggedin" + " = " + localStorage.getItem("userID"))

  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/homeloan" element={localStorage.getItem("userID") !== null ? <HomeLoan /> : <Login />} />
        <Route path="/businessloan" element={localStorage.getItem("userID") !== null ? <BusinessLoan /> : <Login />} />
        <Route path="/carloan" element={localStorage.getItem("userID") !== null ? <CarLoan /> : <Login />} />
        <Route path="/educationloan" element={localStorage.getItem("userID") !== null ? <EducationLoan /> : <Login />} />
        <Route path="/personalloan" element={localStorage.getItem("userID") !== null ? <PersonalLoan /> : <Login />} />
        <Route path="/studentloan" element={localStorage.getItem("userID") !== null ? <StudentLoan /> : <Login />} />
        <Route path="/professionalloan" element={localStorage.getItem("userID") !== null ? <ProfessionalLoan /> : <Login />} />
        <Route path="/goldloan1" element={localStorage.getItem("userID") !== null ? <GoldLoan1 /> : <Login />} />
        <Route path="/career" element={<Career />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gallery" element={localStorage.getItem("userID") !== null ? <Gallery /> : <Login />} />
        <Route path="/userdashbord" element={localStorage.getItem("userID") !== null ? <UserDashboard /> : <Login />} />
        <Route path="/admin" element={localStorage.getItem("userID") !== null ? <Admin /> : <Login />} />
        <Route path="/agent" element={localStorage.getItem("userID") !== null ? <Agent /> : <Login />} />

        <Route path="/Termcondation" element={<Termcondation />} />

        {/* AdminRoutes */}
        <Route path="/adminEmail" element={localStorage.getItem("userID") !== null ? <Email /> : <Login />} />
        <Route path="/adminHistor" element={localStorage.getItem("userID") !== null ? <History /> : <Login />} />
        <Route path="/adminPending" element={localStorage.getItem("userID") !== null ? <PendingWork /> : <Login />} />
        <Route path="/adminUserData" element={localStorage.getItem("userID") !== null ? <UserData /> : <Login />} />
        {/* <Route path="/intrestrate" element={localStorage.getItem("userID")!==null ? <Intrestrate /> : <Login />} /> */}
        <Route path="/testmonial" element={localStorage.getItem("userID") !== null ? <Testmonial /> : <Login />} />
        <Route path="/galleryimages" element={localStorage.getItem("userID") !== null ? <GalleryImages /> : <Login />} />
        <Route path="/bankform" element={localStorage.getItem("userID") !== null ? <BankForm /> : <Login />} />
        <Route path="/status" element={localStorage.getItem("userID") !== null ? <Status /> : <Login />} />
        <Route path="/support" element={localStorage.getItem("userID") !== null ? <SupportForm /> : <Login />} />

        <Route path="sidebar" element={localStorage.getItem("userID") !== null ? <Sidebar /> : <Login />} />
          {/* <Route path="homeservices" element={localStorage.getItem("userID") !== null ? <HomeServices /> : <Login />} /> */}
          {/* <Route path="homeservices" element={<HomeServices /> } /> */}
        {/* </Route> */}

        <Route path="/homeservices" element={localStorage.getItem("userID") !== null ? <HomeServices /> : <Login />} />
        <Route path="/connectors" element={localStorage.getItem("userID") !== null ? <Connectors /> : <Login />} />
        <Route path="/employees" element={localStorage.getItem("userID") !== null ? <Employess /> : <Login />} />
        <Route path="/add_employee" element={localStorage.getItem("userID") !== null ? <AddEmoloyee /> : <Login />} />
        <Route path="/sendblog" element={localStorage.getItem("userID") !== null ? <Sendblog /> : <Login />} />
        <Route path="/profile" element={localStorage.getItem("userID") !== null ? <ProfileAdmin /> : <Login />} />


        <Route path="/dashboard/:id" element={localStorage.getItem("userID") !== null ? <Dashboard /> : <Login />} />

        <Route path="/homeservices/formTable/:endpoint" element={localStorage.getItem("userID") !== null ? <FormDetailTable /> : <Login />} />


        <Route path="/formModel/:endpoint/:formid" element={<FormModel></FormModel>} />




        <Route path="/button" element={<Buttone />} />




      </Routes>
      <Footer />
    </>
  );
}

export default App;
