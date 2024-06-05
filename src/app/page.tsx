"use client"

import Image from 'next/image';
import swDarkLogo from '@assets/sw_darklogo.png'
import React from 'react';
import Link from 'next/link';

// export default function Home() {
//   const [submitting, setSubmitting] = useState(false);

//   const handleSubmit = () => {
//     setSubmitting(true);

//     // setTimeout((()=> setSubmitting(false)),5000)
//   }
//   return (
//     <main className='flex flex-col items-center gap-10  px-20 py-10 bg-white h-full '>
//       <div className='flex flex-col gap-8 justify-center items-center text-slate-700'>
//         <div className='flex h-[220px] w-[220px] rounded-full justify-center items-center bg-slate-100 p-2'>
//           <Image
//             src={school_logo}
//             className='h-[200px] w-[200px] -mt-4'
//             alt='school logo'
//           />
//         </div>
//         <span className='tracking-wider font-semibold text-xl'>
//           Pals Legacy Junior School
//         </span>
//       </div>
//       <div className='flex flex-col gap-5 text-slate-700 shadow-lg p-8 rounded-md'>
//         <p className=''>Please enter your student Wallet number to login</p>
//         <FormInput type='text' />
//         <Button
//           type='submit'
//           textColor='text-white'
//           onClick={handleSubmit}
//           loading={submitting}
//           textSize='text-[16px]'
//         >
//           Login
//         </Button>
//       </div>
//     </main>
//   );
// }
export default function Home() {
  
  return (
    <main className='flex flex-col bg-[#003148] items-center justify-center p-10 gap-8'>
      <div className='h-[250px] w-[250px]'>
        <Image
          alt='school-wallet image'
          src={swDarkLogo}
          className=' flex h-full w-full'
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className='flex flex-col gap-3 h-[200px] w-[200px] items-center justify-center rounded-full border-[1px] border-slate-700 p-10 text-white tracking-wider'>
        <span className='text-[13px]'>Welcome to</span>
        <span className='text-[18px] font-semibold'>CASH DASH</span>
        <span className='text-center text-[13px]'>School Wallet System</span>
      </div>
      <Link
        href='/authentication/login'
        className='w-[400px] h-[40px] p-6 rounded-lg hover:scale-105 bg-[#04c1ce] text-md flex justify-center tracking-wider items-center'
      >
        Login
      </Link>
      <Link
        href='/authentication/signup'
        className='w-[400px] h-[40px] p-6 rounded-lg hover:scale-105 bg-[#04c1ce] text-md flex justify-center tracking-wider items-center'
      >
        Sign up
      </Link>
    </main>
  );
}