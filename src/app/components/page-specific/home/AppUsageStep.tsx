import React from 'react';
import Image from 'next/image';
import dark_sw_logo from '@assets/dark_logo_long.png'

interface AppUsageStepProps {
  stepNumber: string;
  mainAction: string;
  additionalInformation: string;
}

function AppUsageStep({
  stepNumber,
  mainAction,
  additionalInformation,
}: AppUsageStepProps) {
  return (
    <div className='flex flex-col gap-4 p-3 h-auto  bg-[#D9D9D9]'>
      <div className='flex flex-col p-4 gap-2 w-[250px] h-[250px] rounded-full shadow-lg'>
        <div className='w-[90px] h-[60px] flex'>
          <Image
            alt='dark school wallet logo'
            src={dark_sw_logo}
            className=' flex h-full w-full'
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      <div className='flex items-center gap-2 w-full tracking-wider px-2 py-[2px]'>
        <span className='w-2 md:w-[61px] h-2 md:h-[61px] rounded-full text-center text-[10px] md:p-2 p-1 text-white bg-[#003148]'>
          {stepNumber}
        </span>
        <span className='flex items-center text-[11px] md:text-[14.5px] leading-[18.15px] text-[#1E1E1E] '>
          <span className='text-[#003148]'>{mainAction}</span>
          {additionalInformation}
        </span>
      </div>
    </div>
  );
}

export default AppUsageStep;
