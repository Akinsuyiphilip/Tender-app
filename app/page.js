import Image from "next/image";
import { Orbitron } from "next/font/google";
import { Archivo } from "next/font/google";
import { Rubik } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });
const archivo = Archivo({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export default function SignupPage() {
  return (
    <main className="flex min-h-screen flex-row">
      {/* first half of the screen */}
      <div className=" w-screen-1/2 h-screen bg-[url('/signup.svg')] bg-cover bg-center">
        <div className=" flex flex-col ml-28 mt-16 gap-y-96 ">
          <div className="flex items-center">
            <Image src="/Tenderlogo.svg" height={40} width={40} alt="logo" />
            <h2
              className={`${orbitron.className} pl-3 text-2xl font-bold text-neonLogo`}
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
      <div className=" w-screen-1/2 h-screen bg-white bg-cover bg-center text-black">
        <div className="flex flex-col mt-16 mx-20">
          {/* login button div*/}
          <div className=" flex justify-end">
            <a
              href="http://"
              className=" text-left rounded-full border-2 border-solid border-line  bg-skylighter py-2 px-7"
            >
              Login
            </a>
          </div>

          {/* create account box */}
          <div className="flex flex-col justify-center place-content-center items-center text-center mt-40 w-3/4 mx-auto">
            {/* big text */}
            <div>
              <h2
                className={`${archivo.className} text-3xl text-title font-bold`}
              >
                Create Your Account
              </h2>
              <p className={`${rubik.className} text-gray mt-2 font-thin`}>
                Join Tender to make payments
              </p>
            </div>
            {/* button divs */}
            <div className="bg-neonLogo w-3/5 p-3 mt-6 rounded-full font-semibold">
              <a href="http://">Sign Up with Email</a>
            </div>
            <p
              className={`${archivo.className} text-xl text-black mt-24 font-bold`}
            >
              or
            </p>
            <div className="flex justify-center bg-black text-white w-3/5 p-3 mt-6 rounded-lg font-semibold">
              <a
                href="http://"
                className={`${rubik.className} flex gap-3 justify-center items-center  w-full text-sm `}
              >
                <Image
                  src="/AppleLogo.svg"
                  height={24}
                  width={24}
                  alt="appleicon"
                />
                Sign In with Apple
              </a>
            </div>
            <div className="flex justify-center bg-white text-black w-3/5 p-3 mt-6 rounded-lg font-semibold shadow-frw">
              <a
                href="http://"
                className={`${rubik.className} flex gap-3 justify-center items-center  w-full text-sm `}
              >
                <Image
                  src="/GoogleLogo.svg"
                  height={24}
                  width={24}
                  alt="GoogleIcon"
                />
                Sign In with Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
