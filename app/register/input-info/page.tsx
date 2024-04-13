import React from 'react';
import Image from 'next/image';

export default function InputInfo() {
  return (
    <div className='bg-cover bg-secondary items-center'>
      <Image
        src="/logos/FRAMES_title logo.png"
        alt="alt"
        width={300}
        height={75}
      />

      <div className='bg-secondary rounded '>
        <p className='text-foreground'>test</p>
      </div>
    </div>
  );
}
