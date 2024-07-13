import Image from 'next/image';
import React from 'react';
import light_logo from '@assets/light_logo_short.png';
import { FaRegBell } from 'react-icons/fa';
import Link from 'next/link';
import settings_image from '@assets/settings.png';
import user_icon from '@assets/user_icon_blue.png'

function SharedNavBar() {
  return (
    <nav className='flex flex-row items-center justify-between py-1 md:py-2 px-4 w-full bg-darkblue h-[110px]'>
      <div className='flex items-center justify-around text-[15px] md:text-[20px] font-semibold'>
        <div className='w-[49px] h-[59.11px]'>
          <Image src={light_logo} alt="image of the project's light logo" />
        </div>
        <span className='' style={{}}>
          Home
        </span>
        <span className='' style={{}}>
          Transactions
        </span>
        <span className='' style={{}}>
          Dashboard
        </span>
      </div>
      <div className='flex place-items-centerjustify-around'>
        <Link href='/notifications' className='w-[30px] h-[32px]'>
          <FaRegBell />
        </Link>
        <Link href='/notifications' className='w-[30px] h-[35px]'>
          <Image src={settings_image} alt='image of settings icon' style={{objectFit:'contain'}}/>
        </Link>
        <Link href='/notifications' className='w-[55.33px] h-[55.33px]'>
         <Image src={user_icon} alt='image of a user icon' style={{objectFit:'contain'}}/>
        </Link>
      </div>
    </nav>
  );
}

export default SharedNavBar;
