import React from 'react';
import Image from 'next/image';
import Register from '../page';
import RegHeader from '../../_components/registration/RegHeader';
import Card from '@/app/_components/registration/Card';


export default function InputInfo() {
  return (
    <>
    <RegHeader/>
    <div className="w-full relative">

      <div className="flex rounded-lg mx-28 mt-10 pb-10 bg-white shadow-md" id="card">
        <div className="flex flex-col w-full mt-12 ml-12 mr-14 gap-2">
        <input type="text" placeholder="First Name" className="rounded-md bg-sf pl-5 pr-12 py-2" />

        <input type="text" placeholder="Middle Name" className="rounded-md bg-sf pl-5 pr-10 py-2" />

        <input type="text" placeholder="Last Name" className="rounded-md bg-sf pl-5 pr-10 py-2" />

        </div>

        <div className="flex flex-col">
          <input type="text" placeholder="SR-CODE" className="rounded-md bg-sf mt-12 ml-8 mr-12 pl-5 pr-10 py-2" />
        </div>

      </div>


    </div>

    </>
  );
}
