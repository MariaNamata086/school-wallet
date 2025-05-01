'use client';

import Button from '@/app/components/shared/Button';
import Image from 'next/image';
import light_logo from '@assets/logo long.svg';
import React, { useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import FormInput from '@/app/components/shared/FormInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faSquareCheck } from '@fortawesome/free-solid-svg-icons';

function Signup() {
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<null | string>('Success');
  const [successMessage, setSuccessMessage] = useState<null | string>(null);
  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);

  const signUpSchema = yup.object({
    parentFirstName: yup.string().required("Please enter Parent's First Name"),
    parentLastName: yup.string().required("Please enter Parent's Last Name"),
    studentFirstName: yup
      .string()
      .required("Please enter Student's First Name"),
    studentLastName: yup.string().required("Please enter Student's Last Name"),
    phoneNumber: yup
      .string()
      .required('Phone number is required')
      .matches(/^\d{10,12}$/, 'Please enter a valid phone number'),
    emailAddress: yup
      .string()
      .email('Invalid Email Address')
      .required('Email is required'),
    password: yup.string().required('Password is required'),
  });
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      parentFirstName: '',
      parentLastName: '',
      studentFirstName: '',
      studentLastName: '',
      phoneNumber: '',
      emailAddress: '',
      password: '',
    },
    validationSchema: signUpSchema,
    onSubmit: async () => {
      try {
        setSubmitting(true);
        // make api request to backend
        setSuccessMessage(
          'Registration complete. A verification email has been sent to your email. Please verify your email to continue.',
        ); // or other message from backend
        // send link from backend to login page to user email
      } catch (error: any) {
        setSubmitting(false);
        // log error object and setError message to returned error
        setErrorMessage('Something went wrong. Please try again later.'); // or any other error message fron backend
      } finally {
        formik.resetForm();
        setTimeout(() => setSubmitting(false), 2000);
        setTimeout(() => setErrorMessage(null), 3000);
        setTimeout(() => setSuccessMessage(null), 3000);
        router.push('/authentication/login');
      }
    },
  });
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
        <h1 className='text-[25px] font-semibold md:text-[45px]'>
          Sign Up for Cash Dash
        </h1>
        <div className='flex flex-col p-2 md:p-3 gap-3  w-[70%]'>
          <form onSubmit={} className='flex flex-col gap-[15px] justify-center'>
            <div className='flex flex-col gap-1'>
              <span className=''>Guardian / Parent's Details</span>
              <div className='flex flex-col md:flex-row md:gap-2 md:items-center'>
                <FormInput
                  placeholder='Firstname'
                  type='text'
                  name='parentFirstName'
                />
                <FormInput
                  type='text'
                  placeholder='Lastname'
                  name='parentLastName'
                />
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <span className=''>Student Details</span>
              <div className='flex flex-col md:flex-row md:gap-2 md:items-center'>
                <FormInput
                  placeholder='Firstname'
                  type='text'
                  name='studentFirstName'
                />
                <FormInput
                  type='text'
                  placeholder='Lastname'
                  name='StudentLastName'
                />
              </div>
            </div>
            <FormInput
              name='emailAddress'
              type='text'
              placeholder='Enter email address'
            />
            <FormInput
              type='number'
              name='phoneNumber'
              placeholder='Please enter phone number'
            />
            <FormInput type='text' name='password' placeholder='Password' />
            <div className='flex flex-row items-center gap-1'>
              <button
                className='w-[20%] h-[20%] rounded-md bg-primary p-1'
                onClick={() => setAgreedToTerms(true)}
              >
                {agreedToTerms ? (
                  <FontAwesomeIcon icon={faCircleDot} />
                ) : (
                  <FontAwesomeIcon icon={faSquareCheck} />
                )}
              </button>
              <p className=''>
                By Clicking Sign Up, you agree to our Terms and Conditions
              </p>
            </div>
            <Button
              loading={submitting}
              textColor='#003148'
              disabled={submitting || !formik.isValid || !agreedToTerms}
              type='submit'
            />
            <div className='flex items-center gap-1'>
              <span className='text-white'>Already have an account?</span>
              <Link
                className='text-white hover:text-primary'
                href='authentication/login'
              >
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Signup;
