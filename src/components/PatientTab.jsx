import React from "react";
import tripleDots from "../assets/tripleDots/tripleDots.png";
import search from "../assets/search/search.png";

const PatientTab = ({ patients }) => {
  return (
    patients && (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#FFFFFF",
          display: "block",
          overflowY: "scroll",
          height: "90vh",
          borderRadius: "12px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h3>Patients</h3>
          <img src={search} alt="search" />
        </div>

        {patients.map((patient, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                style={{ height: "48px" }}
                src={patient.profile_picture}
                alt="avatar"
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "20px",
                  justifyContent: "space-between",
                  width: "200px",
                }}
              >
                <div>
                  <p>{patient.name}</p>
                  <p style={{ color: "#707070" }}>
                    {patient.gender} {patient.age}
                  </p>
                </div>
                <div>
                  <img src={tripleDots} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default PatientTab;
