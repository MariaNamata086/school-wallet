"use client"

import Image from 'next/image';
import school_logo from '@assets/palslogo-removebg-preview.png'
import FormInput from './components/shared/FormInput';
import Button from './components/shared/Button';
import React, {useState} from 'react';

export default function Home() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);

    // setTimeout((()=> setSubmitting(false)),5000)
  }
  return (
    <main className='flex flex-col items-center gap-10  px-20 py-10 bg-white h-full '>
      <div className='flex flex-col gap-8 justify-center items-center text-slate-700'>
        <div className='flex h-[220px] w-[220px] rounded-full justify-center items-center bg-slate-100 p-2'>
          <Image
            src={school_logo}
            className='h-[200px] w-[200px] -mt-4'
            alt='school logo'
          />
        </div>
        <span className='tracking-wider font-semibold text-xl'>
          Pals Legacy Junior School
        </span>
      </div>
      <div className='flex flex-col gap-5 text-slate-700 shadow-lg p-8 rounded-md'>
        <p className=''>Please enter your student Wallet number to login</p>
        <FormInput type='text' />
        <Button
          type='submit'
          textColor='text-white'
          onClick={handleSubmit}
          loading={submitting}
          textSize='text-[16px]'
        >
          Login
        </Button>
      </div>
    </main>
  );
}
