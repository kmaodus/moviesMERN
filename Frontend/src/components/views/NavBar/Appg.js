import React from "react";
import "./Appg.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const Appg = () => {
  const data = [
    { name: "Septembre", users: 360000 },
    { name: "Octobre", users: 800000 },
    { name: "November", users: 100000 },
    { name: "Décembre", users: 500 },
  ];
  const data1 = [
    { name1: "Septembre", Visiteurs: 560000 },
    { name1: "Octobre", Visiteurs: 1200000 },
    { name1: "November", Visiteurs: 340000 },
    { name1: "Décembre", Visiteurs: 1500 },
  ];

  return (
    <div className="Appgs" style={{ textAlign: "center" }}>
      <div className="PieChart">
        <h1>Nombre de spectateurs </h1>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
      <hr />
      <div className="BarChart">
        <h1>Nombre des visiteurs du site </h1>
        <BarChart
          width={500}
          height={300}
          data={data1}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name1"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="Visiteurs"
            fill="#2E2827"
            background={{ fill: "#eee" }}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default Appg;
