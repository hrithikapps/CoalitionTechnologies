import React from "react";
import Header from "./Header";
import styles from "../styles/LandingPage.module.css";

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <nav></nav>
        <section id="allPatients"></section>
        <section id="patient">
          <article id="diagnosticHistory"></article>
          <article id="patientDetails"></article>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
