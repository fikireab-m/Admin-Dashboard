import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: "Revenue",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(65, 149, 68)",
      backgroundColor: "rgba(75, 170, 80, 0.5)",
      lineTension: 0.2736,
    },
    {
      label: "NFT Generated",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(240, 190, 7)",
      backgroundColor: "rgba(249, 227, 14, 0.5)",
      lineTension: 0.2736,
    },
    {
      label: "Advertising",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(211, 87, 0)",
      backgroundColor: "rgba(211, 87, 0, 0.5)",
      lineTension: 0.2736,
    },
    {
      label: "Partnership",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      lineTension: 0.2736,
    },
  ],
};

const SimpleLineChart=({titleText}:{titleText:string})=> {
  return (
    <Line
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "top",
            align: "end"
          },
          title: { display: true, text: titleText },
        }
      }}
      data={data}
    />
  );
}

export default SimpleLineChart