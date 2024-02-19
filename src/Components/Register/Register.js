import React, { useEffect, useState } from "react";
import basestyle from "../Base.module.css";
import registerstyle from "./Register.module.css";
import axios from "axios";

import { useNavigate, NavLink } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [user, setUserDetails] = useState({
    name: "",
    reg: "",
    mail: "",
    password: "",
    gender: "",
    cpassword: "", // Added missing field
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
    }
    if (!values.reg) {
      error.reg = "Registration No is required";
    }
    if (!values.mail) {
      error.mail = "Email is required";
    } else if (!regex.test(values.mail)) {
      error.mail = "This is not a valid email format!";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      error.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.cpassword) {
      error.cpassword = "Confirm Password is required";
    } else if (values.cpassword !== values.password) {
      error.cpassword = "Confirm password and password should be same";
    }
    return error;
  };


  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(user);
  //     axios.post("/add-user", user,  {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       }
  //     }).then((res) => {
  //       alert(res.data.message);
  //       navigate("/login", { replace: true });
  //     });
  //   }
  // }, [formErrors]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    // setFormErrors(validateForm(user)); // Validate form
    try {
      console.log(user);
      const response = await axios.post('/add-user/', user, {headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
});
      console.log(response.data);
      // Handle success response here
    } catch (error) {
      console.error('Error:', error.message);
      // Handle error here
    }
  };



  return (
    <>
      <div className={registerstyle.register}>
        <form  onSubmit={handleSubmit}>
          <h1>Create your account</h1>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="First Name"
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
          <p className={basestyle.error}>{formErrors.rnumber}</p>
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
          <p className={basestyle.error}>{formErrors.email}</p>
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
