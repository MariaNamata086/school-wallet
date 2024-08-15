import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import school_wallet_logo from '@assets/light_logo_long.png';

function Homenav() {
  return (
    <nav className='flex p-4 items-center justify-between h-[80px] bg-white'>
      <Link href='/' className='md:px-8'>
        <Image
          src={school_wallet_logo}
          alt='Project logo'
          //   className=' flex h-full w-full'
          style={{ objectFit: 'contain' }}
        />
      </Link>

      <div className='flex mt-4 md:mt-0 items-center gap-8 justify-between'>
        <Link
          // href='/authentication/signup'
          href='/others'
          className='text-[15px] text-center tracking-wider h-auto py-1 px-4  text-[#003148] border-[1px] border-[#53C9EB] rounded-full w-[100px] md:w-[120px] hover:scale-105'
        >
          Sign Up
        </Link>
        <Link
          href='/authentication/login'
          className='text-[15px] text-center tracking-wider md:w-[120px]  h-auto py-1 px-4  bg-[#003148] text-white border-[1px]  rounded-full hover:scale-105'
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Homenav;
