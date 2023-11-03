import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
const options = {
  scales: {
    r: {
      max: 100,
      min: 0,
      tricks: {
        stepsize: 20,
      },
      angleLines: {
        color: "white",
      },
      grid: {
        color: "white",
      },
      pointLabels: {
        font: {
          size: 15,
          color: "white",
        },
      },
    },
  },
};
function ChartSkill() {
  const data = {
    labels: [
      "Html5",
      "CSS",
      "php",
      "Javascript",
      "SQL",
      "Python",
      "Bash/sh",
      "Go",
      "C",
    ],
    datasets: [
      {
        label: "My Skill Range",
        data: [80, 66, 56, 49, 47, 72, 68, 55, 50],
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderColor: "#0D6EFD",
        borderWidth: 2,
      },
    ],
  };
  return (
    <>
      <div className="container bg-dark">
        <span className="judulcontext">My skill</span>
        <p className="p-2 mb-1">
          This is range of my knowledge in various programming languange, iknow
          html and css are actually not language for me it is a programming
          language, the range concist of 0 - 100.
        </p>
        {/* </div>
      <div className="container chart bg-dark"> */}
        <Radar data={data} options={options} />
      </div>
    </>
  );
}
export { ChartSkill };
