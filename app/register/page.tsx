'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { poppins } from '../fonts';
import Image from 'next/image';
import BSU_FSLogo from '../_components/BSU_FSLogo';
import { DeptDropdown, ProgramDropdown } from '../_components/registration/Dropdowns';


export default function InputInfo() {
  const [selectedDept, setSelectedDept] = useState('');

  const handleDeptChange = (dept: string) => {
    setSelectedDept(dept);
  };

  return (
    <div className="w-full relative bg-background ">

      <div className="w-full flex justify-center md:justify-start">

        {/* link needs minor fix */}
        <Link href="/" className="flex w-full justify-center md:justify-start">

        <Image className= "w-3/5 ml-2 pt-16 min-[425px]:w-3/5 min-[425px]:mb-3 md:w-1/3 md:pt-14 md:ml-16 lg:w-2/5 lg:pl-18 xl:pl-20 xl:w-1/4 xl:pt-10"
        src="/logos/FRAMES_title-logo.png"
        alt="FRAMES title logo"
        width={400}
        height={0}
        />
        </Link>

        <BSU_FSLogo className="top-0 right-0 absolute hidden md:block md:top-0 xl:top-0" />
      </div>

      {/* card */}
      <div className="flex flex-col rounded-xl mx-6 pb-7 pt-4 bg-white shadow-md min-[425px]:mx-10 sm:mx-6
      md:mx-14 md:pb-8 md:pt-7 md:mt-4
      lg:mt-0 lg:pt-0 lg:mx-28 lg:pb-10 lg:rounded-2xl xl:pb-14 xl:mx-44 xl:pt-0">

        <div className={`${poppins.className} md:hidden  text-tc text-xl font-bold mx-auto mb-3 `}>
          Register
        </div>

        <div className="relative flex flex-col justify-center h-10 ml-7 mr-7 mt-2 gap-2 min-[424px]:px-4
        md:flex-row-reverse md:gap-6
        lg:mt-16 lg:ml-12 lg:mr-12 lg:pt-0 xl:mt-14">

          <input
          maxLength={8}
          type="number" placeholder="SR-CODE"
          className="w-auto rounded-md bg-sf border-none mt-7 pl-5 pr-5 py-2 text-xs text-accent
          placeholder:text-xs placeholder-gray-400 border-1
          md:placeholder:text-sm md:py-2 md:mt-0 md:w-1/3
          lg:h-12 lg:ml-0 lg:rounded-lg xl:text-lg xl:mr-3  " />

          <input type="text" placeholder="First Name"
          className="w-auto rounded-md bg-sf border-none pl-5 pr-5 py-2 text-xs text-accent
          placeholder:text-xs placeholder-gray-400
          md:placeholder:text-sm md:py-2 md:w-full
          lg:w-2/3 lg:h-12 lg:rounded-lg lg:mr-6 xl:mr-16"/>
        </div>

        <div className="relative flex flex-col mt-9 ml-7 mr-7 gap-2 min-[424px]:px-4
        md:mt-4 md:gap-4 md:w-35
        lg:mt-5 lg:ml-12 lg:gap-3">

          <input type="text" placeholder="Middle Name"
          className="rounded-md bg-sf border-none mt-1 pl-5 pr-5 py-2 text-xs text-accent
          placeholder:text-xs placeholder-gray-400
          md:placeholder:text-sm md:py-2 md:mt-0 md:
          lg:w-3/5 lg:h-12 lg:rounded-lg" />

          <input type="text" placeholder="Last Name"
          className="rounded-md bg-sf border-none pl-5 pr-5 py-2 text-xs text-accent
          placeholder:text-xs placeholder-gray-400
          md:placeholder:text-sm md:py-2
          lg:w-3/5 lg:h-12 lg:rounded-lg" />
        </div>


        {/* dropdown menu */}
        <div className="flex items-center min-[424px]:px-4 md:mt-4 xl:mr-3">
          <ProgramDropdown/>
        </div>

        <div className="flex flex-row ">

          <h1 className="hidden md:flex font-semibold text-tc text-5xl uppercase ml-12 mt-7 lg:ml-20 xl:text-6xl xl:ml-18">
            Visitor <br/> Information
          </h1>

          <div className="w-full flex md:content-end md:justify-end md:pr-9 md:mt-14 ">
          <Link
                href="/register/input-face"
                className={`${poppins.className} inline-flex items-center justify-center h-9 px-6 mt-8 mx-auto text-sm uppercase font-semibold tracking-wide text-white transition duration-200 rounded-lg shadow-md bg-primary hover:bg-red-800 focus:shadow-outline focus:outline-none w-4/5
                md:mx-0 md:rounded-xl
                lg:h-12 lg:text-lg xl:text-2xl xl:h-12 xl:w-2/5 xl:mr-24`}
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
