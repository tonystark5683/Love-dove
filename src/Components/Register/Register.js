import React, { useEffect, useState } from "react";
import basestyle from "../Base.module.css";
import registerstyle from "./Register.module.css";
import axios from "axios";
import qs from "qs";
import { useNavigate, NavLink } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    name: "",
    reg: "",
    mail: "",
    password: "",
    cpassword: "",
    gender: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      error.name = "First Name is required";
      setFormErrors(true);
    }
    if (!values.reg) {
      error.reg = "Registration No is required";
      setFormErrors(true);
    }
    if (!values.mail) {
      error.mail = "Email is required";
      setFormErrors(true);
    } else if (!regex.test(values.mail)) {
      error.mail = "This is not a valid email format!";
      setFormErrors(true);
    }
    if (!values.password) {
      error.password = "Password is required";
      setFormErrors(true);
    } else if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
      setFormErrors(true);
    } else if (values.password.length > 10) {
      error.password = "Password cannot exceed more than 10 characters";
      setFormErrors(true);
    }
    if (!values.cpassword) {
      error.cpassword = "Confirm Password is required";
      setFormErrors(true);
    } else if (values.cpassword !== values.password) {
      error.cpassword = "Confirm password and password should be same";
      setFormErrors(true);
    }
    return error;
  };


  const handleSubmit = async (event) => {
    setFormErrors(false);
    event.preventDefault();
    validateForm(user);
    if (!formErrors) {
      try {
          console.log(user);
          axios.post("/add-user/", qs.stringify(user), {headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
  }).then((res) => {
            alert(res.data.message);
            navigate("/login", { replace: true });
          });
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <>
      <div className={registerstyle.register}>
        <form onSubmit={handleSubmit}>
          <h1>Create your account</h1>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={changeHandler}
            value={user.name}
          />
          <p className={basestyle.error}>{formErrors.name}</p>
          <input
            type="text"
            name="reg"
            id="reg"
            placeholder="Registration No"
            onChange={changeHandler}
            value={user.reg}
          />
          <p className={basestyle.error}>{formErrors.reg}</p>
          <select
            name="gender"
            id="gender"
            onChange={changeHandler}
            value={user.gender}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input
            type="email"
            name="mail"
            id="mail"
            placeholder="Email"
            onChange={changeHandler}
            value={user.mail}
          />
          <p className={basestyle.error}>{formErrors.mail}</p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={changeHandler}
            value={user.password}
          />
          <p className={basestyle.error}>{formErrors.password}</p>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={user.cpassword}
          />
          <p className={basestyle.error}>{formErrors.cpassword}</p>
          <button className={basestyle.button_common} type="submit">
            Register
          </button>
        </form>
        <NavLink to="/login">Already registered? Login</NavLink>
      </div>
    </>
  );
};
export default Register;
