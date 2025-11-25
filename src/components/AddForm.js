import React, { useState } from "react";
import { db } from "../firebase";
import { ref, push } from "firebase/database";

export default function AddForm({ refresh }) {
  const [name, setName] = useState("");
  const [partner, setPartner] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Push data to realtime DB
    await push(ref(db, "anniversaryDates"), {
      name,
      partner,
      date,
    });

    setName("");
    setPartner("");
    setDate("");

    refresh();
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

      <button type="submit">Save Date</button>
    </form>
  );
}
