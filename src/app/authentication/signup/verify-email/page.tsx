import React from 'react';
import Image from 'next/image';
import light_logo from '@assets/logo long.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

function SignUpForm() {
  return (
    <main className='bg-primary flex h-auto items-center  justify-center p-20 tracking-wider leading-loose'>
      <div className='h-auto w-[400px] md:w-[720px] rounded-md bg-darkblue flex flex-col items-center justify-center gap-8 md:gap-10 p-10'>
        <div className='flex items-center justify-center md:w-[114px] h-[140px] relative'>
          <Image
            src={light_logo}
            alt='Image of school wallet logo'
            className='object-contain'
            fill
          />
        </div>
        <div className='flex flex-row items-center'>
          <FontAwesomeIcon
            icon={faCircleCheck}
            size='sm'
            color='oklch(76.8% 0.233 130.85)'
          />
          <p className='text-white'>
            Thank you for signing up! Please check your email to verify your
            account.
          </p>
        </div>
      </div>
    </main>
  );
}

export default SignUpForm;
