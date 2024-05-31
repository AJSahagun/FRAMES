'use client'
import React, { useRef, useState, useEffect } from 'react';
import BSU_FSLogo from "@/app/_components/BSU_FSLogo";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Modal from '@/app/_components/Modal';
import { Router } from 'lucide-react';
import { poppins } from '@/app/fonts';

export default function Face() {
  const faceapi = require('@vladmandic/face-api');
  const router = useRouter(); 
  const videoRef = useRef<any>(null); // Initialize videoRef with null
  const streamRef = useRef<any>(null);

  const [isOneFace, setIsOneFace] = useState(false)
  const [isSideView, setIsSideView] = useState(false)
  const [isTopView, setIsTopView] = useState(false)

  const [loading, setLoading]=useState(true)
  const [isDone, setIsDone]=useState(false)

  const [result, setResult] = useState(true); // State for result header
  const [resultModal, setResultModal]= useState(false);
  const [result_header, setResultHeader] = useState(""); // State for result header
  const [result_msg, setResultMsg] = useState(""); // State for result message
  
  
  const [normalEncoding, setNormalEncoding] = useState(null);
  const [pitchEncoding, setPitchEncoding] = useState(null);
  const [yawEncoding, setYawEncoding] = useState(null);
  // const [realtime, setRealtime] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);



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
    ]).then(faceMyDetect);
  };

  // OPEN YOU FACE WEBCAM
  const startVideo = ()=>{
    navigator.mediaDevices.getUserMedia({video:true})
    .then((currentStream)=>{
      if(videoRef.current){
        videoRef.current.srcObject = currentStream
        streamRef.current = currentStream;
      }
    })
    .catch((err)=>{
      setModalTrigger("Error", "There's an error accessing your camera, reload the page", false)
    })
  }
  // const stopCamera = () => {
  //   if (videoRef.current) {
  //     const tracks = videoRef.current.getTracks();
  //     tracks.forEach(track => track.stop()); // Stop all tracks in the stream
  //     videoRef.current = null; // Reset the stored stream reference
  //   }
  // };


  function faceMyDetect(){
    const tinyFace=new faceapi.TinyFaceDetectorOptions()
    var init=true
    const realtime=setInterval(async ()=> {
      if(buttonClicked){
        clearInterval(realtime);
        return false
      }
      if(init){
        const detection = await faceapi.detectAllFaces(await faceapi.fetchImage('/photo/init.jpg'),tinyFace
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
            setIsDone(true)
          }
        }
        // else if(detection.length>1) console.log("double")
        // else console.log("none")
        // console.log(detection)
      }
    }, 1000)
  };
  function evaluateFrame(detection:any){
    return checkAngle(detection)
    // more constraints to put in the future
  }
  const checkAngle = (detection: any) => {
    const yaw = Math.abs(detection[0].angle.yaw);
    const pitch = detection[0].angle.pitch;
    const yawThres = 80;
    const pitchThres = -10;
  
    // Check if all encodings are not null
    if (normalEncoding !== null && yawEncoding !== null && pitchEncoding !== null) {
      return true;
    } else {
      // Update encodings based on conditions
      if (yaw > yawThres) {
        setIsSideView(true);
        setYawEncoding(detection[0].descriptor);
      } else if (pitch < pitchThres) {
        setIsTopView(true);
        setPitchEncoding(detection[0].descriptor);
      } else {
        setIsOneFace(true);
        setNormalEncoding(detection[0].descriptor);
      }
      return false;
    }
  };
  const setModalTrigger = (header:string, msg:string, isSuccess:boolean) =>{
    setResult(isSuccess)
    setResultHeader(header); 
    setResultMsg(msg); 
    setResultModal(true);
  }
  function submitInfo(){
    setButtonClicked(true)
    const student = JSON.parse(sessionStorage.getItem('student') || '{}');
    student["normal"]=normalEncoding
    student["pitch"]=pitchEncoding
    student["yaw"]=yawEncoding
    sessionStorage.setItem('student', JSON.stringify(student));
    router.push("/register/check-info")
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
          {/* {isDone && 
            
          } */}
          <button onClick={submitInfo}
            className={`${poppins.className} inline-flex items-center justify-center h-9 px-6 mt-8 mx-auto text-sm uppercase font-semibold tracking-wide text-white transition duration-200 rounded-lg shadow-md bg-primary hover:bg-red-800 focus:shadow-outline focus:outline-none w-4/5
            md:mx-0 md:rounded-xl
            lg:h-12 lg:text-lg xl:text-2xl xl:h-12 xl:w-2/5 xl:mr-24`}
            >Next
          </button>
        </div>
      </div>


      {resultModal && (
        <Modal header={result_header} message={result_msg} onClose={handleCloseModal}/>
      )}  
    </div>
  );
}