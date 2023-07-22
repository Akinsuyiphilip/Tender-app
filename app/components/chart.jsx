import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    pv: 24,
  },
  {
    name: "Feb",
    pv: 58.9,
  },
  {
    name: "Mar",
    pv: 12,
  },
  {
    name: "Apr",
    pv: 45.4,
  },
  {
    name: "May",
    pv: 70,
  },
  {
    name: "Jun",
    pv: 50,
  },
  {
    name: "July",
    pv: 30,
  },
];

export default class DashChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={250} data={data}>
          <CartesianGrid strokeDasharray="4" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="pv"
            stroke="#2121F1"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
