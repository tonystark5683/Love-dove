import React, { useState, useEffect } from "react";
import basestyle from "../Base.module.css";
import loginstyle from "./Login.module.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import qs from 'qs';

const Login = ({ setUserState }) => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    reg: "",
    password: "",
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
    if (!values.reg) {
      error.reg = "Registration Number is required";
      setFormErrors(true)
    } 
    // else if (!regex.test(values.reg)) {
    //   error.reg = "Please enter a valid registration address";
    //   setFormErrors(true)
    // }
    if (!values.password) {
      error.password = "Password is required";
      setFormErrors(true)
    }
  };


  const handleSubmit = async (event) => {
    setFormErrors(false);
    event.preventDefault();
    validateForm(user);
    if (!formErrors) {
      try {
          console.log(user);
          axios.post("/login/", qs.stringify(user), {headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
  }).then((res) => {
            console.log(res);
            alert(res.data.message);
            localStorage.setItem('current_reg', res.data.reg);
            localStorage.setItem('current_name',  res.data.name);
            if(res.status === 200){
              navigate("/", { replace: true });
            } else if (res.status === 401){
              console.error("Error: ", res.statusText);
            }
            else{
              console.error("Error: ", res.statusText);
            }
          });
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <div className={loginstyle.login}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="text"
          name="reg"
          id="reg"
          placeholder="Registration Number"
          onChange={changeHandler}
          value={user.reg}
        />
        <p className={basestyle.error}>{formErrors.reg}</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={changeHandler}
          value={user.password}
        />
        <p className={basestyle.error}>{formErrors.password}</p>
        <button className={basestyle.button_common} type="submit">
          Login
        </button>
      </form>
      <NavLink to="/signup">Not yet registered? Register Now</NavLink>
    </div>
  );
};
export default Login;
