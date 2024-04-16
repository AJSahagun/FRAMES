import React from 'react';
import RegHeader from '../_components/registration/RegHeader';
import Link from 'next/link';
import { poppins } from '../fonts';


export default function InputInfo() {
  return (
    <>
    <RegHeader className="" />
    <div className="w-full relative">

      <div className="flex h-auto rounded-lg mx-6 mt-5 pb-7 bg-white shadow-md sm:mx-6 md:mx-14 lg:mx-28 " id="card">

        <div className="flex flex-col w-full mt-9 ml-5 mr-6 gap-2">
          <input type="text" placeholder="First Name" className="rounded-lg bg-sf pl-5 pr-5 py-2" />

          <input type="text" placeholder="Middle Name" className="rounded-lg bg-sf pl-5 pr-5 py-2" />

          <input type="text" placeholder="Last Name" className="rounded-lg bg-sf pl-5 pr-5 py-2" />

          <input type="text" placeholder="SR-CODE" className="rounded-lg bg-sf pl-5 pr-5 py-2" />


          <div className="flex flex-col gap-2 mt-8">
            <button type="button"
            className="text-left flex bg-sf rounded-lg pl-5 pr-5 py-2 text-black text-opacity-30 ">
              Select College Department
            <svg
            className="h-6 w-1/6 right-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            >
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            </button>

            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>

              {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
              {/* <div className="py-1" role="none">
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1}id="menu-item-0">CICS</a>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">CAFAD</a>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">CoE</a>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">CIT</a>
              
              </div> */}

            </div>



            <button type="button"
          className=" text-left flex bg-sf rounded-lg pl-5 pr-5 py-2 text-black text-opacity-30 ">
              Select College Program
            <svg
            className="w-1/6 h-6 relative justify-end"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            >
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

            </button>
          </div>

          <div className="">
          <Link
                href="/register"
                className={`${poppins.className} w-full inline-flex items-center justify-center h-12 px-6 mt-8 mr-6 uppercase font-semibold tracking-wide text-white transition duration-200 rounded-lg shadow-md bg-primary hover:bg-red-800 focus:shadow-outline focus:outline-none`}
              >
                Next
          </Link>
          </div>


        </div>




      </div>


    </div>

    </>
  );
}
