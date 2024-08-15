"use client"

import Button from '@/app/components/shared/Button'
import Image from 'next/image'
import light_logo from '@assets/light_logo_short.png';
import React, {useState} from 'react'
import Link from 'next/link';
import { useFormik } from 'formik';
import FormInput from '@/app/components/shared/FormInput';

function Login() {
const [loading, setLoading] = useState(false);
const [errorMessage, setErrorMessage] = useState<null | string>(null);

 const handleLogin = () => {
  //use formik to handle form submission
  setLoading(true);
  setLoading(false);
 }
   //create a form validation schema using yup
   //use the useFormik hook to handle form
  
   const loginDetails = {
    email:'enter email',
    walletNumber : 'school wallet number'
   }

   const getIcon = (inputField: string) => {
    let icon;
    //get actual icons
    inputField === 'email'? 'mailicon' : 'password icon';
    icon = inputField;
    return icon;
   }
  return (
    <main className='bg-primary h-auto items-center justify-center p-20 tracking-wider leading-loose'>
      <div className='h-auto w-[400px] rounded-md bg-darkblue flex flex-col items-center justify-center gap-8 p-10'>
        <div className='w-[114px] h-[140px]'>
          <Image src={light_logo} alt='Image of school wallet logo'/>
        </div>
        <span className=''>Welcome to Cash Dash</span>
        <div>
          {
            Object.keys(loginDetails).map((item, index) => {
              return (
                <div className='' key={index}>
                  <FormInput
                  type='text'
                  value={loginDetails[item as keyof typeof loginDetails]}
                  // {/* formik to handle onChange */}
                  placeholder = {loginDetails[item as keyof typeof loginDetails]}
                  required
                  // {/*handle error using formik  */}
                  icon={getIcon(item)}
                  />
                </div>
              )
            })
          }
          </div>
        <Button loading={loading} textColor='text-primary' disabled={loading}>Login</Button>
        <div className='flex items-center justify-between'>
          <div className='flex font-semibold items-center gap-2 text-[20px]'>
            <span className=''>Forgot PassWord?</span>
            <Link href='/authentication/wallet-number-reset' className='text-primary'>Reset</Link>
          </div>
          <div className='flex font-semibold items-center gap-2 text-[20px]'>
            <span className=''>New to Cash Dash?</span>
            <Link href='/authentication/signup' className='text-primary'>Sign Up</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login