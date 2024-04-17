import React from 'react';
import Link from 'next/link';
import { noto_sans, poppins } from '../fonts';
import Image from 'next/image';
import BSU_FSLogo from '../_components/BSU_FSLogo';


export default function InputInfo() {
  return (
    <div className="w-full relative bg-background">

      <div className="w-full flex justify-center md:justify-start">
        <Image className= "w-4/5 ml-2 pt-16 min-[425px]:w-3/5 min-[425px]:mb-3 md:w-1/3 md:pt-20 md:ml-16 lg:w-30 lg:pl-28"
        src="/logos/FRAMES_title-logo.png"
        alt="FRAMES title logo"
        width={400}
        height={0}
        />

        <BSU_FSLogo className="top-0 right-0 absolute hidden md:block md:top-0l" />
      </div>

      {/* card */}
      <div className="flex flex-col rounded-3xl mx-6 pb-7 bg-white shadow-md min-[425px]:mx-10 sm:mx-6 
      md:mx-14 md:pb-12 md:pt-10 md:mt-9
      lg:mx-20 lg:pb-10 lg:rounded-2xl">


        <div className="relative flex flex-col justify-center h-10 ml-5 mr-5 mt-2 gap-2 min-[424px]:px-4
        md:flex-row-reverse md:gap-6
        lg:mt-16 lg:ml-16 lg:mr-16 ">

          <input type="text" placeholder="SR-CODE"
          className="w-auto rounded-lg bg-sf border-none mt-7 pl-5 pr-5 py-1 placeholder:text-xs placeholder-gray-400 border-1
          md:placeholder:text-sm md:py-2 md:mt-0 md:w-1/3
          lg:1/2 lg:h-12 lg:rounded-2xl" />

          <input type="text" placeholder="First Name"
          className="w-auto rounded-lg bg-sf border-none pl-5 pr-5 py-1 placeholder:text-xs placeholder-gray-400
          md:placeholder:text-sm md:py-2 md:w-full
          lg:w-1/2 lg:h-12 lg:rounded-2xl "/>
        </div>


        <div className="relative flex flex-col mt-16 ml-5 mr-5 gap-2 min-[424px]:px-4
        md:mt-4 md:gap-4 md:w-35
        lg:mt-16 lg:ml-16 lg:mr-16 lg:gap-3">

          <input type="text" placeholder="Middle Name"
          className="rounded-lg bg-sf border-none mt-1 pl-5 pr-5 py-1 placeholder:text-xs placeholder-gray-400
          
          md:placeholder:text-sm md:py-2 md:mt-0 md:

          lg:w-4/5 lg:h-12 lg:rounded-2xl" />

          <input type="text" placeholder="Last Name"
          className="rounded-lg bg-sf border-none pl-5 pr-5 py-1 placeholder:text-xs placeholder-gray-400
          md:placeholder:text-sm md:py-2
          lg:w-4/5 lg:h-12 lg:rounded-2xl" />
        </div>


        {/* dropdown menu */}
        <div className="flex items-center md:mt-4 ">

          <div className="w-full flex flex-col pl-5 pr-5 gap-2 lg:gap-3 mt-8">

            <button type="button"
            className="flex text-left items-center bg-sf rounded-lg pl-5 pr-5 py-2  text-gray-400 text-xs min-[424px]:mx-4 
            md:text-sm md:py-2
            lg:h-12 lg:rounded-2xl">
              Select College Department

              <svg
              className="h-4 w-1/10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.7"
              stroke="currentColor"
              >
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>


            <button type="button"
            className="flex text-left items-center bg-sf rounded-lg pl-5 pr-5 py-2 text-gray-400 text-xs min-[424px]:mx-4 md:text-sm md:py-2 lg:h-12 lg:rounded-2xl">
              Select College Program
              <svg
              className="h-4 w-1/10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.7"
              stroke="currentColor"
              >
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>

            </button>

          </div>

        </div>

        <div className="flex flex-row ">

          <h1 className="hidden md:flex font-semibold text-tc text-5xl uppercase ml-12 mt-10">
            Visitor <br/> Information
          </h1>

          <div className="w-full flex md:content-end md:justify-end md:pr-9 md:mt-14 ">
          <Link
                href="/register/input-face"
                className={`${poppins.className} inline-flex items-center justify-center h-9 px-6 mt-8 mx-auto text-sm uppercase font-semibold tracking-wide text-white transition duration-200 rounded-xl shadow-md bg-primary hover:bg-red-800 focus:shadow-outline focus:outline-none w-4/5 
                md:mx-0 md:rounded-2xl `}
              >
                Next
          </Link>
            
          </div>
          
        </div>



      </div>


    <h1 className={`${poppins.className} flex w-full justify-center mt-6 text-textcolor opacity-40 text-xs md:hidden  `}>
      Foster Wheeler - Alangilan
    </h1>



    </div>

  );
}
