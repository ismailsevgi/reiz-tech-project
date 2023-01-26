import { CHANGE_THEME } from '@/Features/themeSlice';
import Image from 'next/image';
import React, { useEffect } from 'react';

import useDeclaredHooks from '../DeclaredHooks/useDeclaredHooks';

function Navbar() {
  // const dispatch = useDispatch();
  const { dispatch, theme } = useDeclaredHooks();
  type store = {
    theme: 'light' | 'dark';
  };
  // const theme = useSelector((state: store) => state?.theme);
  console.log('Theme: ', theme);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      dispatch(CHANGE_THEME('light'));
    }
    if (theme === 'dark') {
      dispatch(CHANGE_THEME('dark'));
    }
  }, []);

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
      className={`border-b-2 h-24 px-4 ${
        theme === 'dark'
          ? 'animate-[toDark_1s_ease_1] border-b-2 border-b-green-500'
          : 'animate-[toLight_1s_ease_1]'
      }`}
    >
      <div className=' w-full lg:w-2/3 mx-auto flex justify-between h-full'>
        <div className='grid place-content-center'>
          <Image
            src={
              theme === 'dark'
                ? '/logo/reiz_white.gif'
                : '/logo/reiz_tech_black.gif'
            }
            alt='Reiz_tech_logo'
            height={'100'}
            width={'200'}
            className='shrink-0'
          />
        </div>
        <div className='h-full w-max grid place-content-center'>
          <h1 className=' sm:text-2xl'>HOMEWORK ASSIGNMENT</h1>
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
