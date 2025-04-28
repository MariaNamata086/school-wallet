import React from 'react';
import Image from 'next/image';
import dark_sw_logo from '@assets/dark_logo_long.png';

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
    <div className='flex flex-col items-center gap-4 p-3 h-auto bg-[#D9D9D9]'>
      <div className='flex flex-col p-4 gap-2 items-center w-[220px] h-[220px] rounded-full shadow-xl'>
        <Image
          alt='dark school wallet logo'
          src={dark_sw_logo}
          className=' flex h-full w-full'
          style={{ objectFit: 'scale-down' }}
        />
      </div>
      <div className='flex items-center gap-2 tracking-wider px-2 py-[2px]'>
        <span className='w-6 md:w-[61px] h-6 md:h-[60px] rounded-full text-center text-[10px] md:text-[14px] pt-4 p-1 text-white bg-[#003148]'>
          {stepNumber}
        </span>
        <p className='flex w-[90%] p-3 gap2 text-[13px] md:text-[16px] leading-[18.15px] text-[#1E1E1E] '>
          <span className='text-darkblue font-semibold mr-1'>{mainAction}</span>
          {additionalInformation}
        </p>
      </div>
    </div>
  );
}

export default AppUsageStep;
