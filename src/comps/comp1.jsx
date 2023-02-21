import React from "react";

export default function Comp1() {
  return (
    <div className="toptext-container">
      <h1>Personal info</h1>
      <p>Please provide your name,email address and phone number</p>
      <div className="input-container">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="e.g. Stephen King" />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" type="tel" placeholder="e.g. +1 234 567 890" />
      </div>
    </div>
  );
}
