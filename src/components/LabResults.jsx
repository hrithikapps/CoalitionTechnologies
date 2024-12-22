import React from "react";

const LabResults = ({ lab_results }) => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#FFFFFF",
        height: "200px",
        width: "200px",
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
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: "small" }}>{result}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LabResults;
