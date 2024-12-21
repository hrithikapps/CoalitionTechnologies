import React from "react";
import "../styles/HealthCard.css";

const HealthCard = ({ bg, image, parameter, magnitude, condition }) => {
  return (
    <div style={{ padding: "10px" }}>
      <div style={{ backgroundColor: bg }} className="healthCard">
        <img className="healthCardAvatar" src={image} alt="svgImage" />
        <p style={{ color: "gray" }}>{parameter}</p>
        <p style={{ fontWeight: "bold", margin: "10px 0" }}>{magnitude}</p>
        <p style={{ fontSize: "10px", color: "gray", margin: "5px 0" }}>
          {condition}
        </p>
      </div>
    </div>
  );
};

export default HealthCard;
