// "use client";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import { Archivo } from "next/font/google";
import { Rubik } from "next/font/google";
import SideComponent from "../../components/sidecomponet";
import Table from "../../components/marketable";

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
            <div className="bg-white w-1/3 shadow-mer p-2 rounded-lg font-semibold">
              Merchants
            </div>
            <div className="w-1/3  p-2 text-gray">KYC</div>
            <div className="w-1/3  p-2 text-gray">Logs</div>
          </div>
        </section>
        <section>
          <div className="flex flex-row justify-between w-full my-6">
            <p className="text-xl font-semibold">All Merchants</p>
            <div className=" flex flex-row justify-between ">
              <div className=" flex flex-row items-center pr-10">
                <div className="flex flex-row justify-between p-2 bg-white w-36 rounded-lg border border-grat border-solid">
                  <p>filter</p>
                  <Image
                    src="/filtericon.svg"
                    width={20}
                    height={50}
                    alt="filter"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center p-2 w-60 text-center border-grat border bg-white rounded-lg">
                <Image
                  src="/graysearchicon.svg"
                  width={20}
                  height={50}
                  alt=""
                />
                <p className=" text-gray pl-3 text-sm">Search anything</p>
              </div>
            </div>
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
