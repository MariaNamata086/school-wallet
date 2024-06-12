import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import mobile_device_user from '@assets/mobile_device_user.png'

function HomeHeader() {
  return (
    <div className='h-[400px] w-full relative tracking-wider'>
      <div className='z-20 text-slate-800 h-full bg-[#003148]/30 w-full absolute flex flex-col gap-10'>
        <p className='text-white text-[40px] font-semibold text-center leading-10'>
          Dash Your Child Pocket Money Online!
        </p>
        <Link
          href='/authentication/signup'
          className='w-[200px] h-[40px] px-4 py-2 rounded-full border-[#53C9EB] text-white  bg-[#003148] text-[30px] text-center font-bold'
        >
          Sign Up for free
        </Link>
      </div>
      <Image
        src={mobile_device_user}
        alt='image of a mobile device user'
        className='flex h-full w-full -l-[3px]'
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}

export default HomeHeader