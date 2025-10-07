
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactForm.css";

export default function ContactForm() {
    const Navigate = useNavigate() 
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
    }

    // Email validation
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(form.email)
    ) {
      errs.email = "Email is invalid";
    }

    // Message validation
    if (!form.message.trim()) {
      errs.message = "Message is required";
    } else if (form.message.length < 10) {
      errs.message = "Message must be at least 10 characters";
    }

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Message sent successfully!");
      Navigate("/")
      console.log(form);
      // Reset form
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Us</h2>

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

        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Enter subject (optional)"
        />

        <label>Message*</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message"
          rows="5"
        />
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
