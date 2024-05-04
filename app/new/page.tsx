'use client'
import React from 'react'
const page = () => {
  const faceapi = require('@vladmandic/face-api');
  
  const MODEL_URL = '/models'
  Promise.all([
    faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
    faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
    faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
    faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
  ]).then(start); 
  
  async function start() {
    const img = await faceapi.fetchImage('/photo/pitch.jpg');
    const detection=await faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors()
    // const detections2 = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
    if(detection.length==0){
      console.log("No face detected")
    }
    else{
      const yaw=Math.abs(detection[0].angle.yaw)
      const pitch=Math.abs(detection[0].angle.pitch)
      const angleCheck=checkAngle(yaw, pitch)
      
      if(angleCheck){
        if (angleCheck[0] &&angleCheck[1]) console.log("yaw and pitch")
        else if (angleCheck[0]) console.log("yaw")
        else if (angleCheck[1]) console.log("pitch") 
        else console.log("normal angle")
      }
      
      console.log(detection) 
    }
  } 



  const checkAngle=(yaw:number, pitch:number)=>{
    // constants for threshold of determining yaw & pitch
    const yawThres=80
    const pitchThres=15

    if(yaw>yawThres && pitch>pitchThres) return [true, true]
    else if(yaw>yawThres) return [true, false]
    else if(pitch>pitchThres) return [false, true]
    else return [false, false]
  }
  return (
    <div>
      <h1>Hello</h1>
      {/* <img id="myImg" src="/picc.jpg" alt="Face Detection Example" style={{ display: 'none' }} /> */}
    </div>
  )
} 

export default page