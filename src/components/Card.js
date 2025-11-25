import React from "react";
import html2canvas from "html2canvas";

export default function Card({ selected }) {
  const download = async () => {
    await new Promise((r) => setTimeout(r, 300)); // ensure card renders
    const card = document.getElementById("card");

    const canvas = await html2canvas(card, {
      useCORS: true,
      scale: 2, // HD output
    });

    const link = document.createElement("a");
    link.download = "anniversary-card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <>
      <div
        id="card"
        style={{
          width: "380px",
          margin: "20px auto",
          padding: "30px",
          textAlign: "center",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #ffdde1, #ee9ca7)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          fontFamily: "'Poppins', sans-serif",
          color: "#4a4a4a",
          position: "relative",
        }}
      >
        {/* decorative hearts */}
        <div
          style={{
            position: "absolute",
            top: "-15px",
            left: "-15px",
            fontSize: "38px",
            opacity: 0.7,
          }}
        >
          💖
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "-15px",
            right: "-15px",
            fontSize: "38px",
            opacity: 0.7,
          }}
        >
          💞
        </div>

        <h1 style={{ fontSize: "26px", marginBottom: "10px", color: "#e60073" }}>
          Happy Anniversary
        </h1>

        <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "8px" }}>
          {selected.name} ❤️ {selected.partner}
        </h2>

        <p
          style={{
            fontSize: "16px",
            marginBottom: "15px",
            color: "#6d6d6d",
          }}
        >
          {selected.date}
        </p>

        <p
          style={{
            fontSize: "18px",
            padding: "10px 20px",
            borderRadius: "10px",
            background: "rgba(255,255,255,0.5)",
            display: "inline-block",
            color: "#444",
          }}
        >
          Wishing you a lifetime of love, joy and togetherness 💕
        </p>
      </div>

      {/* download button */}
      <button
        onClick={download}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#e60073",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
        }}
      >
        Download Card
      </button>
    </>
  );
}
