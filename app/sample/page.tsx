'use client'

import { variableGrads } from '@tensorflow/tfjs-core';
import React, { useEffect, useRef, useState } from 'react';

function App() {
  const faceapi = require('@vladmandic/face-api');
  const MODEL_URL = '/models'
  const videoRef = useRef<HTMLVideoElement>(null); // Initialize videoRef with null
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isOneFace, setIsOneFace] = useState(false)
  const [isSideView, setIsSideView] = useState(false)
  const [isTopView, setIsTopView] = useState(false)

  const [loading, setLoading]=useState(true)

  // LOAD FROM USEEFFECT
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

  async function faceMyDetect(){
    const detections = await faceapi.detectAllFaces(await faceapi.fetchImage('/photo/normal.jpg'), new faceapi.TinyFaceDetectorOptions()
          ).withFaceLandmarks().withFaceDescriptors()
    setLoading(false)
    startVideo()
    setInterval(async()=> {
      const detections = await faceapi.detectAllFaces(videoRef.current,new faceapi.TinyFaceDetectorOptions()
      ).withFaceLandmarks().withFaceDescriptors();
      if(detections.length>0){
        console.log(detections)
      } 
      console.log(detections)
    }, 1000);
    
  };
  return (
    <div className="myapp grid grid-cols-10 gap-4 w-screen">
      <div className="appvide col-span-6">
        
        {loading ?
          <button type="button" className="bg-red-500 text-red-100 m-auto p-6" disabled>
          Processing...
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

      </div>
    </div>
  );
}

export default App;
