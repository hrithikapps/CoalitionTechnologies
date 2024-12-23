import React from "react";
import insuranceIcon from "../assets/InsuranceIcon/Insuranceicon.png";
import birthIcon from "../assets/calander/BirthIcon.png";
import genderIcon from "../assets/genderIcon/FemaleIcon.png";
import phoneIcon from "../assets/PhoneIcon/PhoneIcon.png";
import "../index.css";

const Profile = ({ patient }) => {
  const {
    profile_picture = "",
    name = "NA",
    date_of_birth = "NA",
    emergency_contact = "NA",
    phone_number = "NA",
    gender = "NA",
    insurance_type = "NA",
  } = patient || {};

  return patient ? (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        padding: "20px",
        width: "210px",
        margin: "20px 20px 20px 0px ",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          style={{ height: "84px", width: "84px", marginBottom: "24px" }}
          src={profile_picture}
          alt="Profile Picture"
        />
        <h3>{name}</h3>
      </div>
      <div>
        <div style={{ display: "flex", gap: "20px", margin: "32px 0 20px" }}>
          <img
            style={{ height: "42px", width: "42px" }}
            src={birthIcon}
            alt="Birthdate"
          />
          <div>
            <p>Date Of Birth</p>
            <p style={{ fontWeight: "bold" }}>{date_of_birth}</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <img
            style={{ height: "42px", width: "42px" }}
            src={genderIcon}
            alt="femaleIcon"
          />
          <div>
            <p style={{ color: "var(--gray-text-colour)" }}>Gender</p>
            <p style={{ fontWeight: "bold" }}>{gender}</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <img
            style={{ height: "42px", width: "42px" }}
            src={phoneIcon}
            alt=""
          />
          <div>
            <p>Contact Info.</p>
            <p style={{ fontWeight: "bold" }}>{phone_number}</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <img
            style={{ height: "42px", width: "42px" }}
            src={phoneIcon}
            alt=""
          />
          <div>
            <p>Emergency Contacts</p>
            <p style={{ fontWeight: "bold" }}>{emergency_contact}</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <img
            style={{ height: "42px", width: "42px" }}
            src={insuranceIcon}
            alt=""
          />
          <div>
            <p>Insurance Provider</p>
            <p style={{ fontWeight: "bold" }}>{insurance_type}</p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            padding: "11px 20px",
            borderRadius: "50px",
            backgroundColor: "#01F0D0",
            border: "none",
          }}
        >
          Show All Information
        </button>
      </div>
    </div>
  ) : (
    <p>No patient data available</p>
  );
};
export default Profile;
