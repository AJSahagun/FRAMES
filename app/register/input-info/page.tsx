import React from 'react'
import Image from 'next/image'


export default async function InputInfo() {

  return (
    <div className='bg-gray-400'>
      <Image
      src="/public/logos/FRAMES_title logo.png"
      alt="alt"
      width={300}
      height={75} />
    </div>
  )

}