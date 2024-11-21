import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);

    // Simulate form submission success
    setIsSubmitted(true);

    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Optional: Reset the success message after a delay
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      {isSubmitted && <p className="success-message">Thank you! We'll get back to you soon.</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
