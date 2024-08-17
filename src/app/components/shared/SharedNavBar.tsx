import Image from 'next/image';
import React, { useState } from 'react';
import light_logo from '@assets/light_logo_short.png';
import { FaRegBell } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import settings_image from '@assets/settings.png';
import user_icon from '@assets/user_icon_blue.png';

function SharedNavBar() {
  const [isTabActive, setIsTabActive] = useState<Boolean>(false);
  const pathName = usePathname();
  console.log(pathName);

  const setActiveTabColor = (route: string) => {
    const isActive = pathName === route;
    setIsTabActive(isActive);
  };

  return (
    <nav className='flex flex-row items-center justify-between py-1 md:py-2 px-10 w-full bg-darkblue h-[58px] md:h-[80px]'>
      <div className='flex items-center justify-around text-[15px] md:text-[20px] w-1/2 font-semibold'>
        <div className='w-[49px] h-[59.11px]'>
          <Image src={light_logo} alt="image of the project's light logo" />
        </div>
        <Link
          href='/others'
          className='text-[18px]'
          style={{ color: isTabActive ? '#53C9EB' : 'white' }}
          onClick={() => setActiveTabColor('/others')}
        >
          Home
        </Link>
        <Link
          href='/others/dashboard/transactions'
          className='text-[18px]'
          style={{ color: isTabActive ? '#53C9EB' : 'white' }}
          onClick={() => setActiveTabColor('/others/dashboard/transactions')}
        >
          Transactions
        </Link>
        <Link
          href='/others/dashboard'
          className='text-[18px]'
          onClick={() => setActiveTabColor('/others/dashboard')}
          style={{ color: isTabActive ? '#53C9EB' : 'white' }}
        >
          Dashboard
        </Link>
      </div>
      <div className='flex items-center w-1/4 justify-around'>
        <Link
          href='/notifications'
          className='w-[30px] h-[32px]'
          style={{ color: pathName === '/notifications' ? '#53C9EB' : 'white' }}
        >
          <FaRegBell size={35} />
        </Link>
        <Link href='/notifications' className='w-[30px] h-[35px] '>
          <Image
            src={settings_image}
            alt='image of settings icon'
            style={{ objectFit: 'contain' }}
          />
        </Link>
        <Link href='/notifications' className='w-[45px] h-[45px]'>
          <Image
            src={user_icon}
            alt='image of a user icon'
            style={{ objectFit: 'contain' }}
          />
        </Link>
      </div>
    </nav>
  );
}

export default SharedNavBar;
