'use client'
import React, { useRef } from 'react';
import BSU_FSLogo from "@/app/_components/BSU_FSLogo";
import Link from "next/link";
import Image from "next/image";
import Webcam from "react-webcam";
import dataURLtoFile from "react-webcam";
import { createClient } from '@supabase/supabase-js';
import { useSearchParams } from 'next/navigation';
export default function Face() {
  const webcamRef = useRef<Webcam>(null);
  
  const searchParams= useSearchParams()
  const student={
    'srCode':searchParams.get('srCode'),
    'firstName':searchParams.get('firstName'),
    'middleName':searchParams.get('middleName'),
    'lastName':searchParams.get('lastName'),
  }
  const capturePhoto = React.useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();

      console.log(imageSrc);
    }
  }, [webcamRef]);
  

  // const capturePhoto = React.useCallback(async () => {
  //   if (webcamRef.current) {
  //     try {
  //       const imageSrc = webcamRef.current.getScreenshot();
  //       if (imageSrc) {
  //         const file = dataURLtoFile(imageSrc, 'captured-image.jpg');
  //         console.log('Captured image file:', file);
  //         await uploadToSupabase(file);
  //       }
  //     } catch (error) {
  //       console.error('Error capturing photo:', error);
  //     }
  //   }
  // }, [webcamRef]);


  // idk where to put this
  // const supabaseUrl = 'NEXT_PUBLIC_SUPABASE_URL';
  // const supabaseKey = 'NEXT_PUBLIC_SUPABASE_ANON_KEY';
  // const supabase = createClient(supabaseUrl, supabaseKey);

  // const uploadToSupabase = async (file: File) => {
  //   try {
  //     const { data, error } = await supabase.storage
  //       .from('bucket-name') // Replace with your Supabase storage bucket name
  //       .upload(`${Date.now()}-${file.name}`, file);
  
  //     if (error) {
  //       console.error('Error uploading image:', error);
  //     } else {
  //       console.log('Image uploaded successfully:', data);
  //     }
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //   }
  // };




  return (
    <div className="w-full min-h-screen relative bg-background">
      <div className="w-full flex md:justify-start">

        {/* link needs minor fix*/}
        <Link href="/" className="flex w-full justify-center md:justify-start">

        <Image className= "w-3/5 ml-2 pt-16 min-[425px]:w-3/5 min-[425px]:mb-3 md:w-1/3 md:pt-14 md:ml-16 lg:w-2/5 lg:pl-18 xl:pl-20 xl:w-1/4 xl:pt-10"
        src="/logos/FRAMES_title-logo.png"
        alt="FRAMES title logo"
        width={300}
        height={0}
        />
        </Link>

        <BSU_FSLogo className="top-0 right-0 absolute hidden md:block md:top-0 xl:top-0" />
      </div>

      <div className="w-full flex flex-row lg:h-[550px]">
        {/* <div className="flex w-52 h-52 mx-auto mt-6 border-2 border-gray-700 rounded-3xl bg-slate-300 " id="camera">

        </div> */}

        <Webcam
        audio={false}
        // screenshotFormat="image/jpeg"
        ref={webcamRef}
        className="flex mx-auto mt-6 border-2 border-gray-700 rounded-3xl"
        width={240}
        height={240}
        />   
      </div>

      <div>

      <button className="flex mx-auto border-2 rounded-full px-2 py-2 mt-4 hover:fill-white"
         onClick={capturePhoto}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
          </svg>


         </button>

      <Link href={{
        pathname:'/register/check-info',
        query:student
      }}>Next
      </Link>

      </div>

    </div>
  );
}