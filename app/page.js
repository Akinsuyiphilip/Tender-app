import Image from "next/image";
import { Orbitron } from "next/font/google";
import { Archivo } from "next/font/google";
import { Rubik } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });
const archivo = Archivo({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className=" w-full h-screen bg-[url('/LoginBG.svg')] bg-backgd bg-cover bg-center">
        <div className=" flex justify-center m-auto ">
          <div className=" w-3/6 h-screen   text-white">
            <div className="flex flex-col ">
              {/* Login account box */}
              <div className="flex flex-col mt-40 mx-40">
                {/* big text */}
                <div>
                  <h2
                    className={`${archivo.className} flex justify-center place-content-center items-center text-center text-3xl text-title font-bold`}
                  >
                    Developer Login
                  </h2>
                  <p
                    className={`${rubik.className} text-gray mt-2 font-thin text-xl text-center`}
                  >
                    Log in to your developer dashboard
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

                <p className="mt-4 text-right text-lightBlu">
                  Forgot Password?
                </p>

                {/* login button */}
                <div className="flex justify-center bg-neon text-black w-full p-3 mt-6 rounded-full font-semibold">
                  <a
                    href="http://"
                    className={`${rubik.className} flex justify-center items-center  w-full text-xl `}
                  >
                    Login
                  </a>
                </div>
              </div>

              <div className="flex justify-center mt-40 items-center">
                <Image
                  src="/Tenderlogo.svg"
                  height={40}
                  width={40}
                  alt="logo"
                />
                <h2
                  className={`${orbitron.className} pl-3 text-2xl font-bold text-white`}
                >
                  Tender
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
