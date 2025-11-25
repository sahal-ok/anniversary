import React from "react";
import html2canvas from "html2canvas";

export default function DownloadButton() {
  const download = async () => {
    const card = document.getElementById("card");
    const canvas = await html2canvas(card);
    const link = document.createElement("a");
    link.download = "anniversary-card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return <button onClick={download}>Download Card</button>;
}
