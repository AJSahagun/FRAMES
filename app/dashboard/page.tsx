import SideBar from "@/app/_components/dashboard-page/SideBar";
import React from 'react';
import { poppins } from "../fonts";
import Clock from "@/app/_components/dashboard-page/Clock";
import * as echarts from 'echarts';
import ChartWrapper from "../_components/dashboard-page/ChartWrapper";



export default function Dashboard() {
  return(
    <>
    <SideBar/>

    <div className="w-4/5 ml-80">

      <div className="flex flex-row">
        <h1 className={`${poppins.className} inline-flex text-primary font-semibold text-5xl pt-7 pl-7
        `}>
          Dashboard
        </h1>

        <input type="text" placeholder="Search" className="mx-auto h-8 rounded-lg border-none bg-sf mt-9 mr-14 placeholder:text-sm  " />
      </div>

      <div className="flex flex-row">
        <div className="w-1/2">
          <div className="w-3/5 bg-accent flex flex-row rounded-xl p-3 ml-11 mt-7 shadow-md">
            <div className={`${poppins.className} text-white font-semibold text-7xl pl-7 `}>10</div>
            <div className={`${poppins.className} text-white text-sm`}>out of 250</div>
            <div className="text-white place-self-end ml-20 ">Occupants</div>
          </div>
        </div>

        <div className="w-1/2 flex justify-center">
          <div className="mt-6 mr-18">
          <Clock/>
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="flex flex-col min-h-[29rem] rounded-lg mx-12 mt-6 pb-7 pt-3 bg-white shadow-lg">
        <div className="flex ml-6 mb-2 font-semibold text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
          Check-ins


        </div>

        {/* title */}
        <div className="flex flex-row pl-12 py-2 text-sm bg-accent text-white">
          <div className="w-1/4">Date/Time</div>
          <div className="w-2/4">Name</div>
          <div className="w-1/4">Program</div>
        </div>

      </div>

    </div>
    </>
  );

}