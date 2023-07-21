import React, { useState } from "react";
import { Line } from "react-chartjs-2";

export default function Lhart() {

  const [data, setData] = useState([
    {
      label: "January",
      data: [10, 20, 30, 40, 50],
    },
    {
      label: "February",
      data: [60, 70, 80, 90, 100],
    },
    {
      label: "March",
      data: [110, 120, 130, 140, 150],
    },
  ]);

  return (
    <div>
      <Line
        data={data}
        width={400}
        height={200}
        yaxislabel="Value"
        xaxislabel="Month"
      />
    </div>
  );
}
