import React, { useState } from "react";
import "./InvintationLabel.css";

export default function InvitationLabel({
  fields = [],
  submitText = "Ուղարկել",
}) {
  const initialState = {};
  fields.forEach((field) => {
    initialState[field.name] = field.defaultValue || "";
  });

  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbylu74m77MdDTj677IP4PCCFPc6gnJob8ps6VFMSryVATnvWJ_kCkzLrg7uEA9dX6yy9Q/exec", {
        method: "POST",
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      alert("Չհաջողվեց ուղարկել պատասխանը։ Խնդրում ենք ստուգել ինտերնետ կապը։");
    }
  };
  

  if (submitted) {
    return (
      <div className="invitation-confirmation2">
        <p>Շնորհակալություն պատասխանի համար</p>
        <div className="footer-heart">
          <span className="birthday-star">★</span>
          <span>Սիրով Սպասում ենք ձեզ</span>
        </div>
      </div>
    );
  }

  return (
    <form className="send-invitation" onSubmit={handleSubmit}>
      {fields.map((field) => {
        let required = true;
        if (field.name !== "isAttending") {
          required = formData.isAttending === "այո";
        }

        return (
          <div key={field.name} className="section">
            <label>{field.label}</label>

            {field.type === "radio" && field.options ? (
              <div className="radio-container">
                <div className="radio-group">
                  {field.options.map((opt) => (
                    <label key={opt.value}>
                      <input
                        type="radio"
                        name={field.name}
                        value={opt.value}
                        checked={formData[field.name] === opt.value}
                        onChange={() => handleChange(field.name, opt.value)}
                        required={required}
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>
            ) : field.type === "text" ? (
              <div className="radio-container">
                <div style={{ width: "90%" }}>
                  <input
                    type="text"
                    name={field.name}
                    placeholder={field.placeholder || ""}
                    value={formData[field.name]}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    required={required}
                  />
                </div>
              </div>
            ) : null}
          </div>
        );
      })}

      <button className="submit-btn" type="submit">
        {submitText}
      </button>

      <div className="footer-heart">
        <span className="birthday-star">★</span>
        <span>Սիրով Սպասում ենք ձեզ</span>
      </div>
    </form>
  );
}
