// "use client";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import { Archivo } from "next/font/google";
import { Rubik } from "next/font/google";
import SideComponent from "../../../components/sidecomponet";
import Table from "../../../components/Table";

const orbitron = Orbitron({ subsets: ["latin"] });
const archivo = Archivo({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export default function Dashboard() {
  return (
    <main className="min-h-screen w-full bg-blurwhite flex flex-row pb-3">
      <div className="w-textbox h-sidebarheight">
        <SideComponent />
      </div>
      {/* main dashboard */}
      <div className=" text-black w-4/5 mt-5 mx-10">
        {/* header div */}
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row items-center ">
            <a>
              <img src="/backArrow.svg" alt="" className=" pr-2" />
            </a>
            <h2 className="font-bold text-xl">Merchant</h2>
          </div>
          <div className="flex flex-row items-center py-3 px-4 w-96 text-center bg-white rounded-lg">
            <img src="/searchIcon.svg" alt="" />
            <p className=" text-gray pl-3">Search anything</p>
          </div>
        </div>

        <section className=" mt-10 mb-8  flex flex-row justify-between h-litheight">
          {/* first sidde */}
          <div className={`${rubik.className} w-1/3 h-full`}>
            {/* top of first side */}
            <div className=" bg-white rounded-lg flex flex-col p-3 w-sem mr-6 h-full">
              <div className="flex flex-row place-items-end items-end w-full ">
                <div className=" bg-greens p-2 w-20 rounded-lg">
                  <p className=" text-sm text-green-500 text-center font-semibold">
                    Active
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center my-5 ">
                <div className=" flex flex-col items-center  ">
                  <a>
                    {" "}
                    <Image
                      src="/profile.svg"
                      width={150}
                      height={150}
                      alt="profile"
                      className="mb-4"
                    />
                  </a>
                  <p className="text-gray">Unique ID: JKYSUOI348</p>
                </div>
              </div>
              {/* contacts icon */}
              <div className="ml-8 ">
                <div className="flex flex-row items-center mb-4">
                  <Image
                    src="/Profileicon.svg"
                    width={20}
                    height={20}
                    alt="profileimage"
                  />
                  <p className="ml-2">Amadi Bimpe</p>
                </div>
                <div className="flex flex-row items-center mb-4">
                  <Image
                    src="/messageicon.svg"
                    width={20}
                    height={20}
                    alt="messageicon"
                  />
                  <p className="ml-2">daniels_kunle78@hotmail.com</p>
                </div>
                <div className="flex flex-row items-center mb-4">
                  <Image
                    src="/callicon.svg"
                    width={20}
                    height={20}
                    alt="callicon"
                  />
                  <p className="ml-2">+234 8122344342</p>
                </div>
                <div className="flex flex-row items-center mb-4">
                  <Image
                    src="/locationicon.svg"
                    width={20}
                    height={20}
                    alt="locationicon"
                  />
                  <p className="ml-2">Ogbomoso</p>
                </div>
              </div>
            </div>
          </div>

          {/* second side */}
          <div className=" w-2/3">
            <div className="flex flex-row justify-between  rounded-lg mb-4">
              <div className=" w-48 bg-white h-auto p-2 rounded-lg">
                <div className=" w-full bg-greens h-full p-2 rounded-lg">
                  <p className=" text-xl  font-semibold">2,420</p>
                  <p className=" text-sm mt-2 mb-5 font-thin text-gray">
                    Total Customers
                  </p>
                  <p className="flex flex-row text-green1 text-sm ">
                    {" "}
                    <img src="/greenArrow.svg" alt="" className=" pr-2" /> 20%
                  </p>
                </div>
              </div>
              <div className=" w-48 bg-white h-auto p-2 rounded-lg">
                <div className=" w-full bg-greens h-full p-2 rounded-lg">
                  <p className=" text-xl  font-semibold">2,420</p>
                  <p className=" text-sm mt-2 mb-5 font-thin text-gray">
                    Total Customers
                  </p>
                  <p className="flex flex-row text-green1 text-sm ">
                    {" "}
                    <img src="/greenArrow.svg" alt="" className=" pr-2" /> 20%
                  </p>
                </div>
              </div>
              <div className=" w-48 bg-white h-auto p-2 rounded-lg">
                <div className=" w-full bg-greens h-full p-2 rounded-lg">
                  <p className=" text-xl  font-semibold">2,420</p>
                  <p className=" text-sm mt-2 mb-5 font-thin text-gray">
                    Total Customers
                  </p>
                  <p className="flex flex-row text-green1 text-sm ">
                    {" "}
                    <img src="/greenArrow.svg" alt="" className=" pr-2" /> 20%
                  </p>
                </div>
              </div>
              <div className=" w-48 bg-white h-auto p-2 rounded-lg">
                <div className=" w-full bg-greens h-full p-2 rounded-lg">
                  <p className=" text-xl  font-semibold">2,420</p>
                  <p className=" text-sm mt-2 mb-5 font-thin text-gray">
                    Total Customers
                  </p>
                  <p className="flex flex-row text-green1 text-sm ">
                    {" "}
                    <img src="/greenArrow.svg" alt="" className=" pr-2" /> 20%
                  </p>
                </div>
              </div>
            </div>
            {/* top part */}
            <div className="bg-white w-full h-80 mt-8 p-2 rounded-lg ">
              <div className="flex flex-row justify-between mx-3 ">
                <p className="text-lg font-semibold">Sales</p>
                <div className=" flex flex-row w-32 items-center justify-end">
                  <p className="text-sm pr-2 text-gray">This Week</p>
                  <img src="/chevron-down.svg" alt="" />
                </div>
              </div>
              <div className=" flex flex-row justify-center items-center mt-2 mx-3 h-pieheight ">
                <p className=" text-gray">Nothing to show yet</p>
              </div>
            </div>
            {/* lower part */}
          </div>
        </section>

        {/* table section */}
        <section className=" mt-2 flex flex-col justify-between bg-white p-7">
          <Table />
        </section>
      </div>
    </main>
  );
}
