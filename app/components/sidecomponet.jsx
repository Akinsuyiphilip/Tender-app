import { Rubik } from "next/font/google";
import Link from "next/link";
const rubik = Rubik({ subsets: ["latin"] });

export default function SideComponent() {
  return (
    <>
      {/* This is the side component. It's on the left of main content! */}

      <div className="bg-ashluxebg h-sidebarheight w-full">
        <div className="flex flex-col w-full pt-5">
          {/* logo div  */}
          <div className="flex flex-row place-items-center justify-center mx-auto">
            <img src="/ashluxelogo.svg" alt="ashlux logo" className="pr-4" />
            <h2 className={`${rubik.className} text-2xl`}>Ashluxe</h2>
          </div>
          <div className="flex flex-col  mx-auto w-4/6 mt-16 gap-y-5">
            <Link
              href="/"
              className=" p-3 rounded-lg bg-neon items-center  text-black text-lg font-semibold flex flex-row"
            >
              <img src="/dashlogo.svg" alt="logo" className="pr-2 " />
              Dashboard
            </Link>
            <Link
              href="/"
              className="p-3 rounded-lg text-neon items-center  text-black text-lg font-semibold flex flex-row"
            >
              <img src="/acceslogo.svg" alt="logo" className="pr-2 " />
              Access Control
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-spage">
          <img src="/line1.svg" alt="" />

          <div className="flex flex-row mt-4">
            <img src="/Tenderlogo.svg" alt="logo" />
            <h2 className={`${rubik.className} text-3xl font-semibold pl-2`}>
              Tender
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
