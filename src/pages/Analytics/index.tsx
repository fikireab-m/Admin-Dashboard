import { useState } from "react";
import Layout from "../../components/Layout";

//Icons
import { BiUserCheck } from "react-icons/bi";
import { BiUserMinus } from "react-icons/bi";
import { MdWorkspacePremium } from "react-icons/md";
import SimpleBarChart from "../../components/charts/BarChart";

const Analytics = () => {
  const [tab, setTab] = useState(0);

  return (
    <Layout title="Kimem/Analytics" index={3}>
      <section
        id="summary-cards"
        className="flex flex-wrap flex-grow justify-center gap-10 px-10 mt-5 text-white"
      >
        <div className="bg-gradient-to-r from-[#BE195E] to-[#9D4993] w-[280px] h-28 rounded-xl">
          <h1 className="m-3 text-sm flex items-center gap-3">
            <BiUserCheck size={25} />
            Active Users
          </h1>
          <h1 className="text-3xl mx-5">25</h1>
          <div className="flex justify-end mx-5">
            <select className="bg-transparent text-sm outline-0 border-0">
              <option value=">18" className={`bg-[#9D4993]`}>
                18 - 25
              </option>
              <option value=">18" className={`bg-[#9D4993]`}>
                26 - 40
              </option>
              <option value=">18" className={`bg-[#9D4993]`}>
                {"41 > "}
              </option>
            </select>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9B4C97] to-[#8173C3] w-[280px] h-28 rounded-xl">
          <h1 className="m-3 text-sm flex items-center gap-3">
            <MdWorkspacePremium size={25} />
            Subscriptions
          </h1>
          <h1 className="text-3xl mx-5">25</h1>
          <div className="flex justify-end mx-5">
            <select className="bg-transparent text-sm outline-0 border-0">
              <option value=">18" className={`bg-[#8173C3]`}>
                18 - 25
              </option>
              <option value=">18" className={`bg-[#8173C3]`}>
                26 - 40
              </option>
              <option value=">18" className={`bg-[#8173C3]`}>
                {"41 > "}
              </option>
            </select>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#8076C6] to-[#60A4F9] w-[280px] h-28 rounded-xl">
          <h1 className="m-3 text-sm flex gap-3 items-center">
            <BiUserMinus size={25} />
            Deleted Users
          </h1>
          <h1 className="text-3xl mx-5">25</h1>
          <div className="flex justify-end mx-5">
            <select className="bg-transparent text-sm outline-0 border-0">
              <option value=">18" className={`bg-[#60A4F9]`}>
                18 - 25
              </option>
              <option value=">18" className={`bg-[#60A4F9]`}>
                26 - 40
              </option>
              <option value=">18" className={`bg-[#60A4F9]`}>
                {"41 > "}
              </option>
            </select>
          </div>
        </div>
      </section>

      <section className=" mb-10 mx-10">
        <ul
          className=" flex list-none flex-row flex-wrap border-b-0 pl-0"
          role="tablist"
          data-te-nav-ref
        >
          <li role="presentation">
            <a
              className={`cursor-pointer my-2 block border-x-0 border-b-2 border-t-0 ${
                tab === 0 ? "border-blue-500" : "border-transparent"
              } px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500`}
              onClick={() => setTab(0)}
            >
              Chart
            </a>
          </li>
          <li role="presentation">
            <a
              className={`cursor-pointer my-2 block border-x-0 border-b-2 border-t-0 ${
                tab === 1 ? "border-blue-500" : "border-transparent"
              } px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500`}
              onClick={() => setTab(1)}
            >
              Map
            </a>
          </li>
        </ul>

        <div className="mb-6">
          <div
            className={`opacity-100 transition-opacity duration-150 ease-linear ${
              tab === 0 ? "block" : "hidden"
            }`}
          >
            <SimpleBarChart titleText="" />
          </div>
        </div>
      </section>

      <section className="w-[92%] mb-10 bg-gradient-to-b from-transparent from-[5%] to-white to-50% shadow-sm rounded-xl mx-5">
        <header className="lg:flex lg:justify-between lg:mx-10">
          <h1 className="mt-16 text-2xl mx-10 text-sky-950 font-semibold">
            Detailed Summary
          </h1>

          <div className="md:flex grid lg:mt-16 mt-5 lg:mx-0 mx-10">
            <span className="flex">
              <h1 className="relative top-3 text-sm">Country: </h1>
              <select name="" id="" className="bg-transparent my-3">
                <option value="">All</option>
                <option value="">Canada</option>
                <option value="">Ethiopia</option>
                <option value="">India</option>
                <option value="">USA</option>
              </select>
            </span>

            <span className="flex">
              <h1 className="relative top-3 text-sm">Region: </h1>
              <select className="bg-transparent text-sm my-3">
                <option value=">18" className="bg-inherit">
                  All
                </option>
                <option value=">18" className="bg-inherit">
                  Region 1
                </option>
                <option value=">18" className="bg-inherit">
                  Region 2
                </option>
                <option value=">18" className="bg-inherit">
                  Region 3
                </option>
              </select>
            </span>

            <span className="flex">
              <h1 className="relative top-3 text-sm">Time: </h1>
              <select name="" id="" className="bg-transparent my-3">
                <option value="">Weekly</option>
                <option value="">Quarterly</option>
                <option value="">Monthly</option>
                <option value="">Half Yearly</option>
                <option value="">Yearly</option>
              </select>
            </span>

            <span className="flex">
              <h1 className="relative top-3 text-sm">Age: </h1>
              <select className="bg-transparent text-sm my-3">
                <option value=">18" className="bg-inherit">
                  18 - 25
                </option>
                <option value=">18" className="bg-inherit">
                  26 - 40
                </option>
                <option value=">18" className="bg-inherit">
                  {"41 > "}
                </option>
              </select>
            </span>
          </div>
        </header>

        <div className="grid lg:flex lg:justify-between">
          <div className="lg:mx-20 mx-10 mt-10 self-center lg:w-[40%] md:w-[80%]">
            <span className="flex justify-between my-3">
              <h1>Total Users</h1>
              <h2>0</h2>
            </span>
            <span className="flex justify-between my-3">
              <h1>New Users</h1>
              <h2>0</h2>
            </span>
            <span className="flex justify-between my-3">
              <h1>Active Users</h1>
              <h2>0</h2>
            </span>
            <span className="flex justify-between my-3">
              <h1>Deactivated Users</h1>
              <h2>0</h2>
            </span>
            <span className="flex justify-between my-3">
              <h1>Total Subscription</h1>
              <h2>0</h2>
            </span>
            <hr className="bg-gray-200 rounded-full h-1" />
            <span className="flex justify-between my-3">
              <h1>Total Revenue Generated</h1>
              <h2>0.00</h2>
            </span>
            <span className="flex justify-between my-3">
              <h1>Total Generated from NFT Marketplace</h1>
              <h2>0.00</h2>
            </span>
            <span className="flex justify-between my-3">
              <h1>Total Revenue Generated from Advertising</h1>
              <h2>0.00</h2>
            </span>
            <span className="flex justify-between my-3">
              <h1>Total Generated from Partnership</h1>
              <h2>0.00</h2>
            </span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Analytics;
