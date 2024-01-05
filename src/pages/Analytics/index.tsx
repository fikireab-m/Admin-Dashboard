import { useState } from "react";
import Layout from "../../components/Layout";

import SimpleBarChart from "../../components/charts/BarChart";
import Map from "../../components/Map";
import SimpleLineChart from "../../components/charts/SimpleLineChart";
import PieChart from "../../components/charts/PieChart";
import Card from "../../components/Card";
import { generateRand } from "../../utils/generateRandom";
import Summary from "./Summary";

const Analytics = () => {
  const [tab, setTab] = useState(0)
  const usersCat = ["Active Users", "Subscriptions", "Deleted Users"]

  return (
    <Layout title="Kimem/Analytics" index={3}>
      <section
        id="summary-cards"
        className="flex flex-wrap flex-grow justify-center gap-10 px-10 mt-5 text-white"
      >
        {
          usersCat.map((cat, index) => (
            <Card key={index} title={cat} amount={generateRand(35, 5)}/>
          ))
        }
      </section>

      <section className=" mb-10 mx-10">
        <ul
          className=" flex list-none flex-row flex-wrap border-b-0 pl-0"
          role="tablist"
          data-te-nav-ref
        >
          <li role="presentation">
            <a
              className={`cursor-pointer my-2 block border-x-0 border-b-2 border-t-0 ${tab === 0 ? "border-blue-500" : "border-transparent"
                } px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500`}
              onClick={() => setTab(0)}
            >
              Chart
            </a>
          </li>
          <li role="presentation">
            <a
              className={`cursor-pointer my-2 block border-x-0 border-b-2 border-t-0 ${tab === 1 ? "border-blue-500" : "border-transparent"
                } px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500`}
              onClick={() => setTab(1)}
            >
              Map
            </a>
          </li>
        </ul>

        <div className="mb-6">
          <div className={`w-full grid gap-6 mb-8 grid-cols-1 lg:grid-cols-2 items-center ${tab === 0 ? "block" : "hidden"
            }`}>
            <div className="opacity-100 transition-opacity duration-150 ease-linear">
              <PieChart titleText="" legendOrientation="bottom" />
            </div>
            <div>
              <div className="opacity-100 transition-opacity duration-150 ease-linear">
                <SimpleBarChart titleText="" />
              </div>
              <div className="opacity-100 transition-opacity duration-150 ease-linear">
                <SimpleLineChart titleText="" />
              </div>
            </div>
            <div className="opacity-100 transition-opacity duration-150 ease-linear">
              <SimpleLineChart titleText="" />
            </div>
            <div className="opacity-100 transition-opacity duration-150 ease-linear">
              <SimpleBarChart titleText="" />
            </div>
          </div>
          <div
            className={`transition-opacity duration-150 ease-linear ${tab === 1 ? "block" : "hidden"
              }`}
          >
            <Map
              location={{
                address: "Addis Ababa, Ethiopia",
                lat: 9.0192,
                lng: 38.7525,
              }}
              zoomLevel={7}
            />
          </div>
        </div>
      </section>
      <Summary />
    </Layout>
  );
};

export default Analytics;
