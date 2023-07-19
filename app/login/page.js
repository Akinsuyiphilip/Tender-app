import Image from "next/image";
import { Orbitron } from "next/font/google";
import { Archivo } from "next/font/google";
import { Rubik } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });
const archivo = Archivo({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-row">
      {/* first half of the screen */}
      <div className=" w-screen-1/2 h-screen bg-[url('/Loginpage.svg')] bg-cover bg-center">
        <div className=" flex flex-col ml-28 mt-16 gap-y-96 ">
          <div className="flex items-center">
            <Image src="/Tenderlogo.svg" height={40} width={40} alt="logo" />
            <h2
              className={`${orbitron.className} pl-3 text-2xl font-bold text-white`}
            >
              Tender
            </h2>
          </div>
          <div className="mt-20">
            <h2
              className={`${archivo.className}  text-4xl w-2/3 font-bold leading-11 text-white`}
            >
              Super Charge your Payments with Crypto
            </h2>
            <p
              className={`${archivo.className}  text-2xl tracking-wide mt-6 w-textbox font-thin  text-white`}
            >
              Tender unlocks the power of seamless payment for your business
              with our customized POS for accepting any crypto payments from
              your consumers.
            </p>
          </div>
        </div>
      </div>
      {/* second part */}
      <div className=" w-screen-1/2 h-screen bg-backgd  text-black">
        <div className="flex flex-col mt-16 mx-12">
          {/* login button div*/}
          <div className=" flex justify-end">
            <a
              href="http://"
              className=" text-left rounded-full border-2 border-solid border-line  bg-skylighter py-2 px-7"
            >
              Sign Up
            </a>
          </div>

          {/* Login account box */}
          <div className="flex flex-col mt-40 mx-40">
            {/* big text */}
            <div>
              <h2
                className={`${archivo.className} flex justify-center place-content-center items-center text-center text-3xl text-title font-bold`}
              >
                Login
              </h2>
              <p
                className={`${rubik.className} text-gray mt-2 font-thin text-xl text-center`}
              >
                Access your Merchant Dashboard{" "}
              </p>
            </div>
            {/* email divs */}
            <div
              className={`${rubik.className} flex flex-col items-start text-left gap-y-4 `}
            >
              <label htmlFor="MyEmail" className=" text-lg mt-9">
                Email address
              </label>
              <input
                type="email"
                placeholder="enter your email"
                className=" py-3 px-5 bg-white rounded-lg w-full"
              />
            </div>

            {/* passwor */}
            <div
              className={`${rubik.className} flex flex-col items-start text-left gap-y-4 `}
            >
              <label htmlFor="MyEmail" className=" text-lg mt-9">
                Password{" "}
              </label>
              <input
                type="email"
                placeholder="enter your Password"
                className=" py-3 px-5 bg-white rounded-lg w-full"
              />
            </div>

            <p className="mt-4 text-right text-blue">Forgot Password?</p>

            {/* login button */}
            <div className="flex justify-center bg-black text-white w-full p-3 mt-6 rounded-full font-semibold">
              <a
                href="http://"
                className={`${rubik.className} flex justify-center items-center  w-full text-xl `}
              >
                Login
              </a>
            </div>

            <p className="text-center text-gray mt-7 ">
              Don’t have an account? <span className="text-blue">Sign up </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
