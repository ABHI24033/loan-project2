import React, { useState } from "react";
import Featureimg from "../../assets/images/background/lp-feature-img.jpg";
import { toast } from "react-toastify";
import axios from "axios";
const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation
    let newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone is required";
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
    }

    // If there are errors, update the state and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Perform your API call here for form submission
      const response = await axios.post("http://15.207.195.184:8000/api/v1/careers", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        message: formData.message
      })
      console.log(response)
      if (response.status) {
        // Handle success scenario here
        toast(response.data.message, "success");
        console.log("Form submitted successfully:", response);
      } else {
        toast("error", "error");
        // Handle API error cases
        console.error("Submission failed:", response.error);
      }
    } catch (error) {
      // Handle network or unforeseen errors
      console.error("Error:", error);
    }

  };

  // Helper functions for validation
  const isValidEmail = (email) => {
    // You can add more complex email validation logic if needed
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone) => {
    // You can add more complex phone number validation logic if needed
    return /^\d{10}$/.test(phone);
  };

  return (
    <>
      <section className="pt-18 pb-10 galary-header-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="bg-white p-5 rounded-top-md">
                <div className="row align-items-center">
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                    <h1 className="mb-0">Career Upto Here</h1>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="text-md-end mt-3 mt-md-0">
                      <a href="/contact" style={{ backgroundColor: "#0c0c37" }} className="btn text-white">
                        How To Apply
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-lg-8 py-10 ">
        <div className="container">
          <h1>Job :</h1>{" "}
          <span className=" ml-4">
            As a dynamic financial service provider, our company is committed to
            fostering a culture of excellence, innovation, and
            client-centricity. Joining our team means being part of an
            organization that values integrity, professionalism, and a passion
            for financial well-being. We offer a collaborative and
            growth-oriented work environment where each team member contributes
            to the success of our clients and the company as a whole. Whether
            you're an experienced professional or someone looking to embark on a
            fulfilling career in the financial sector, our company provides
            opportunities for learning, career development, and making a
            meaningful impact in the lives of those we serve. Come be a part of
            our dedicated team as we navigate the complexities of the financial
            landscape together, shaping a future of prosperity for both our
            clients and our employees.
          </span>
          <h1>Become A Partner:</h1> Becoming a partner with our esteemed
          financial service provider company opens the door to a collaborative
          journey towards mutual success. We value strategic alliances that
          bring together expertise, innovation, and shared commitment to client
          satisfaction. As a partner, you'll have access to a suite of
          cutting-edge financial solutions, collaborative resources, and a
          network of professionals dedicated to excellence. Whether you're an
          established institution, an independent financial advisor, or an
          aspiring entrepreneur, we invite you to join hands with us in shaping
          the future of financial services. Together, we can leverage our
          collective strengths to provide unparalleled value to clients and
          build lasting relationships. Partner with us and embark on a
          transformative.
        </div>
      </section>
      <section className="py-lg-2 py-4 ">
        <div className="container">
          <div className="row ">
            <div className="col-xl-6 col-lg-5 col-md-6 col-sm-12 col-12">
              <div className="mb-6 mb-lg-0 ">
                {/* section title start*/}
                <h1 className=" mb-3"> </h1>
                {/* <p className=" lead">
                  Embarking on a career journey often involves making important
                  financial decisions, and one crucial aspect is understanding
                  how loans can play a role in shaping your professional path.
                </p> */}
                {/* <p className=" mb-4">
                  Aenean ornare lectus nunc, elementum fermentum erat mattis id.
                  Donec ullamcorper magna non orci scelerisque consectetur.{" "}
                </p> */}
                <h3 className="">Choosing the Right Career Path:</h3>
                <div className="none">
                  <p>Financing Your Education:</p>
                  <p>Loans for Career Advancement</p>
                  <p>Managing Debt Responsibly</p>
                </div>
                <h3 className="">Choosing the Right Career Path:</h3>
                <div className="none">
                  <p>1. Fill the online form. Apply Now</p>
                  <p>2. Fill in the mandatory details, &amp; click Submit</p>
                  <p>3. Our representative will get in touch with you</p>
                </div>
              </div>
              {/* /.section title start*/}
            </div>

            <div className="offset-xl-1 col-lg-5 offset-lg-2 col-lg-5 col-md-6 col-sm-12 col-12">
              <div className="card card-body border-0">
                <h3 className="mb-3">Make a Our Carrer </h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="mb-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <label className="form-label sr-only" htmlFor="name">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required=""
                      />
                      {errors.name && (
                        <p className="text-danger">{errors.name}</p>
                      )}
                    </div>

                    <div className="mb-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <label className="form-label sr-only" htmlFor="email">
                        E-Mail
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="E-mail"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required=""
                      />
                      {errors.email && (
                        <p className="text-danger">{errors.email}</p>
                      )}
                    </div>

                    <div className="mb-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <label className="form-label sr-only" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                        required=""
                      />
                      {errors.phone && (
                        <p className="text-danger">{errors.phone}</p>
                      )}
                    </div>

                    <div className="mb-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <label className="form-label sr-only" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        value={formData.password}
                        onChange={handleChange}
                        required=""
                      />
                      {errors.password && (
                        <p className="text-danger">{errors.password}</p>
                      )}
                    </div>

                    <div className="mb-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="message"
                        ></label>
                        <textarea
                          className="form-control"
                          id="message"
                          rows={2}
                          name="message"
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                        {errors.message && (
                          <p className="text-danger">{errors.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="d-grid">
                        <button type="submit" style={{ backgroundColor: "#0c0c37" }} className="btn text-white">
                          Send A Request
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
