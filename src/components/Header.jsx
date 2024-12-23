import React from "react";
import "../styles/Header.css";
import { GoHome } from "react-icons/go";
import { LuUsers } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { BiReceipt } from "react-icons/bi";
import dr from "../assets/senior-woman-doctor/dr.png";
import logo from "../assets/TestLogo/TestLogo.png";
const Header = () => {
  return (
    <>
      <nav>
        <section id="logo">
          <img style={{ height: "60px", width: "210px" }} src={logo} alt="" />
        </section>
        <section id="group" style={{ display: "flex" }}>
          <div style={{ padding: "10px" }}>
            <GoHome /> <p>Overview</p>
          </div>
          <div>
            <LuUsers />
            <p>Patients</p>
          </div>
          <div>
            <MdOutlineCalendarToday />
            <p>Message</p>
          </div>
          <div>
            <FiMessageSquare />
            <p>Schedule</p>
          </div>
          <div>
            <BiReceipt />
            <p>Transactions</p>
          </div>
        </section>
        <section id="profile">
          <div className="flex">
            <img style={{ height: "44px", width: "44px" }} src={dr} alt="" />
            <div>
              <p>Dr. Jose Simmons</p>
              <p>General Practitioner</p>
            </div>
          </div>
          <div className="flex">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </section>
      </nav>
    </>
  );
};

export default Header;
