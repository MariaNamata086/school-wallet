import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import mobile_device_user from '@assets/mobile_device_user.png';
import mobile_mock_devices from '@assets/project_mock_devices.png';

function HomeHeader() {
  return (
    <section className='flex flex-col relative'>
      <div className='h-[400px] w-full tracking-wider'>
        <Image
          src={mobile_device_user}
          alt='image of a mobile device user'
          className='flex h-full w-full'
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className='bg-primary h-6 mt-8' />
      <div className='w-[500px] h-[292px] z-10 md:-mt-[160px] md:ml-[400px]'>
        <Image
          src={mobile_mock_devices}
          alt='A picture showing project optimised devices'
        />
      </div>
      <div className='h-full w-full flex flex-col justify-center items-center gap-8'>
        <p className='text-darkblue text-[20px] md:text-[30px] font-bold h-auto md:w-[360px] text-center leading-10'>
          Dash Your Child Pocket Money Quick!
        </p>
        <Link
          href='/authentication/signup'
          className='w-[230px] px-4 py-2 rounded-full border-[#53C9EB] text-white  bg-[#003148] text-[18px] text-center font-bold'
        >
          Sign Up for free
        </Link>
      </div>
    </section>
  );
}

export default HomeHeader;
