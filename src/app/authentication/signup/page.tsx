import Image from 'next/image';
import React from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import projectMockDevices from '@assets/project_mock_devices.png';
import Link from 'next/link';

function SignUp() {
  return (
    <main className='flex flex-col items-center tracking-wider bg-white'>
      <div className='h-[200px] md:h-[400px] w-full -z-10 bg-primary mt-[400px] md:mt-[700px]' />
      <div className='flex z-20 flex-col gap-6 justify-center'>
        <div className='w-[75%] mx-auto h-[710px] mt-20 md:mt-[180px]'>
          <Image src={projectMockDevices} style={{objectFit:'contain'}} alt='Photo showing devices for which the system is optimised'/>
        </div>
        <Link href='/authentication/signup/signup-form' className='flex items-center justify-around p-2 rounded-full bg-darkblue w-[150px] md:w-[320px] h-[60px] md:h-[74px]'>
          <span className='flex border border-primary'>
            <IoIosAddCircle color='#53C9EB' />
          </span>
          <span className='text-white text-center text-[25px] md:text-[30px] font-semibold md:font-bold'>
            Add Student
          </span>
        </Link>
      </div>
    </main>
  );
}

export default SignUp;
