import React, { useState } from "react";
import firstImage from "../assets/Kogin-Background.jpg";
import secondImage from "../assets/Logo small.png";
import "./login.css";

export default function Login() {
  const [isSuperscript, setSuperscript] = useState(false);
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const highlightLabel = (labelId) => {
    setSuperscript(true);
    const label = document.getElementById(labelId);
    if (label) {
      label.style.fontSize = "0.8rem"; // Change the font size to superscript
    }
  };

  const resetLabel = (labelId) => {
    setSuperscript(false);
    const label = document.getElementById(labelId);
    if (label) {
      label.style.fontSize = "1rem"; // Reset the font size
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling form submission
    setFormSubmitted(true);
  };

  return (
    <div className="background-container">
      <img src={firstImage} alt="First Image" className="image" id="firstImage" />
      <img src={secondImage} alt="Second Image" className="image" id="secondImage" />

      <div className="login-container">
        <h1 style={{ color: "rgb(139, 141, 30)" }}>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div
            className={`form-group ${
              isSuperscript ? "superscript" : ""
            } ${isFormSubmitted && !isSuperscript ? "error" : ""}`}
             >
            
            <label htmlFor="username" id="username-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onFocus={() => highlightLabel("username-label")}
              onBlur={() => resetLabel("username-label")}
            />
            {isFormSubmitted && !isSuperscript && (
              <div className="error-message">Username is required</div>
            )}
          </div>
          <div
            className={`form-group ${
              isSuperscript ? "superscript" : ""
            } ${isFormSubmitted && !isSuperscript ? "error" : ""}`}
           >
            
            <label htmlFor="password" id="password-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onFocus={() => highlightLabel("password-label")}
              onBlur={() => resetLabel("password-label")}
            />

            {isFormSubmitted && !isSuperscript && (
              <div className="error-message">Password is required</div>
            )}
          </div>
          <button type="submit">Login</button>
          <p>
            <a href="/forgot-password" style={{color:"blueviolet"}}>Forgot Password?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
