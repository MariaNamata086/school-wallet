"use client"

import Image from 'next/image';
import swDarkLogo from '@assets/sw_darklogo.png'
import React from 'react';
import Link from 'next/link';
import HomeNav from './components/page-specific/home/HomeNav';
import HomeHeader from './components/page-specific/home/HomeHeader';

// export default function Home() {
  
//   return (
//     <main className='flex flex-col bg-[#003148] items-center justify-center p-10 gap-8'>
//       <div className='h-[250px] w-[250px]'>
//         <Image
//           alt='school-wallet image'
//           src={swDarkLogo}
//           className=' flex h-full w-full'
//           style={{ objectFit: 'contain' }}
//         />
//       </div>
//       <div className='flex flex-col gap-3 h-[200px] w-[200px] items-center justify-center rounded-full border-[1px] border-slate-700 p-10 text-white tracking-wider'>
//         <span className='text-[13px]'>Welcome to</span>
//         <span className='text-[18px] font-semibold'>CASH DASH</span>
//         <span className='text-center text-[13px]'>School Wallet System</span>
//       </div>
//       <Link
//         href='/authentication/login'
//         className='w-[400px] h-[40px] p-6 rounded-lg hover:scale-105 bg-[#04c1ce] text-md flex justify-center tracking-wider items-center'
//       >
//         Login
//       </Link>
//       <Link
//         href='/authentication/signup'
//         className='w-[400px] h-[40px] p-6 rounded-lg hover:scale-105 bg-[#04c1ce] text-md flex justify-center tracking-wider items-center'
//       >
//         Sign up
//       </Link>
//     </main>
//   );
// }
export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center gap-10'>
      <div className='flex flex-col w-full'>
        <HomeNav />
        <HomeHeader/>
      </div>
      <div className='flex flex-col gap-8 px-20 justify-center items-center'></div>
    </main>
  )
}