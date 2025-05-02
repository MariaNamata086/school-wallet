'use client';

import Button from '@/app/components/shared/Button';
import Image from 'next/image';
import light_logo from '@assets/logo_long.svg';
import React, { useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import FormInput from '@/app/components/shared/FormInput';
import { faLock, faCircleUser } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const [submitting, setSubmitting] = useState<boolean>(false);
  // const [errorMessage, setErrorMessage] = useState<null | string>(null);
  // const [successMessage, setSuccessMessage] = useState<null | string>(null);

  const loginValidationSchema = yup.object({
    emailAddress: yup
      .string()
      .email('Invalid Email Address')
      .required('Email is required'),
    password: yup.string().required('Password is required'),
  });

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
        formik.resetForm();
        setTimeout(() => setSubmitting(false), 2000);
        // setTimeout(() => setErrorMessage(null), 4000);
        // setTimeout(() => setSuccessMessage(null), 4000);
        router.push('/others');
      }
    },
  });

  const loginDetails = {
    emailAddress: 'Enter email address',
    password: 'Enter your Password',
  };

  const getIcon = (inputField: string) => {
    const icon = inputField === 'emailAddress' ? faCircleUser : faLock;
    return icon;
  };
  return (
    <main className='bg-primary flex h-auto items-center  justify-center p-20 tracking-wider leading-loose'>
      <div className='h-auto w-[400px] md:w-[720px] rounded-md bg-darkblue flex flex-col items-center justify-center gap-6 p-5'>
        <div className='flex items-center justify-center md:w-[114px] h-[140px] relative'>
          <Image
            src={light_logo}
            alt='Image of school wallet logo'
            className='object-contain'
            fill
          />
        </div>
        <span className='text-[25px] font-semibold md:text-[45px]'>
          Welcome to Cash Dash
        </span>
        <div className='flex flex-col p-2 md:p-3 gap-3 md:gap-4 w-[70%]'>
          <form onSubmit={formik.handleSubmit}>
            {Object.keys(loginDetails).map((item, index) => {
              return (
                <div className='' key={index}>
                  <FormInput
                    type='text'
                    name={item}
                    value={formik.values[item as keyof typeof formik.values]}
                    onChange={formik.handleChange}
                    placeholder={
                      loginDetails[item as keyof typeof loginDetails]
                    }
                    required
                    error={
                      formik.touched[item as keyof typeof formik.values] &&
                      Boolean(formik.errors[item as keyof typeof formik.values])
                    }
                    icon={getIcon(item)}
                  />
                </div>
              );
            })}
            <Button
              loading={submitting}
              className='text-darkblue font-bold mt-2 text-[25px]'
              textColor='#003148'
              textSize='text-md md:text-lg'
              disabled={submitting || !formik.isValid}
              type='submit'
            >
              Login
            </Button>
          </form>
        </div>
        <div className='flex flex-col gap-3 md:flex-row items-center p-3 tracking-wider md:gap-10'>
          <div className='flex items-center gap-2 '>
            <span className='text-[20px] font-semibold'>Forgot PassWord?</span>
            <Link
              href='/authentication/password-reset'
              className='text-primary'
            >
              (Reset)
            </Link>
          </div>
          <div className='flex items-center gap-2 '>
            <span className='text-[20px] font-semibold'>New to Cash Dash?</span>
            <Link href='/authentication/signup' className='text-primary'>
              (Sign Up)
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
