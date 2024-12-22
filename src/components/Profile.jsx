import React from "react";
import { MdOutlineCalendarToday } from "react-icons/md";

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
        width: "200px",
      }}
    >
      <div style={{ margin: "auto" }}>
        <img src={profile_picture} alt="" />
        <h3>{name}</h3>
      </div>
      <div>
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <img src="" alt="" />
          <div>
            <p>Date Of Birth</p>
            <p>{date_of_birth}</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <img src="" alt="" />
          <div>
            <p>Gender</p>
            <p>{gender}</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <img src="" alt="" />
          <div>
            <p>Contact Info.</p>
            <p>{phone_number}</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <img src="" alt="" />
          <div>
            <p>Emergency Contacts</p>
            <p>{emergency_contact}</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <img src="" alt="" />
          <div>
            <p>Insurance Provider</p>
            <p>{insurance_type}</p>
          </div>
        </div>
      </div>
      <button>Show All Information</button>
    </div>
  ) : (
    <p>No patient data available</p>
  );
};
export default Profile;
