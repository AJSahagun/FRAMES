'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Register from '../page';
import Link from 'next/link';
import BSU_FSLogo from '@/app/_components/BSU_FSLogo';
import { noto_sans, poppins } from '@/app/fonts';
import { useRouter, useSearchParams } from 'next/navigation'; 
import { supabase } from '@/lib/supabase';
import { AnyARecord } from 'dns';
import Modal from '@/app/_components/Modal';

export default function CheckInfo() {
  const [editable, setEditable] = useState(false);
  const [resultModal, setResultModal]= useState(false);
  const router = useRouter(); 

  // variables for dynamic modal
  const [result, setResult] = useState(true); // State for result header
  const [result_header, setResultHeader] = useState(""); // State for result header
  const [result_msg, setResultMsg] = useState(""); // State for result message

  // for input fields
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [srCode, setSrCode] = useState('');
  const [normalEncoding, setNormalEncoding] = useState('');
  const [pitchEncoding, setPitchEncoding] = useState('');
  const [yawEncoding, setYawEncoding] = useState('');

  useEffect(() => {
    readStudent()
  },[]);
  
  const readStudent=()=>{
    const student = JSON.parse(sessionStorage.getItem('student') || '{}');
    setFirstName(student['firstName'])
    setMiddleName(student['middleName'])
    setLastName(student['lastName'])
    setSrCode(student['srCode'])

    setNormalEncoding(student['normal'])
    setPitchEncoding(student['pitch'])
    setYawEncoding(student['yaw'])
  }
  
  const handleEditClick = () => {
    setEditable(!editable); 
  };

  const handleCloseModal = () => {
    setResultModal(false);
    if(result) router.push('/') 
  };
  const setModalTrigger = (header:string, msg:string, isSuccess:boolean) =>{
    setResult(isSuccess)
    setResultHeader(header); // Set result header state
    setResultMsg(msg); 
    setResultModal(true);
  }


  // for supabase to insert data
  const insertRegistration = async() =>{
    try {
      const { data, error } = await supabase
      .from("Student")
      .insert({
        sr_code: srCode,
        first_name: firstName,
        middle_name: middleName,
        last_name: lastName,
        department:'CICS',
        program: 'Compsci',
        face_encoding: {
          'normal': normalEncoding,
          'pitch': pitchEncoding,
          'yaw': yawEncoding
        },
      })

      // console.log(JSON.stringify(normalEncoding))
      if(error) throw error
      else setModalTrigger("Success", "Your registration has been completed successfully.", true)
    } 
    catch (e:any) {
      if (e.code === '23505') {
        setModalTrigger("Sr-code already exists", "Please input unique sr-code. If you think this is a problem, please contact the admin.", false)

      } else {
        setModalTrigger("Error", "There's an error, please contact the admin.", false)
      }
    }

    
    
  }


  return (
    <>
      <div className="w-full relative bg-background">
        {/* Logos */}
        <div className="w-full flex justify-center md:justify-start">
          <Image
            className="w-4/5 ml-2 pt-16 min-[425px]:w-3/5 min-[425px]:mb-3 md:w-1/3 md:pt-20 md:ml-16 lg:w-2/5 lg:pl-18 xl:pl-20 xl:w-1/3 xl:pt-10"
            src="/logos/FRAMES_title-logo.png"
            alt="FRAMES title logo"
            width={400}
            height={0}
          />

          <BSU_FSLogo className="top-0 right-0 absolute hidden md:block md:top-0 xl:top-0" />
        </div>

        {/* Card Size */}
        <div className="flex rounded-lg mx-4 md:mx-28 mt-10 pb-10 bg-white shadow-md" id="card">

          {/* For the whole input fields */}
          <div className="flex flex-col w-full mx-4 mt-10 md:mx-12 gap-2" style={{ justifyContent: 'space-between' }}> 

            {/* Class for the picture and the first four input fields */}
            <div className="w-full relative">

              {/* Class for the picture */}
              <div className="flex justify-center items-center mb-4 md: lg: mt-0 lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-3/12 lg:max-w-full lg:px-4">
                <Link href="/register/input-face">
                  <Image
                    className="object-cover w-60 h-56 rounded shadow-lg cursor-pointer"
                    src="/library.jpg"
                    alt="Picture of Scanned Face"
                    width={1100}
                    height={868}
                  /> 
                </Link>
              </div>

              {/* Class for the input fields */}
              <div className="lg:w-9/12">

                <div className="flex flex-col gap-2">
                  <input value={firstName} onChange={(e)=>setFirstName(e.target.value)}
                    type="text" 
                    className="rounded-md bg-sf pl-5 pr-12 py-2 lg:pr-10 lg:w-full border-none"
                    disabled={!editable} // Disable based on the editable state
                  />

                  <input
                    type="text" value={middleName} onChange={(e)=>setMiddleName(e.target.value)}
                    className="rounded-md bg-sf pl-5 pr-12 py-2 lg:pr-10 lg:w-full border-none"
                    disabled={!editable} // Disable based on the editable state
                  />

                  <input
                    type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}
                    className="rounded-md bg-sf pl-5 pr-12 py-2 lg:pr-10 lg:w-full border-none"
                    disabled={!editable} // Disable based on the editable state
                  />

                  <input
                    type="text" value={srCode} onChange={(e)=>setSrCode(e.target.value)}
                    className="rounded-md bg-sf pl-5 pr-12 py-2 lg:pr-10 lg:w-full border-none text-white"
                    style={{ backgroundColor: '#252339' }}
                    disabled={!editable} // Disable based on the editable state
                  />

                  <label style={{ fontSize: '12px' }}>SR-CODE</label>
                </div>
              </div>
            </div>

            <div className="flex flex-col pt-5 gap-2">
              <select className="rounded-md bg-sf pl-5 pr-10 py-2 border-none" style={{ width: '100%' }} disabled={!editable}>
              </select>
              <select className="rounded-md bg-sf pl-5 pr-10 py-2 border-none" style={{ width: '100%' }} disabled={!editable}>
              </select>
            </div>
            
            <div className="flex items-center">
              <input type="checkbox" id="confirmationCheckbox" className="mr-2" />
              <label htmlFor="confirmationCheckbox" className="mt-1 md:mt-0 lg:mt-0" style={{ color: '#C30D26', fontSize: '10px' }}>I hereby certify that the information in this form is complete, true and correct.</label>
            </div>

            <div className="flex flex-col items-center lg:flex-row lg:justify-end">
              <button
                className="rounded-md bg-transparent border border-black text-black px-4 py-2 mb-2 lg:mb-0 lg:mr-4 lg:ml-4 pb-2 lg:pb-0 lg:mr-0 flex items-center justify-center"
                style={{ fontWeight: '600', maxWidth: '380px', width: '100%', height: '50px' }}
                onClick={handleEditClick}
              >
                {editable ? 'CANCEL' : 'EDIT'}
              </button>

              <button
                className={`${poppins.className} rounded-md bg-transparent text-white px-4 py-2 flex justify-center items-center lg:ml-4`}
                style={{ backgroundColor: '#C30D26', fontWeight: '600', maxWidth: '380px', width: '100%', height: '50px' }}
                onClick={insertRegistration}
              >
                CONFIRM
              </button>
            </div>
            
           

            {resultModal && (
              <Modal header={result_header} message={result_msg} onClose={handleCloseModal}/>
            )}  


          </div>
        </div>
      </div>
    </>
  );
}