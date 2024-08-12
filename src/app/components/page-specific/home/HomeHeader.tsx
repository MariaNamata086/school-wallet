import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import mobile_device_user from '@assets/mobile_device_user.png';
import mobile_mock_devices from '@assets/project_mock_devices.png'

function HomeHeader() {
  return (
    <section className='flex flex-col relative'>
      <div className=' bg-red-300 h-[400px] w-full relative tracking-wider'>
        {/* <div className='z-20 text-slate-800 h-full bg-[#003148]/30 w-full absolute flex flex-col gap-10'>
        <p className='text-white text-[40px] font-semibold text-center leading-10'>
          Dash Your Child Pocket Money Online!
        </p>
        <Link
          href='/authentication/signup'
          className='w-[200px] h-[40px] px-4 py-2 rounded-full border-[#53C9EB] text-white  bg-[#003148] text-[30px] text-center font-bold'
        >
          Sign Up for free
        </Link>
      </div> */}
        <Image
          src={mobile_device_user}
          alt='image of a mobile device user'
          className='flex h-full w-full'
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className='bg-primary h-6 mt-8' />
      <div className='w-[500px] h-[292px] z-10 md:-mt-[219px] md:ml-[137px] bg-amber-300'>
        <Image src={mobile_mock_devices} alt='A picture showing project optimised devices'/>
      </div>
    </section>
  );
}

export default HomeHeader