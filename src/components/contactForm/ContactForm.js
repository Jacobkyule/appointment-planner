import React from "react";
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;


export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name
    <input
    name="name"
    id="name"
    value={name}
    onChange={e => setName(e.target.value)}
    type="text"
    placeholder="Enter Full Names"
    required
    />
    </label>
    <br />
    <label htmlFor="phone">Phone
    <input
    name="phone"
    id="phone"
    value={phone}
    onChange={e => setPhone(e.target.value)}
    type="tel"
    placeholder="Enter Phone Number"
    required
    />
    </label>
    <br />
    <label htmlFor="email">Email
    <input
    name="email"
    id="email"
    value={email}
    onChange={e => setEmail(e.target.value)}
    type="email"
    pattern={emailRegex}
    placeholder="Enter Email Address"
    required
    />
    </label>
    <br />
    <div className="button-container">
    <button type="submit" className="submit-button">Add Contact</button>
    </div>
    </form>
    </>
  );
};

