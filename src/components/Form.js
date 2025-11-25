import React, { useState } from "react";

export default function Form({ setData }) {
  const [name, setName] = useState("");
  const [partner, setPartner] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ name, partner, date });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        placeholder="Partner Name"
        value={partner}
        onChange={(e) => setPartner(e.target.value)}
        required
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <button type="submit">Generate Card</button>
    </form>
  );
}
