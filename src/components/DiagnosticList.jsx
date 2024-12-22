import React from "react";

const DiagnosticList = ({ diagnostic_list }) => {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#FFFFFF",
        margin: "auto",
        maxWidth: "50%",
      }}
    >
      <table
        style={{
          backgroundColor: "#FFFFFF",
          overflow: "scroll",
          borderCollapse: "collapse",
          borderRadius: "24px",
        }}
      >
        <thead
          style={{
            backgroundColor: "#F6F7F8",
            borderRadius: "50%",
            padding: "10px",
          }}
        >
          <tr style={{ padding: "10px" }}>
            <th style={{ padding: "10px" }}>Problem/Diagnosis</th>
            <th style={{ padding: "10px" }}>Description</th>
            <th style={{ padding: "10px" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {diagnostic_list?.map((diagnosis, index) => {
            return (
              <tr key={index}>
                <td style={{ padding: "10px", fontSize: "small" }}>
                  {diagnosis.name}
                </td>
                <td style={{ padding: "10px", fontSize: "small" }}>
                  {diagnosis.description}
                </td>

                <td style={{ padding: "10px", fontSize: "small" }}>
                  {diagnosis.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosticList;
