import { CHANGE_THEME } from '@/Features/themeSlice';
import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

type Props = {};

function Navbar({}: Props) {
  const dispatch = useDispatch();

  type store = {
    theme: 'light' | 'dark';
  };
  const theme = useSelector((state: store) => state?.theme);
  console.log('Theme: ', theme);

  function changeTheme() {
    if (theme === 'light') {
      dispatch(CHANGE_THEME('dark'));
    }
    if (theme === 'dark') {
      dispatch(CHANGE_THEME('light'));
    }
  }

  return (
    <div
      className={`wrapper border-b-2 h-24 ${
        theme === 'dark'
          ? 'animate-[toDark_1s_ease_1] border-b-2 border-b-green-500'
          : 'animate-[toLight_1s_ease_1]'
      }`}
    >
      <div className=' w-full lg:w-2/3 mx-auto flex justify-between h-full'>
        <div className=''>
          <Image
            src='/logo/reiz_tech_new.gif'
            alt='Reiz_tech_logo'
            height={'100'}
            width={'200'}
          />
        </div>
        <div className='h-full w-max grid place-content-center'>
          <h1 className='text-2xl'>HOMEWORK ASSIGNMENT</h1>
        </div>
        <div className='h-full grid place-content-center'>
          <button
            onClick={changeTheme}
            className={`h-12 w-12 border-2 border-black rounded-full ${
              theme === 'dark' && 'border-white'
            }`}
          >
            {theme === 'light' ? (
              <i className='fa fa-sun'></i>
            ) : (
              <i className='fa fa-moon'></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
