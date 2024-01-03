import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Revenue", "NFT Generated", "Advertising", "Partnership"];
const barColors = [
  "rgba(75, 170, 80, 0.5)",
  "rgba(249, 227, 14, 0.5)",
  "rgba(211, 87, 0, 0.5)",
  "rgba(53, 162, 235, 0.5)"
];
const borderColors = [
  "rgba(75, 170, 80, 0.5)",
  "rgb(240, 190, 7)",
  "rgb(211, 87, 0)",
  "rgb(53, 162, 235)"
];

const data = {
    labels,
  datasets: [
    {
      data: labels.map(() => faker.number.float() * 100),
      backgroundColor: barColors,
      borderColor: borderColors
    }
  ]
};

const PieChart = ({ titleText, legendOrientation }: { titleText: string, legendOrientation: "bottom" | "right" }) => {
  return (
    <Pie
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: legendOrientation,
            align: "center",
          },
          title: { display: true, text: titleText, position: 'bottom' },
        },
      }}
      data={data}
    />
  );
};

export default PieChart;
