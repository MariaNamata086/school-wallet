'use client';

import Button from '@/app/components/shared/Button';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import light_logo from '@assets/light_logo_short.png';
import FormInput from '@/app/components/shared/FormInput';

function ForgotPassword() {
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  return (
    <main className='bg-primary h-auto items-center justify-center p-20 tracking-wider leading-loose'>
      <div className='h-auto w-[400px] rounded-md bg-darkblue flex flex-col items-center justify-center gap-8 p-10'>
        <div className='w-[114px] h-[140px]'>
          <Image src={light_logo} alt='Image of school wallet logo' />
        </div>
      </div>
      <FormInput
        type='email'
        value={userEmail}
        placeholder='enter your email'
        onChange={(event) => setUserEmail(event.target.value)}
        required
        //find icon
      />
      <Button loading={loading} textColor='text-primary' disabled={loading}>
        Submit
      </Button>
      <div className='flex items-center gap-[2px]'>
        <div className='h-1 bg-slate-700' />
        <span className=''>Or</span>
        <div className='h-1 bg-slate-700' />
      </div>
      <Link href='/authentication/login' className=''>
        Back to Login
      </Link>
    </main>
  );
}

export default ForgotPassword;
