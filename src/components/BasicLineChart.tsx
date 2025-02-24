import { LineChart } from "@mui/x-charts"; 
import React from "react";

export default function BasicLineChart() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Vehicles/Hour</h2>
      <LineChart
        xAxis={[
          {
            scaleType: "point",
            data: [
              "00:00", "02:00", "04:00", "06:00", "08:00",
              "10:00", "12:00", "14:00", "16:00", "18:00",
              "20:00", "22:00"
            ],
          },
        ]}
        series={[
          {
            data: [5, 8, 12, 15, 18, 20, 22, 25, 30, 26, 18, 10],
            showMark: true,
            curve: "natural",
            color: "#00C0D9",
            markerSize: 5,
          },
        ]}
        width={600}
        height={300}
      />
    </div>
  );
}
