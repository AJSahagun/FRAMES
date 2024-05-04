'use client'
import React, { useRef, useState, useEffect } from 'react';
import BSU_FSLogo from "@/app/_components/BSU_FSLogo";
import Link from "next/link";
import Image from "next/image";
import Webcam from "react-webcam";
import { useRouter, useSearchParams } from 'next/navigation';
import Modal from '@/app/_components/Modal';

export default function Face() {
  const faceapi = require('@vladmandic/face-api');
  const router = useRouter(); 
  const videoRef = useRef<HTMLVideoElement>(null); // Initialize videoRef with null

  const [isOneFace, setIsOneFace] = useState(false)
  const [isSideView, setIsSideView] = useState(false)
  const [isTopView, setIsTopView] = useState(false)

  const [loading, setLoading]=useState(true)
  const [isDone, setIsDone]=useState(false)

  const [resultModal, setResultModal]= useState(false);
  const [result_header, setResultHeader] = useState(""); // State for result header
  const [result_msg, setResultMsg] = useState(""); // State for result message
  
  
  var normalEncoding:any
  var pitchEncoding:any
  var yawEncoding:any
  const searchParams= useSearchParams()

  const student={
    'srCode':searchParams.get('srCode'),
    'firstName':searchParams.get('firstName'),
    'middleName':searchParams.get('middleName'),
    'lastName':searchParams.get('lastName'),
  }
  const handleCloseModal = () => setResultModal(false)


  useEffect(()=>{
    loadModels()
  },[])

  const loadModels = () => {
    Promise.all([
      // THIS FOR FACE DETECT AND LOAD FROM YOUR PUBLIC/MODELS DIRECTORY
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
      faceapi.nets.faceExpressionNet.loadFromUri('/models')
    ]).then(() => {
      faceMyDetect();
    });
  };

  // OPEN YOU FACE WEBCAM
  const startVideo = ()=>{
    navigator.mediaDevices.getUserMedia({video:true})
    .then((currentStream)=>{
      if(videoRef.current){
        videoRef.current.srcObject = currentStream
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  function faceMyDetect(){
    const tinyFace=new faceapi.TinyFaceDetectorOptions()
    var init=true
    setInterval(async ()=> {
      if(init){
        const detection = await faceapi.detectAllFaces(await faceapi.fetchImage('/photo/normal.jpg'),tinyFace
        ).withFaceLandmarks().withFaceDescriptors()
        init=!init
        setLoading(false)
        startVideo()
      }
      else{
        const detection = await faceapi.detectAllFaces(videoRef.current,tinyFace
        ).withFaceLandmarks().withFaceDescriptors();
        if(detection.length>0){
          if(evaluateFrame(detection)){
            console.log("Normal: "+ normalEncoding)
            console.log("Yaw: "+ yawEncoding)
            console.log("Pitch: "+ pitchEncoding)
            setIsDone(true)
          }
        }
        else if(detection.length>1) console.log("double")
        else console.log("none")
        console.log(detection)
      }
    }, 1000);
    
  };


  function evaluateFrame(detection:any){
    return checkAngle(detection)
    // more constraints to put in the future
  }

  const checkAngle=(detection:any)=>{
    const yaw=Math.abs(detection[0].angle.yaw)
    const pitch=detection[0].angle.pitch
    const yawThres=80
    const pitchThres=-14

    if(normalEncoding && yawEncoding && pitchEncoding) return true
    else{
      if(yaw>yawThres){ 
        setIsSideView(true)
        yawEncoding=detection[0].descriptor
      }
      else if(pitch<pitchThres){
        setIsTopView(true)
        pitchEncoding=detection[0].descriptor
      } 
      else{
        setIsOneFace(true)
        normalEncoding=detection[0].descriptor
      }
      return false
    }
  }
  return (
    <div className="w-full min-h-screen relative bg-background">
      <div className="w-full flex md:justify-start">
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

      
      <div className="myapp grid grid-cols-10 gap-4 w-screen">
        <div className="appvide col-span-6">
          {loading ?
            <button type="button" className="bg-red-500 text-red-100 m-auto p-6" disabled>
            Loading...
            </button>:
            <video crossOrigin="anonymous" ref={videoRef} autoPlay className="w-full"></video>
          }
        </div>
        <div className="col-span-4 text-3xl">
          <h1 className="text-6xl">Face registration</h1><br/>
          <input type="checkbox" readOnly
          checked={isOneFace} // Set the checked attribute based on the isChecked state
          // onChange={handleCheckboxChange} // Handle the onChange event to update the state
          /><label>   1 face detected</label>
          <br />
          <input type="checkbox" readOnly
          checked={isSideView} // Set the checked attribute based on the isChecked state
          // onChange={handleCheckboxChange} // Handle the onChange event to update the state
          /><label>   Side view</label>
          <br />
          <input type="checkbox" readOnly
          checked={isTopView} // Set the checked attribute based on the isChecked state
          // onChange={handleCheckboxChange} // Handle the onChange event to update the state
          /><label>   Top view</label>
          <br /><br />
          <Link className="bg-red-500 text-red-100 m-auto p-6 text-xl hover:bg-cyan-600"
          href={{
            pathname:'/register/check-info',
            query:student
          }}>Next
          </Link>
        </div>
      </div>


      {resultModal && (
        <Modal header={result_header} message={result_msg} onClose={handleCloseModal}/>
      )}  
    </div>
  );
}