import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import school_wallet_logo from '@assets/light_logo_long.png';

function Homenav() {
  return (
    <nav className='flex p-4 items-center justify-between h-[80px] bg-white'>
      <Link href='/' className=''>
        <Image
          src={school_wallet_logo}
          alt='Project logo'
          //   className=' flex h-full w-full'
          style={{ objectFit: 'contain' }}
        />
      </Link>

      <div className='flex items-center justify-around'>
        <Link
          href='/authentication/signup'
          className='text-[15px] text-center tracking-wider w-[80px] h-[28px] px-4 py-2 text-[#003148] border-[1px] border-[#53C9EB] rounded-xl hover:scale-105'
        >
          Sign Up
        </Link>
        <Link
          href='/authentication/login'
          className='text-[15px] text-center tracking-wider w-[80px] h-[28px] px-4 py-2 bg-[#003148] text-white border-[1px]  rounded-xl hover:scale-105'
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Homenav;
