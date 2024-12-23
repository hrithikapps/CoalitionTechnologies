import React from "react";
import download from "../assets/download/download.png";

const LabResults = ({ lab_results }) => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#FFFFFF",
        height: "200px",
        width: "210px",
        borderRadius: "12px",
        overflowY: "scroll",
      }}
    >
      <h3>Lab Results</h3>

      {lab_results?.map((result, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              padding: "16px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: "small" }}>{result}</p>
            <img src={download} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default LabResults;
