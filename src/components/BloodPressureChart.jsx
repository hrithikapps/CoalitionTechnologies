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
  bloodPressurelabels,
  systolic,
  diastolic,
  systolicValue,
  diastolicValue,
  systolicLevels,
  diastolicLevels,
}) => {
  const labels = [...bloodPressurelabels];

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
        width: "776px",
        height: "298px",
        background: "#F4F0FE 0% 0% no-repeat padding-box",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <div style={{ flex: 1 }}>
        <h4>Blood Pressure</h4>
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
        <h4>Systolic</h4>
        <p>{systolicValue}</p>
        <p style={{ fontSize: "small" }}>{systolicLevels}</p>
        <h4>Diastolic</h4>
        <p>{diastolicValue} </p>
        <p style={{ fontSize: "small" }}>{diastolicLevels}</p>
      </div>
    </div>
  );
};

export default BloodPressureChart;
