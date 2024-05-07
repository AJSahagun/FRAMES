'use client'
import SideBar from "@/app/_components/dashboard-page/SideBar";
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import {poppins } from "@/app/fonts";

export default function LibrarySchedule() {

    return(
        <>
            <SideBar/>
            <div className="flex w-full relative flex-row mt-5" style = {{width: '100%'}}>
                <div style = {{width: '20%'}}>    
                </div>
                <div className = "mb-10 ml-10"style = {{width: '45%'}}>  
                    <div className = "mb-10">
                        <h1 style = {{color: '#C30D26', fontWeight: '600', fontSize: '45px'}}> Visitor History </h1>
                    </div>
                    <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                    weekends={false}
                    />  
                </div>
                <div className = "flex flex-col ml-10 mt-20" style = {{width: '20%'}}>
                    <div className = "mt-5">
                        <h1 style = {{color: '#C30D26', fontWeight: '600', fontSize: '35px'}}> Special Events </h1>
                    </div>
                    <div className=  {`${poppins.className} flex rounded-lg mt-6 bg-white shadow-md flex-col`} id="card"
                     style = {{width: '100%' , height: '150px'}}>
                        <div className={`${poppins.className} flex rounded-sm shadow-md justify-content-center items-center pl-10`} id="cardTitles" style={{ backgroundColor: '#252339', color: 'white', height: '40px', width: '100%' }}>
                            <h1 className = "pl-7">Campus Book Fair</h1>
                        </div>
                        <div className = "flex flex-col ml-20 mt-4">
                            <h1> May 08, 2024</h1>
                            <h1> Wednesday</h1>
                            <h1> 7:00 am - 10:00 am</h1>
                        </div>

                    </div>
                </div>
                        
                    </div>
           
        </>
    );
}
