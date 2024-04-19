/**import React from 'react';
import Image from 'next/image';
import Register from '../page';
import RegHeader from '../../_components/registration/RegHeader';
import Card from '@/app/_components/registration/Card';

export default function CheckInfo() {
  return (
    <>
      <RegHeader/>
      <div className="w-full relative">
        <div className="flex rounded-lg mx-28 mt-10 pb-10 bg-white shadow-md" id="card">
          <div className="flex flex-col w-full mt-12 ml-12 gap-2">
            <input type="text" className="rounded-md bg-sf pl-5 pr-12 py-2" style={{width: '800px'}}/>
            <input type="text" className="rounded-md bg-sf pl-5 pr-10 py-2" style={{width: '800px'}}/>
            <input type="text" className="rounded-md bg-sf pl-5 pr-10 py-2" style={{width: '800px'}}/>
            
            <div className="flex">
              <input type="text" className="rounded-md bg-sf pl-5 pr-10 py-2" style={{width: '395px', marginRight: '10px'}}/>
              <input type="text" className="rounded-md bg-sf pl-5 pr-10 py-2" style={{width: '395px', backgroundColor: '#252339'}}/>
            </div>
            <br /> 
            
            <select className="rounded-md bg-sf pl-5 pr-10 py-2" style={{marginRight: '50px'}}>
            </select>
            
            <select className="rounded-md bg-sf pl-5 pr-10 py-2" style={{marginRight: '50px'}}>
            </select>
            
            <div className="flex">
              <input type="checkbox" id="confirmationCheckbox"/>
              <label htmlFor="confirmationCheckbox" style={{color: '#C30D26'}}>  I hereby certify that the information in this form is complete, true and correct.</label>
            </div>

            <div className="flex justify-end">
              <button className="rounded-md bg-transparent border border-black text-black px-4 py-2 mr-4" style={{width: '250px', height: '50px', fontWeight: '600' }}>EDIT</button>
              <button className="rounded-md bg-transparent text-white px-4 py-2" style={{width: '250px', height: '50px', backgroundColor: '#C30D26' , fontWeight: '600' , marginRight: '50px'}}>CONFIRM</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}**/

/**import React from 'react';
import Image from 'next/image';
import Register from '../page';
import RegHeader from '../../_components/registration/RegHeader';
import Card from '@/app/_components/registration/Card';
export default function CheckInfo() {
  return (
    <>
      <RegHeader/>
      <div className="w-full relative">
        <div className="flex rounded-lg mx-4 md:mx-28 mt-10 pb-10 bg-white shadow-md" id="card">
          <div className="flex flex-col w-full mx-4 mt-10 md:mx-12 gap-2" style={{justifyContent: 'space-between', maxWidth: '100%'}}> 
            <div className="flex flex-row gap-3">

              <div className="flex flex-col gap-2" style={{width: '80%'}}>
                <input type="text" className="rounded-md bg-sf pl-5 pr-12 py-2" style={{width: '100%'}}/>

                <input type="text" className="rounded-md bg-sf pl-5 pr-10 py-2" style={{width: '100%'}}/>

                <input type="text" className="rounded-md bg-sf pl-5 pr-10 py-2" style={{width: '100%'}}/>

                <input type="text" className="rounded-md bg-sf pl-5 pr-10 py-2" style={{width: '100%', backgroundColor: '#252339'}}/>

                <label style={{fontSize:'12px'}}>SR-CODE</label>

              </div>
              
         
              <div className="flex rounded-lg" id="photo-card" style={{ width: '20%', backgroundColor: 'rgba(105, 149, 204, 0.15)' }}>
              </div>

            </div>
            <div className="flex flex-col pt-5 gap-2">
              <select className="rounded-md bg-sf pl-5 pr-10 py-2" style={{width: '100%'}}>
              </select>
              <select className="rounded-md bg-sf pl-5 pr-10 py-2" style={{width: '100%'}}>
              </select>
            </div>
            
            <div className="flex">
              <input type="checkbox" id="confirmationCheckbox"/>
              <label htmlFor="confirmationCheckbox" style={{color: '#C30D26', fontSize: '10px'}}>I hereby certify that the information in this form is complete, true and correct.</label>
            </div>

            <div className="flex justify-end">
              <button className="rounded-md bg-transparent border border-black text-black px-4 py-2 mr-4 md:mr-5 md:ml-4" style={{maxWidth: '250px', width: '70%', height: '50px', fontWeight: '600' }}>EDIT</button>
              <button className="rounded-md bg-transparent text-white px-4 py-2" style={{maxWidth: '250px', width:'70%', height: '50px', backgroundColor: '#C30D26', fontWeight: '600' }}>CONFIRM</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}*/

import React from 'react';
import Image from 'next/image';
import Register from '../page';
import RegHeader from '../../_components/registration/RegHeader';
import Card from '@/app/_components/registration/Card';
export default function CheckInfo() {
  return (
    <>
      <RegHeader/>
      <div className="w-full relative">
        {/*Card Size */}
        <div className="flex rounded-lg mx-4 md:mx-28 mt-10 pb-10 bg-white shadow-md" id="card">
          {/*For the whole input fields */}
          <div className="flex flex-col w-full mx-4 mt-10 md:mx-12 gap-2" style={{justifyContent: 'space-between'}}> 
           
           {/**Class for the picture and the first four input fields */}
           <div className="w-full relative">
              {/**Class for the picture*/}
              <div className="lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-3/12 lg:max-w-full lg:px-4">
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
                  <input type="text" className="rounded-md bg-sf pl-5 pr-12 py-2 lg:pr-10 lg:w-full" />

                  <input type="text" className="rounded-md bg-sf pl-5 pr-12 py-2 lg:pr-10 lg:w-full" />

                  <input type="text" className="rounded-md bg-sf pl-5 pr-12 py-2 lg:pr-10 lg:w-full" />

                  <input type="text" className="rounded-md bg-sf pl-5 pr-12 py-2 lg:pr-10 lg:w-full" style={{ backgroundColor: '#252339' }} />

                  <label style={{ fontSize: '12px' }}>SR-CODE</label>
                </div>
              </div>
            </div>

            <div className="flex flex-col pt-5 gap-2">
              <select className="rounded-md bg-sf pl-5 pr-10 py-2" style={{width: '100%'}}>
              </select>
              <select className="rounded-md bg-sf pl-5 pr-10 py-2" style={{width: '100%'}}>
              </select>
            </div>
            
            <div className="flex">
              <input type="checkbox" id="confirmationCheckbox"/>
              <label htmlFor="confirmationCheckbox" style={{color: '#C30D26', fontSize: '10px'}}>I hereby certify that the information in this form is complete, true and correct.</label>
            </div>

            <div className="flex justify-end">
              <button className="rounded-md bg-transparent border border-black text-black px-4 py-2 mr-4 md:mr-5 md:ml-4" style={{maxWidth: '250px', width: '70%', height: '50px', fontWeight: '600' }}>EDIT</button>
              <button className="rounded-md bg-transparent text-white px-4 py-2" style={{maxWidth: '250px', width:'70%', height: '50px', backgroundColor: '#C30D26', fontWeight: '600' }}>CONFIRM</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}