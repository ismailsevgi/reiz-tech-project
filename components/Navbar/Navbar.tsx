import Image from 'next/image';
import React from 'react';

type Props = {};

function Navbar({}: Props) {
  return (
    <div>
      <div className='bg-gray-600'>
        <Image
          src='/logo/reiz_tech_new.gif'
          alt='Reiz_tech_logo'
          height={'100'}
          width={'200'}
        />
      </div>
      <div>Light | Dark</div>
    </div>
  );
}

export default Navbar;
