'use client';

import Button from '@/app/components/shared/Button';
import Image from 'next/image';
import light_logo from '@assets/logo long.svg';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import FormInput from '@/app/components/shared/FormInput';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import * as yup from 'yup';

function PasswordReset() {
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<null | string>('Success');
  const [successMessage, setSuccessMessage] = useState<null | string>(null);

  const router = useRouter();
  const passwordResetSchema = yup.object({
    newPassword: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long'),
    confirmedPassword: yup
      .string()
      .required('Re-enter Password')
      .oneOf([yup.ref('newPassword')], 'Passwords do not match'),
  });

  const passwordResetDetails = {
    newPassword: 'Please enter password',
    confirmedPassword: 'Confrim Password',
  };

  const formik = useFormik({
    initialValues: { newPassword: '', confirmedPassword: '' },
    validationSchema: passwordResetSchema,
    onSubmit: () => {
      try {
        setSubmitting(true);
        // make api request to backend
        setSuccessMessage('Your password has been successfully reset.'); // or other message from backend
      } catch (error: any) {
        setSubmitting(false);
        // log error object and setError message to returned error
        setErrorMessage('Reset link is invalid or has expired.'); // or any other error message fron backend
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
      <div className='h-auto w-[400px] md:w-[720px] rounded-md bg-darkblue flex flex-col items-center justify-center gap-8 md:gap-10 p-10 text-white'>
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
        <div className='flex items-center justify-center md:w-[114px] h-[140px] relative'>
          <Image
            src={light_logo}
            alt='Image of school wallet logo'
            className='object-contain'
            fill
          />
        </div>
        <div className='flex flex-col gap-1'>
          <span className='text-[25px] md:font-[35px] font-semibold md:text-[45px]'>
            Reset Your Password
          </span>
          <span className='font-medium text-[18px] md:text-[28px]'>
            Enter Your Password Below
          </span>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className='flex flex-col p-2 md:p-3 gap-3  w-[70%]'
        >
          {Object.keys(passwordResetDetails).map((item, index) => {
            return (
              <FormInput
                key={index}
                type='text'
                name={item}
                value={formik.values[item as keyof typeof formik.values]}
                onChange={formik.handleChange}
                placeholder={
                  passwordResetDetails[
                    item as keyof typeof passwordResetDetails
                  ]
                }
                required
                error={
                  formik.touched[item as keyof typeof formik.values] &&
                  Boolean(formik.errors[item as keyof typeof formik.values])
                }
                icon={faLock}
              />
            );
          })}
          <Button
            loading={submitting}
            className='text-darkblue font-bold text-[25px]'
            textColor='#003148'
            disabled={submitting || !formik.isValid}
            type='submit'
          >
            Submit
          </Button>
        </form>
      </div>
    </main>
  );
}

export default PasswordReset;
