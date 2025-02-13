import Link from 'next/link';
import React from 'react';

interface FooterSubContentProps {
  title: string;
  content: string;
  moreInfo?: string;
}

function Footer() {
  const footerSubContent = [
    {
      title: 'Its Safe',
      content:
        'With Your Account, you can securely send your child pocket money without any hassle',
    },
    {
      title: 'Seamless on all devices',
      content:
        'With Your Account, you can securely send your child pocket money without any hassle',
    },

    {
      title: 'Its Convenient',
      content:
        'With Your Account, you can securely send your child pocket money without any hassle',
      moreInfo: 'Check T&Cs',
    },
  ];
  return (
    <footer className='flex flex-col items-center h-auto mb-20 bg-white gap-10'>
      <div className='flex flex-col h-full md:h-1/2  py-[60px] bg-[#53C9EB] gap-8 px-10 leading-loose tracking-wider text-[#003148]'>
        <span className=' text-[30px] md:text-[35px] text-center font-bold'>
          Join Parents and Guardians using CashDash countrywide{' '}
        </span>
        <div className='flex flex-col md:flex-row justify-around p-5'>
          {footerSubContent.map(({ title, content, moreInfo }, index) => {
            return (
              <FooterSubContent
                key={index}
                title={title}
                content={content}
                moreInfo={moreInfo}
              />
            );
          })}
        </div>
      </div>
      <Link
        href='/authentication/login'
        className='font-bold h-[55px] hidden items-center justify-center py-2 px-4 rounded-full bg-primary text-darkblue md:flex w-[330px] md:text-[18px]'
      >
        Get Started
      </Link>
    </footer>
  );
}

export default Footer;

const FooterSubContent = ({
  title,
  content,
  moreInfo,
}: FooterSubContentProps) => {
  return (
    <div className='flex flex-col gap-3 items-start'>
      <span className='font-semibold text-[20px]'>{title}</span>
      <span className='font-normal text-[12px] md:text-[14px]'>{content}</span>
      {moreInfo && <span className='mt-3'>{moreInfo}</span>}
    </div>
  );
};
