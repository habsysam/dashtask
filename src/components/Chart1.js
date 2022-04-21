import React from "react";
import { Doughnut } from "react-chartjs-2";
 
const data = {
    datasets: [
      {
        data: [500, 190, 210],
        backgroundColor: [" #4BAAB4", "#F4B462", " #1F2439"],
        hoverBackgroundColor: [" #4BAAB4", "#F4B462", " #1F2439"],
        borderWidth: 1
      }
    
  ]
};
export default function Chart1() {
  return <Doughnut data={data} />;
}
