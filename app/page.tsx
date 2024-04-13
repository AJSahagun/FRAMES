import { poppins } from "./fonts";
import Link from "next/link";
import Image from "next/image";

export default async function LandingPage() {
  return (
    <div className="w-full relative flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <Image
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="/library.jpg"
          alt="Picture of Batangas State University - Alangilan Campus Library"
          width={1157}
          height={868}
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <h2 className={`${poppins.className} mb-5 text-3xl font-medium tracking-tight sm:text-6xl sm:leading-none`}>
              Access the 
            <br className="hidden md:block" />
              Campus Library{' '}
            <span className="inline-block text-400">
              Seamlessly
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base font-light md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <div className="flex items-center">
            <Link
              href="/register"
              className={`${poppins.className} inline-flex items-center justify-center h-12 px-6 mr-6 uppercase font-semibold tracking-wide text-white transition duration-200 rounded shadow-md bg-red-400 hover:bg-red-700 focus:shadow-outline focus:outline-none`}
            >
              Register Now
            </Link>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-red-700"
            >
              Learn more
            </Link>
          </div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-light tracking-wider">
            Powered by Techtonic
          </p>
        </div>
      </div>
    </div>
  );
}
