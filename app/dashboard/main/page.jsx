"use client";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import { Archivo } from "next/font/google";
import { Rubik } from "next/font/google";
import SideComponent from "../../components/sidecomponet";
import Lhart from "../../components/LineChart";
import Table from "../../components/Table";

const orbitron = Orbitron({ subsets: ["latin"] });
const archivo = Archivo({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export default function Dashboard() {
  const nextDatasets = [];

  return (
    <main className="min-h-screen w-full bg-blurwhite flex flex-row pb-3">
      <div className="w-textbox h-sidebarheight">
        <SideComponent />
      </div>
      {/* main dashboard */}
      <div className=" text-black w-4/5 mt-5 mx-10">
        {/* header div */}
        <div className="flex flex-row justify-between items-center w-full">
          <h2 className="font-bold text-xl">Dashboard</h2>
          <div className="flex flex-row items-center py-3 px-4 w-96 text-center bg-white rounded-lg">
            <img src="/searchIcon.svg" alt="" />
            <p className=" text-gray pl-3">Search anything</p>
          </div>
        </div>

        {/* top section div  */}
        <section className=" mt-10 flex flex-row justify-between">
          {/* first sidde */}
          <div className={`${rubik.className} w-1/2 `}>
            {/* top of first side */}
            <div className={`flex flex-row `}>
              <div className=" bg-white rounded-lg flex flex-col  p-3 w-sem mr-6">
                <div className=" bg-greens p-3 rounded-lg">
                  <p className=" text-2xl  font-semibold">$107,216</p>
                  <p className=" text-sm mb-5 font-thin">Total Transaction</p>
                  <p className="flex flex-row text-green1 text-sm ">
                    {" "}
                    <img src="/greenArrow.svg" alt="" className=" pr-2" /> 6.9%
                  </p>
                </div>
                <div className="flex flex-row justify-between my-5 ">
                  <div className=" flex flex-row ">
                    <p className="text-sm">Today</p>
                    <img src="/chevron-down.svg" alt="" />
                  </div>
                  <div className=" flex flex-row w-24 rounded-lg justify-between bg-lemon py-1 px-2 ">
                    <p className="text-sm">See All</p>
                    <img src="/arrow-right.svg" alt="" />
                  </div>
                </div>
              </div>
              {/* 2nd */}
              <div className=" bg-white rounded-lg flex flex-col  p-3 w-sem">
                <div className=" bg-lightyellow p-3 rounded-lg">
                  <p className=" text-2xl  font-semibold">$107,216</p>
                  <p className=" text-sm mb-5 font-thin">Total Transaction</p>
                  <p className="flex flex-row text-green1 text-sm ">
                    {" "}
                    <img src="/greenArrow.svg" alt="" className=" pr-2" /> 6.9%
                  </p>
                </div>
                <div className="flex flex-row justify-between my-5 ">
                  <div className=" flex flex-row ">
                    <p className="text-sm">Today</p>
                    <img src="/chevron-down.svg" alt="" />
                  </div>
                  <div className=" flex flex-row w-24 rounded-lg justify-between bg-lemon py-1 px-2 ">
                    <p className="text-sm">See All</p>
                    <img src="/arrow-right.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* second part */}
            <div className="bg-white w-full mt-6 h-pieheight p-2 rounded-lg ">
              <div className="flex flex-row justify-between mx-3 ">
                <p className="text-sm">Most Used Chain</p>
                <div className=" flex flex-row w-32 justify-end">
                  <p className="text-sm pr-2 text-gray">This Week</p>
                  <img src="/chevron-down.svg" alt="" />
                </div>
              </div>

              <div className=" flex flex-row mt-6 mx-5 ">
                <div>
                  <img src="/pieChart.svg" alt="piechart" />
                </div>
                <div className="w-full flex flex-col gap-y-5 mt-5 ml-5">
                  <div className="testxadncolor flex flex-row justify-between">
                    <p className="text-sm flex items-center">
                      <img src="/EllipseBlue.svg" alt="" className=" pr-2" />
                      Ethereum Network (ERC 20)
                    </p>
                    <p className=" text-gray">45%</p>
                  </div>

                  <div className="testxadncolor flex flex-row justify-between">
                    <p className="text-sm flex items-center">
                      <img src="/EllipseCyan.svg" alt="" className=" pr-2" />
                      Binance Smart Chain (BNB)
                    </p>
                    <p className=" text-gray">25%</p>
                  </div>

                  <div className="testxadncolor flex flex-row justify-between">
                    <p className="text-sm flex items-center">
                      <img src="/EllipseYellow.svg" alt="" className=" pr-2" />
                      Avax C-Chain
                    </p>
                    <p className=" text-gray">15%</p>
                  </div>

                  <div className="testxadncolor flex flex-row justify-between">
                    <p className="text-sm flex items-center">
                      <img src="/EllipseRed.svg" alt="" className=" pr-2" />
                      Polygon Network
                    </p>
                    <p className=" text-gray">15%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* second side */}
          <div className=" w-lite">
            {/* top part */}
            <div className="bg-white w-full h-pieheight p-2 rounded-lg ">
              <div className="flex flex-row justify-between mx-3 ">
                <p className="text-sm">Most Used Chain</p>
                <div className=" flex flex-row w-32 justify-end">
                  <p className="text-sm pr-2 text-gray">This Week</p>
                  <img src="/chevron-down.svg" alt="" />
                </div>
              </div>
              <div className=" flex flex-row mt-6 mx-5 ">{/* <Lhart /> */}</div>
            </div>
            {/* lower part */}

            <div className=" bg-white h-limeheight p-4 rounded-lg mt-8">
              <p>Sales</p>

              <div className="bosexs flex flex-row justify-between w-full mt-5">
                <div className="bg-lightgrayng py-3 px-4 h-20 border-solid border-2 border-borderlighgray rounded-lg ">
                  <p>Monday</p>
                  <p>$4,200</p>
                </div>

                <div className="bg-lightgrayng py-3 px-4 h-20 border-solid border-2 border-borderlighgray rounded-lg ">
                  <p>Monday</p>
                  <p>$4,200</p>
                </div>

                <div className="bg-lightgrayng py-3 px-4 h-20 border-solid border-2 border-borderlighgray rounded-lg ">
                  <p>Monday</p>
                  <p>$4,200</p>
                </div>

                <div className="bg-lightgrayng py-3 px-4 h-20 border-solid border-2 border-borderlighgray rounded-lg ">
                  <p>Monday</p>
                  <p>$4,200</p>
                </div>
                <div className="bg-lightgrayng py-3 px-4 h-20 border-solid border-2 border-borderlighgray rounded-lg ">
                  <p>Monday</p>
                  <p>$4,200</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* table section */}
        <section className=" mt-10 flex flex-col justify-between bg-white p-7">
          <div className="flex flex-row justify-between w-full my-6">
            <p className="text-xl font-semibold">Recent Transactions</p>
            <div className=" flex flex-row items-center">
              <p className="text-sm">Today</p>
              <img src="/chevron-down.svg" alt="" />
            </div>
          </div>
          <Table />
        </section>
      </div>
    </main>
  );
}
