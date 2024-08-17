'use client';

import Button from '@/app/components/shared/Button';
import Image from 'next/image';
import light_logo from '@assets/light_logo_short.png';
import React, { useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import FormInput from '@/app/components/shared/FormInput';
import { faLock, faCircleUser } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const [submitting, setSubmitting] = useState(false);
  // const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const loginValidationSchema = yup.object({
    emailAddress: yup.string().required('Please enter your email'),
    password: yup.string().required('Please enter your password'),
  });
  // consider adding a minimum and maximum length check for the school wallet number
  const router = useRouter();

  const formik = useFormik({
    initialValues: { emailAddress: '', password: '' },
    validationSchema: loginValidationSchema,
    onSubmit: async () => {
      try {
        setSubmitting(true);
        // make api request to backend
      } catch (error: any) {
        setSubmitting(false);
        // log error object and setError message to returned error
      } finally {
        setSubmitting(false);
        formik.resetForm();
        // setTimeout(() => setErrorMessage(null), 4000);
        router.push('/others');
      }
    },
  });

  const loginDetails = {
    emailAddress: 'Enter email address',
    password: 'School wallet number',
  };

  const getIcon = (inputField: string) => {
    const icon = inputField === 'emailAddress' ? faCircleUser : faLock;
    return icon;
  };
  return (
    <main className='bg-primary h-auto items-center justify-center p-20 tracking-wider leading-loose'>
      <div className='h-auto w-[400px] rounded-md bg-darkblue flex flex-col items-center justify-center gap-8 p-10'>
        <div className='w-[114px] h-[140px]'>
          <Image src={light_logo} alt='Image of school wallet logo' />
        </div>
        <span className=''>Welcome to Cash Dash</span>
        <div>
          {Object.keys(loginDetails).map((item, index) => {
            return (
              <div className='' key={index}>
                <FormInput
                  type='text'
                  value={loginDetails[item as keyof typeof loginDetails]}
                  onChange={formik.handleChange}
                  placeholder={loginDetails[item as keyof typeof loginDetails]}
                  required
                  error={
                    formik.touched[item as keyof typeof loginDetails] &&
                    Boolean(formik.errors[item as keyof typeof loginDetails])
                  }
                  icon={getIcon(item)}
                />
              </div>
            );
          })}
        </div>
        <Button
          loading={submitting}
          textColor='text-primary'
          disabled={submitting}
        >
          Login
        </Button>
        <div className='flex items-center justify-between'>
          <div className='flex font-semibold items-center gap-2 text-[20px]'>
            <span className=''>Forgot PassWord?</span>
            <Link
              href='/authentication/wallet-number-reset'
              className='text-primary'
            >
              Reset
            </Link>
          </div>
          <div className='flex font-semibold items-center gap-2 text-[20px]'>
            <span className=''>New to Cash Dash?</span>
            <Link href='/authentication/signup' className='text-primary'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
