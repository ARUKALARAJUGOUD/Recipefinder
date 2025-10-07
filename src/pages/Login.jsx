// import React from 'react'

// const Login = () => {
//   return (
//     <div>
//       <h1>This is log in page </h1>
//     </div>
//   )
// }

// export default Login


import React, { useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const Navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};

    // Name validation
    if (!form.name.trim()) {
      errs.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(form.name)) {
      errs.name = "Name can only contain letters";
    }

    // Email validation
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(form.email)
    ) {
      errs.email = "Email is invalid";
    }

    // Mobile validation
    if (!form.mobile.trim()) {
      errs.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(form.mobile)) {
      errs.mobile = "Mobile number must be 10 digits";
    }

    // Password validation
    if (!form.password.trim()) {
      errs.password = "Password is required";
    } else if (form.password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }

    // Address validation (optional but limit max length)
    if (form.address.length > 100) {
      errs.address = "Address is too long";
    }

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      Navigate("/")
      console.log(form);
      // Reset form
      setForm({ name: "", email: "", mobile: "", password: "", address: "" });
    }
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Sign Up / Login</h2>

        <label>Name*</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Email*</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Mobile Number*</label>
        <input
          type="tel"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          placeholder="Enter your mobile number"
        />
        {errors.mobile && <p className="error">{errors.mobile}</p>}

        <label>Password*</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <label>Address / Location</label>
        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Enter your address or location"
          rows="3"
        />
        {errors.address && <p className="error">{errors.address}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
