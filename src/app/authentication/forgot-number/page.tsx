'use client';

import Button from '@/app/components/shared/Button';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import light_logo from '@assets/logo long.svg';
import FormInput from '@/app/components/shared/FormInput';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

function ForgotPassword() {
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<null | string>('Success');
  const [successMessage, setSuccessMessage] = useState<null | string>(null);
  const router = useRouter();

  const handleSubmit = (email: string) => {
    try {
      setLoading(true);
      // make post request to backend, see if database can be checked for sumitted email.
      // if email is valid, success message is returned, otherwise error message is returned
      setSuccessMessage(
        `Password reset instructions have been sent to ${email}. Please check your email.`,
      );
      router.push('/authentication/login');
    } catch (error) {
      setLoading(false);
      setErrorMessage('No account was found with that email address');
      setTimeout(() => setErrorMessage(null), 2000);
    }
  };
  return (
    <main className='bg-primary h-auto items-center justify-center p-20 tracking-wider leading-loose'>
      <div className='h-auto w-[400px] md:w-[800px] rounded-md bg-darkblue flex flex-col items-center justify-center gap-8 p-10'>
        {successMessage ||
          (errorMessage && (
            <div
              className='p-2 h-2 w-4 rounded-md text-[12px] font-semiobold'
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
          ))}
        <div className='w-[114px] h-[140px]'>
          <Image
            src={light_logo}
            alt='Image of school wallet logo'
            className='object-contain'
          />
        </div>
        <p className='font-semibold text-white text-[20px] md:text-[40px]'>
          Forgot Your Password?
        </p>
      </div>
      <FormInput
        type='email'
        value={userEmail}
        placeholder='Enter your email to reset'
        onChange={(event) => setUserEmail(event.target.value)}
        required
        icon={faCircleUser}
      />
      <Button
        loading={loading}
        textColor='text-primary'
        disabled={loading}
        onClick={() => handleSubmit(userEmail)}
      >
        Submit
      </Button>
      <div className='flex items-center gap-[2px]'>
        <div className='h-1 bg-slate-700' />
        <span className=''>Or</span>
        <div className='h-1 bg-slate-700' />
      </div>
      <div className='flex items-center gap-1'>
        <div className='flex h-[1px] w-3 bg-[#FFFFFF]' />
        <span className='font-light text-[25px] md:font-[30px]'>Or</span>
        <div className='flex h-[1px] w-3 bg-[#FFFFFF]' />
      </div>
      <Link
        href='/authentication/login'
        className='h-[40px] md:h[70px] w-[40%] p-2 items-cnter rounded-md bg-primary font-semibold text-[20px] md:text-[30px]'
      >
        Back to Login
      </Link>
    </main>
  );
}

export default ForgotPassword;
