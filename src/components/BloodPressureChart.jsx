import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BloodPressureChart = ({
  systolic,
  diastolic,
  systolicValue,
  diastolicValue,
  systolicLevels,
  diastolicLevels,
}) => {
  const labels = [
    "Oct 2023",
    "Nov 2023",
    "Dec 2023",
    "Jan 2024",
    "Feb 2024",
    "Mar 2024",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Systolic",
        data: systolic.slice(0, labels.length),
        borderColor: "#E66FD2",
        backgroundColor: "#F4F0FE",
        pointBackgroundColor: "#E66FD2",
        tension: 0.5,
      },
      {
        label: "Diastolic",
        data: diastolic.slice(0, labels.length),
        borderColor: "#8C6FE6",
        backgroundColor: "#F4F0FE",
        pointBackgroundColor: "#8C6FE6",
        tension: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.dataset.label}: ${context.raw} ${
              context.dataset.label === "Systolic" ? "Bpm" : "mmHg"
            }`,
        },
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "726px",
        height: "298px",
        background: "#F4F0FE 0% 0% no-repeat padding-box",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <div style={{ flex: 1 }}>
        <h2>Blood Pressure</h2>
        <Line data={data} options={options} height={200} width={400} />
      </div>
      <div
        style={{
          width: "200px",
          height: "100%",
          background: "#F4F0FE 0% 0% no-repeat padding-box",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        <h3>Systolic</h3>
        <p>{systolicValue}</p>
        <p>{systolicLevels}</p>
        <h3>Diastolic</h3>
        <p>{diastolicValue} </p>
        <p>{diastolicLevels}</p>
      </div>
    </div>
  );
};

export default BloodPressureChart;
