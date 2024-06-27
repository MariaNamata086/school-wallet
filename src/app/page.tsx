import Image from 'next/image';
import peoplelogo1 from '@assets/people.png';
import peoplelogo2 from '@assets/people1.png';
import React from 'react';
import Link from 'next/link';
import HomeNav from './components/page-specific/home/HomeNav';
import HomeHeader from './components/page-specific/home/HomeHeader';
import AppUsageStep from './components/page-specific/home/AppUsageStep';
import Footer from './components/shared/Footer';

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
    <main className='flex flex-col items-center justify-center gap-10 tracking-wider'>
      <div className='flex flex-col w-full'>
        <HomeNav />
        <HomeHeader />
      </div>
      <div className='flex flex-col gap-8 px-20 py-6 justify-center items-center h-auto'>
        <span className=' text-[#1E1E1E] text-30px leading-[36.31px]'>
          Cash Dash is for all
        </span>
        <div className='flex flex-row items-center h-[99px] w-[105px]'>
          <Image
            alt='people svg'
            src={peoplelogo2}
            style={{ objectFit: 'contain' }}
          />
          <Image
            alt='people svg'
            src={peoplelogo1}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <span className='text-center text-[45px] leading-[54.46px] text-[#1E1E1E]'>
          Parents and Guardians
        </span>
        <p className='flex items-center text-[13px] text-[#1E1E1E] text-center leading-[30.26px]'>
          Do you know why we have{' '}
          <span className='font-semibold'>over 5k active</span> accounts
          countrywide?
        </p>
        <Link
          className='text-[15px] md:text-[20px] text-center tracking-wider w-[150px] h-[42px] px-4 py-2 text-[#003148] border-[1px] border-[#53C9EB] rounded-xl hover:scale-105'
          href='/'
        >
          Learn More
        </Link>
      </div>
      <div className='flex flex-col gap-6 py-6 px-12 h-[800px] bg-[#D9D9D9] tracking-wider'>
        <span className='text-[#003148] text-[20px] lg:text-[27px] leading-[36.31px]'>
          Cash Dash links Parents and Students
        </span>
        <div className='flex flex-col gap-8 w-full h-auto'>
          <span className='underline text-[12px] md:text-[14px] leading-[18.15px] text-[#003148]'>
            Dear Parent:
          </span>
          <div className='flex items-center justify-between w-full'>
            <AppUsageStep
              stepNumber='01'
              mainAction='Sign up'
              additionalInformation='with your email address,phone number and password'
            />
            <AppUsageStep
              stepNumber='02'
              mainAction='Choose'
              additionalInformation='your top up channel option'
            />
            <AppUsageStep
              stepNumber='03'
              mainAction='Add student card'
              additionalInformation='and start sending them upkeep'
            />
          </div>
        </div>
        <Link
          href='/authentication/signup'
          className='text-[15px] text-center tracking-wider w-[80px] h-[28px] px-4 py-2 text-[#003148] border-[1px] border-[#53C9EB] rounded-xl hover:scale-105'
        >
          Sign Up
        </Link>
      </div>
      <Footer />
    </main>
  );
}
