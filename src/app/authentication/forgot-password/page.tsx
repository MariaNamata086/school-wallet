'use client';

import Button from '@/app/components/shared/Button';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import light_logo from '@assets/logo long.svg';
import FormInput from '@/app/components/shared/FormInput';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

function ForgotPassword() {
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [successMessage, setSuccessMessage] = useState<null | string>(
    'Success',
  );
  const router = useRouter();

  const handleSubmit = (email: string) => {
    try {
      setLoading(true);
      // make post request to backend, see if database can be checked for sumitted email.
      // if email is valid, success message is returned, otherwise error message is returned
      setSuccessMessage(
        `Password reset instructions have been sent to ${email}. Please check your email`,
      );
      setTimeout(() => {
        setSuccessMessage(null);
        setLoading(false);
        router.push('/authentication/login');
      }, 5000);
    } catch (error) {
      setLoading(false);
      setErrorMessage('No account was found with that email address');
      setTimeout(() => setErrorMessage(null), 3000);
    }
  };
  return (
    <main className='bg-primary h-auto items-center justify-center p-20 tracking-wider flex leading-loose'>
      <div className='flex h-auto w-[400px] md:w-[800px] rounded-md bg-darkblue  flex-col items-center justify-center py-5 gap-3'>
        {(successMessage || errorMessage) && (
          <div
            className='flex p-1 h-auto w-[300px] md:w-[85%] justify-center items-center rounded-md text-[12px] border-[1.5px] font-semibold z-10'
            style={{
              color: successMessage
                ? 'oklch(72.3% 0.219 149.579)'
                : 'oklch(57.7% 0.245 27.325)',
              backgroundColor: successMessage
                ? 'oklch(92.5% 0.084 155.995)'
                : 'oklch(93.6% 0.032 17.717)',
              borderColor: successMessage
                ? 'oklch(72.3% 0.219 149.579)'
                : 'oklch(57.7% 0.245 27.325)',
            }}
          >
            {successMessage || errorMessage}
          </div>
        )}
        <div className='w-[114px] h-[140px]'>
          <Image
            src={light_logo}
            alt='Image of school wallet logo'
            className='object-contain'
          />
        </div>
        <p className='font-semibold text-white text-[20px] md:text-[35px]'>
          Forgot Your Password?
        </p>
        <div className='flex flex-col p-2 w-[70%]'>
          <FormInput
            type='email'
            value={userEmail}
            placeholder='Enter your email to reset'
            onChange={(event) => setUserEmail(event.target.value)}
            required
            icon={faCircleUser}
          />
        </div>
        <Button
          loading={loading}
          textColor='#003148'
          textSize='text-md md:text-lg'
          disabled={loading || !userEmail}
          onClick={() => handleSubmit(userEmail)}
        >
          Submit
        </Button>
        <div className='flex items-center gap-2'>
          <div className='flex h-[1px] w-[180px] bg-slate-500' />
          <span className='font-light text-[20px] md:font-[30px]'>Or</span>
          <div className='flex h-[1px] w-[180px] bg-slate-500' />
        </div>
        <Link
          href='/authentication/login'
          className='flex justify-center h-[40px] md:h[70px] w-[40%] p-2 items-cnter rounded-md bg-primary font-semibold text-md hover:scale-105 md:text-lg text-darkblue md:mb-4'
        >
          Back to Login
        </Link>
      </div>
    </main>
  );
}

export default ForgotPassword;
