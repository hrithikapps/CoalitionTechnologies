import React, { useEffect, useState } from "react";
import Header from "./Header";
import "../styles/LandingPage.css";
import HealthCard from "./HealthCard";
import respiratoryRate from "../assets/respiratory rate/respiratory rate.png";
import temperature from "../assets/temperature/temperature.png";
import heartBPM from "../assets/HeartBPM/HeartBPM.png";
import BloodPressureChart from "./BloodPressureChart";
import DiagnosticList from "./DiagnosticList";
import Profile from "./Profile";
import LabResults from "./LabResults";
import PatientTab from "./PatientTab";

const LandingPage = () => {
  const [patients, setPatients] = useState([]);
  const [diastolicValue, setDiastolicValue] = useState(0);
  const [systolicValue, setSystolicValue] = useState(0);
  const [systolicLevels, setSystolicLevels] = useState("");
  const [diastolicLevels, setDiastolicLevels] = useState("");
  const [diagnostic_list, setDiagnostic_list] = useState([]);

  let diastolic = [];
  let systolic = [];

  const getPatientsData = async () => {
    try {
      const userName = "coalition";
      const password = "skills-test";
      const auth = btoa(`${userName}:${password}`);

      const response = await fetch(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        {
          headers: {
            authorization: `Basic ${auth}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setPatients(data);
        console.log(data);
      } else {
        throw new Error("Error Fetching Data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  //fetching Patients Data

  useEffect(() => {
    getPatientsData();
  }, []);

  useEffect(() => {
    if (patients?.length > 0) {
      const firstDiagnosis = patients[3]?.diagnosis_history[0];

      if (firstDiagnosis?.blood_pressure) {
        setSystolicValue(firstDiagnosis.blood_pressure.systolic.value);
        setDiastolicValue(firstDiagnosis.blood_pressure.diastolic.value);
        setSystolicLevels(firstDiagnosis.blood_pressure.systolic.levels);

        setDiastolicLevels(firstDiagnosis.blood_pressure.diastolic.levels);
        setDiagnostic_list(patients[3]?.diagnostic_list);
      }
    }
  }, [patients]);

  return (
    <div id="landingPage">
      <Header />
      <main className="flex">
        <section id="allPatients">
          <PatientTab patients={patients} />
        </section>
        <section id="patient">
          <article
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "20px",
              borderRadius: "12px",
            }}
            id="diagnosisHistory"
          >
            <h3>Diagnosis History</h3>
            {patients[3]?.diagnosis_history.map((diagnosis) => {
              diastolic.push(diagnosis.blood_pressure.diastolic.value);
              systolic.push(diagnosis.blood_pressure.systolic.value);
            })}
            <BloodPressureChart
              patient={patients[3]}
              systolic={systolic}
              diastolic={diastolic}
              systolicValue={systolicValue}
              diastolicValue={diastolicValue}
              systolicLevels={systolicLevels}
              diastolicLevels={diastolicLevels}
            />
            <div
              style={{
                display: "flex",
                gap: "20px",
                borderRadius: "12px",
                justifyContent: "space-between",
                width: "726px",
                height: "298px",
                border: "1px solid blue",
              }}
            >
              <HealthCard
                bg="#E0F3FA"
                image={respiratoryRate}
                parameter="Respiratory Rate"
                magnitude={` ${patients[3]?.diagnosis_history[0]?.respiratory_rate.value} Bpm`}
                condition={
                  patients[3]?.diagnosis_history[0]?.respiratory_rate.levels
                }
                style={{ flexGrow: 1 }}
              />
              <HealthCard
                bg="#FFE6E9"
                image={temperature}
                parameter="Respiratory Rate"
                magnitude={` ${patients[3]?.diagnosis_history[0]?.temperature.value} F`}
                condition={
                  patients[3]?.diagnosis_history[0]?.respiratory_rate.levels
                }
                style={{ flexGrow: 1 }}
              />
              <HealthCard
                bg="#FFE6F1"
                image={heartBPM}
                parameter="Respiratory Rate"
                magnitude={` ${patients[3]?.diagnosis_history[0]?.heart_rate.value} Bpm`}
                condition={patients[3]?.diagnosis_history[0]?.heart_rate.levels}
                style={{ flexGrow: 1 }}
              />
            </div>
          </article>
          <article>
            <DiagnosticList diagnostic_list={diagnostic_list} />
          </article>
          <article id="patientDetails">
            <Profile patient={patients[3]} />
          </article>
          <article>
            <LabResults lab_results={patients[3]?.lab_results} />
          </article>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
