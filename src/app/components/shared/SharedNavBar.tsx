import Image from 'next/image'
import React from 'react'
import light_logo from '@assets/light_logo_short.png';

function SharedNavBar() {
  return (
      <nav className='flex flex-row items-center justify-between py-1 md:py-2 px-4 w-full bg-darkblue'>
          <div className='flex items-center justify-around text-[15px] md:text-[20px] font-semibold'>
              <div className='w-[49px] h-[59.11px]'>
                  <Image src={light_logo} alt="image of the project's light logo"/>
              </div>
              <span className='' style={{}}>
                  Home
              </span>
              <span className='' style={{}}>
                  Transactions
              </span>
          </div>
    </nav>
  )
}

export default SharedNavBar