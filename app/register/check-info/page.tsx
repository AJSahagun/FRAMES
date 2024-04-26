import React from 'react';
import Image from 'next/image';
import Register from '../page';
import Link from 'next/link';
import BSU_FSLogo from '@/app/_components/BSU_FSLogo';
import { noto_sans, poppins } from '@/app/fonts';

export default function CheckInfo() {
  return (
    <>
      <div className="w-full relative bg-background">
        {/**Logos */}
        <div className="w-full flex justify-center md:justify-start">
          <Image className= "w-4/5 ml-2 pt-16 min-[425px]:w-3/5 min-[425px]:mb-3 md:w-1/3 md:pt-20 md:ml-16 lg:w-2/5 lg:pl-18 xl:pl-20 xl:w-1/3 xl:pt-10 "
          src="/logos/FRAMES_title-logo.png"
          alt="FRAMES title logo"
          width={400}
          height={0}
          />

          <BSU_FSLogo className="top-0 right-0 absolute hidden md:block md:top-0 xl:top-0" />
        </div>

        {/*Card Size */}
        <div className="flex rounded-lg mx-4 md:mx-28 mt-10 pb-10 bg-white shadow-md" id="card">
          {/*For the whole input fields */}
          <div className="flex flex-col w-full mx-4 mt-10 md:mx-12 gap-2" style={{justifyContent: 'space-between'}}> 
           
           {/**Class for the picture and the first four input fields */}
           <div className="w-full relative">
              {/**Class for the picture*/}
              <div className="md: lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-3/12 lg:max-w-full lg:px-4">
                <Image
                  className="object-cover w-60 h-56 rounded shadow-lg"
                  src="/library.jpg"
                  alt="Picture of Scanned Face"
                  width={1100}
                  height={868}
                />
              </div>

                {/**Class for the input fields*/}
              <div className="lg:w-9/12">
                <div className="flex flex-col gap-2">
                  <input type="text" className="rounded-md bg-sf pl-5 pr-12 py-2 lg:pr-10 lg:w-full border-none" />

                  <input type="text" className="rounded-md bg-sf pl-5 pr-12 py-2 lg:pr-10 lg:w-full border-none" />

                  <input type="text" className="rounded-md bg-sf pl-5 pr-12 py-2 lg:pr-10 lg:w-full border-none" />

                  <input type="text" className="rounded-md bg-sf pl-5 pr-12 py-2 lg:pr-10 lg:w-full border-none" style={{ backgroundColor: '#252339' }} />

                  <label style={{ fontSize: '12px' }}>SR-CODE</label>
                </div>
              </div>
            </div>

            <div className="flex flex-col pt-5 gap-2">
              <select className="rounded-md bg-sf pl-5 pr-10 py-2 border-none" style={{width: '100%'}}>
              </select>
              <select className="rounded-md bg-sf pl-5 pr-10 py-2 border-none" style={{width: '100%'}}>
              </select>
            </div>
            
            <div className="flex">
              <input type="checkbox" id="confirmationCheckbox"/>
              <label htmlFor="confirmationCheckbox" style={{color: '#C30D26', fontSize: '10px'}}>I hereby certify that the information in this form is complete, true and correct.</label>
            </div>

            <div className="flex flex-col items-center lg:flex-row lg:justify-end">
              <button className="rounded-md bg-transparent border border-black text-black px-4 py-2 mb-2 lg:mb-0 lg:mr-4 lg:ml-4 pb-2 lg:pb-0 lg:mr-0" style={{ fontWeight: '600', maxWidth: '350px', width: '100%', height: '50px' }}>EDIT</button>
              <button className="rounded-md bg-transparent text-white px-4 py-2" style={{backgroundColor: '#C30D26', fontWeight: '600', maxWidth: '350px', width: '100%', height: '50px'}}>CONFIRM</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}