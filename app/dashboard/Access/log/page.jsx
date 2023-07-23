"use client";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import { Archivo } from "next/font/google";
import { Rubik } from "next/font/google";
import SideComponent from "../../../components/sidecomponet";
import Table from "../../../components/Logtable";

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
          <h2 className="font-bold text-xl">Access Control</h2>
          <div className="flex flex-row items-center py-3 px-4 w-96 text-center bg-white rounded-lg">
            <img src="/searchIcon.svg" alt="" />
            <p className=" text-gray pl-3">Search anything</p>
          </div>
        </div>

        {/* top section div  */}
        <section className=" mt-10 flex flex-row justify-between">
          {/* first sidde */}
          <div className="flex flex-row justify-between items-center  text-center rounded-lg  my-4 w-3/6 border-solid border border-borderlighgray">
            <div className="w-1/3  p-2 text-gray "> Merchants</div>
            <div className="w-1/3  p-2  text-gray ">KYC</div>
            <div className="bg-white w-1/3 shadow-mer p-2 rounded-lg font-semibold">
              Logs
            </div>
          </div>
        </section>

        {/* table section */}
        <section className=" mt-10 flex flex-col justify-between rounded-lg bg-white p-7">
          <div className="flex flex-row justify-between w-full mb-5">
            <p className="text-xl font-semibold">Login Sessions</p>
            <div className=" flex flex-row items-center">
              <p className="text-sm text-gray">This week</p>
              <img src="/chevron-down.svg" alt="" />
            </div>
          </div>
          <Table />
        </section>
      </div>
    </main>
  );
}
