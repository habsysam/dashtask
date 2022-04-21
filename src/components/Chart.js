import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  datasets: [
    {
      data: [300, 500, 200, 90, 150, 350],
      backgroundColor: [
        "#EE7777",
        "#4BAAB4",
        "#1F2439",
        "#F5B461",
        "#F9C480",
        "#EA5455"
      ],
      hoverBackgroundColor:  [
        "#EE7777",
        "#4BAAB4",
        "#1F2439",
        "#F5B461",
        "#F9C480",
        "#EA5455"
      ],
      borderWidth: 1,
      borderRadius: 1
    }
  ]
};
export default function Chart() {
  return <Doughnut data={data} />;
}
