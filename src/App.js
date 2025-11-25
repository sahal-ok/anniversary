import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";

import AddForm from "./components/AddForm";
import DateList from "./components/DateList";
import Card from "./components/Card";
import "./App.css"

export default function App() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);

  const loadDates = () => {
    const dbRef = ref(db, "anniversaryDates");

    onValue(dbRef, (snapshot) => {
      const data = snapshot.val() || {};
      const list = Object.entries(data).map(([id, value]) => ({
        id,
        ...value,
      }));
      setItems(list);
    });
  };

  useEffect(() => {
    loadDates();
  }, []);

  // --- SAFE DATE PARSER (avoids timezone bugs)
  const parseDate = (str) => {
    const [y, m, d] = str.split("-");
    return new Date(Number(y), Number(m) - 1, Number(d));
  };

  function getThisWeeksDates() {
  const today = new Date();
  const day = today.getDay(); // 0 = Sun, 1 = Mon, ...
  const monday = new Date(today);

  // Move `monday` back to Monday
  const diff = day === 0 ? -6 : 1 - day;
  monday.setDate(today.getDate() + diff);

  const dates = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    dates.push(d.toISOString().split("T")[0]); // YYYY-MM-DD
  }
  return dates;
}
console.log(getThisWeeksDates());

  const thisWeek = getThisWeeksDates();

const thisWeeksAnniversaries = items.filter(a =>
  thisWeek.some(d => d.slice(5) === a.date.slice(5))
);
console.log("THIS WEEK:", thisWeek);
console.log("ANNIVERSARIES:", items);
console.log("MATCHES:", thisWeeksAnniversaries);

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>Anniversary Wishing Website ❤️</h1>

      {!selected && (
        <>
          <AddForm refresh={loadDates} />
          <DateList items={items} selected={setSelected} />

         
        </>
      )}

      {selected && (
        <>
          <Card selected={selected} />
          <button onClick={() => setSelected(null)}>Back</button>
        </>
      )}
      





      {/* THIS WEEK BLOCK */}
<h2>This Week's Anniversaries</h2>

{thisWeeksAnniversaries.length === 0 && (
  <p>No anniversaries this week.</p>
)}

{thisWeeksAnniversaries.map((item) => (
  <div
    key={item.id}
    style={{
      padding: "10px",
      marginBottom: "10px",
      background: "#fff0f4",
      borderRadius: "8px",
    }}
  >
    <p>
      <strong>
        {item.name} ❤️ {item.partner}
      </strong>
    </p>
    <p>Date: {item.date}</p>

    <button className="generate-btn" onClick={() => setSelected(item)}>Generate Card</button>
  </div>
))}

    </div>
  );
}
